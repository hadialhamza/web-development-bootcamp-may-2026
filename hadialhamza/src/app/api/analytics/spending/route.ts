import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/db";
import Transaction from "@/models/Transaction";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const months = Array.from({ length: 6 }, (_, i) => {
      const now = new Date();
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      
      const start = new Date(date.getFullYear(), date.getMonth(), 1);
      const end = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);

      return {
        name: date.toLocaleString('en-US', { month: 'short' }),
        start,
        end,
      };
    }).reverse();

    const chartData = await Promise.all(
      months.map(async (month) => {
        const transactions = await Transaction.find({
          userId: session.user.id,
          date: { $gte: month.start, $lte: month.end },
        });

        const income = transactions
          .filter((t) => t.type === "income")
          .reduce((sum, t) => sum + t.amount, 0);
        
        const expenses = transactions
          .filter((t) => t.type === "expense")
          .reduce((sum, t) => sum + t.amount, 0);

        return {
          name: month.name,
          income,
          expenses,
        };
      })
    );

    return NextResponse.json(chartData);
  } catch (error: unknown) {
    console.error("Analytics Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
