"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ReactNode;
  delay: number;
}

const StatCard = ({
  label,
  value,
  trend,
  trendUp,
  icon,
  delay,
}: StatItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      <div
        className={cn(
          "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
          trendUp
            ? "bg-success/10 text-success"
            : "bg-destructive/10 text-destructive",
        )}
      >
        {trendUp ? (
          <ArrowUpRight className="w-3 h-3" />
        ) : (
          <ArrowDownRight className="w-3 h-3" />
        )}
        {trend}
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <h3 className="text-2xl font-black text-foreground tracking-tight">
        {value}
      </h3>
    </div>
  </motion.div>
);

export default function StatsGrid() {
  const stats = [
    {
      label: "Total Balance",
      value: "$24,562.00",
      trend: "+12.5%",
      trendUp: true,
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      label: "Monthly Income",
      value: "$6,200.00",
      trend: "+8.2%",
      trendUp: true,
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      label: "Monthly Expenses",
      value: "$3,450.00",
      trend: "-2.4%",
      trendUp: false,
      icon: <TrendingDown className="w-5 h-5" />,
    },
    {
      label: "Total Savings",
      value: "$12,840.00",
      trend: "+15.0%",
      trendUp: true,
      icon: <CreditCard className="w-5 h-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={stat.label} {...stat} delay={index * 0.1} />
      ))}
    </div>
  );
}
