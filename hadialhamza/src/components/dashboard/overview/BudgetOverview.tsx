"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const budgets = [
  { category: "Food & Drinks", spent: 450, total: 600, color: "bg-orange-500" },
  { category: "Shopping", spent: 850, total: 1000, color: "bg-blue-500" },
  { category: "Transport", spent: 120, total: 300, color: "bg-purple-500" },
  {
    category: "Entertainment",
    spent: 280,
    total: 250,
    color: "bg-destructive",
  },
];

export default function BudgetOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-card border border-border p-6 rounded-2xl shadow-sm h-full flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-black text-foreground tracking-tight">
            Budget Overview
          </h3>
          <p className="text-sm text-muted-foreground font-medium">
            Monthly limits tracking
          </p>
        </div>
      </div>

      <div className="space-y-6 flex-1">
        {budgets.map((b) => {
          const percent = Math.min((b.spent / b.total) * 100, 100);
          return (
            <div key={b.category} className="space-y-2">
              <div className="flex justify-between items-end">
                <p className="text-sm font-bold text-foreground">
                  {b.category}
                </p>
                <p className="text-xs font-medium text-muted-foreground">
                  <span className="font-black text-foreground">${b.spent}</span>{" "}
                  of ${b.total}
                </p>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  className={cn("h-full rounded-full", b.color)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-xl">
        <p className="text-xs font-medium text-foreground leading-relaxed">
          <span className="font-black text-primary uppercase tracking-widest mr-1">
            Insights:
          </span>
          You&apos;ve spent 85% of your food budget. Try to stay within limits
          this week.
        </p>
      </div>
    </motion.div>
  );
}
