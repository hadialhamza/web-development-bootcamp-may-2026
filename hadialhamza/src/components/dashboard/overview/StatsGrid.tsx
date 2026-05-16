"use client";

import { useState, useEffect } from "react";
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
import { formatCurrency } from "@/lib/currency";
import { Skeleton } from "@/components/ui/Skeleton";

interface StatData {
  label: string;
  value: number;
  trend: string;
  trendUp: boolean;
}

interface StatItemProps extends StatData {
  icon: React.ReactNode;
  delay: number;
  isLoading?: boolean;
}

const StatCard = ({
  label,
  value,
  trend,
  trendUp,
  icon,
  delay,
  isLoading,
}: StatItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      {!isLoading ? (
        <div
          className={cn(
            "flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter",
            trendUp
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-rose-500/10 text-rose-500",
          )}
        >
          {trendUp ? (
            <ArrowUpRight className="w-3 h-3" />
          ) : (
            <ArrowDownRight className="w-3 h-3" />
          )}
          {trend}
        </div>
      ) : (
        <Skeleton className="w-12 h-5 rounded-full" />
      )}
    </div>
    <div className="space-y-1">
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
      <div className="flex items-center gap-2">
        {isLoading ? (
          <Skeleton className="h-8 w-24 rounded-lg" />
        ) : (
          <h3 className="text-2xl font-black text-foreground tracking-tight tabular-nums">
            {formatCurrency(value)}
          </h3>
        )}
      </div>
    </div>
    
    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
      <div className="scale-[3]">
        {icon}
      </div>
    </div>
  </motion.div>
);

export default function StatsGrid() {
  const [stats, setStats] = useState<StatData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const icons = [
    <Wallet key="wallet" className="w-5 h-5" />,
    <TrendingUp key="income" className="w-5 h-5" />,
    <TrendingDown key="expense" className="w-5 h-5" />,
    <CreditCard key="savings" className="w-5 h-5" />,
  ];

  useEffect(() => {
    let isMounted = true;
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/analytics/stats");
        if (res.ok && isMounted) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch stats", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchStats();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {isLoading ? (
        Array.from({ length: 4 }).map((_, i) => (
          <StatCard
            key={`skeleton-${i}`}
            label="Loading..."
            value={0}
            trend="0%"
            trendUp={true}
            icon={icons[i]}
            delay={i * 0.1}
            isLoading={true}
          />
        ))
      ) : (
        stats.map((stat, index) => (
          <StatCard 
            key={stat.label} 
            {...stat} 
            icon={icons[index % icons.length]} 
            delay={index * 0.1} 
          />
        ))
      )}
    </div>
  );
}
