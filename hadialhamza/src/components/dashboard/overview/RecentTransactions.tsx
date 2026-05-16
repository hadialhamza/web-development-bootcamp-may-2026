"use client";

import { motion } from "motion/react";
import { ShoppingCart, Utensils, Car, Zap, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  { id: 1, name: "Amazon Superstore", category: "Shopping", amount: -120.50, date: "Today, 04:30 PM", icon: <ShoppingCart className="w-4 h-4" />, color: "bg-blue-500/10 text-blue-500" },
  { id: 2, name: "Starbucks Coffee", category: "Food & Drinks", amount: -12.00, date: "Today, 11:20 AM", icon: <Utensils className="w-4 h-4" />, color: "bg-orange-500/10 text-orange-500" },
  { id: 3, name: "Salary Deposit", category: "Income", amount: 4500.00, date: "Yesterday, 09:00 AM", icon: <Wallet className="w-4 h-4" />, color: "bg-emerald-500/10 text-emerald-500" },
  { id: 4, name: "Shell Gas Station", category: "Transport", amount: -65.00, date: "Yesterday, 06:15 PM", icon: <Car className="w-4 h-4" />, color: "bg-purple-500/10 text-purple-500" },
  { id: 5, name: "Electricity Bill", category: "Utilities", amount: -85.20, date: "2 days ago", icon: <Zap className="w-4 h-4" />, color: "bg-yellow-500/10 text-yellow-500" },
];

export default function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-black text-foreground tracking-tight">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground font-medium">Your latest financial activities</p>
        </div>
        <button className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4 flex-1">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors group">
            <div className="flex items-center gap-4">
              <div className={cn("p-3 rounded-xl", t.color)}>
                {t.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{t.name}</p>
                <p className="text-xs text-muted-foreground font-medium">{t.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={cn("text-sm font-black", t.amount > 0 ? "text-primary" : "text-foreground")}>
                {t.amount > 0 ? "+" : ""}{t.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </p>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">{t.category}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
