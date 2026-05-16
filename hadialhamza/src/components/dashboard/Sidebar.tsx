"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  PieChart, 
  BarChart3, 
  Target, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight },
  { label: "Budgets", href: "/dashboard/budgets", icon: PieChart },
  { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { label: "Goals", href: "/dashboard/goals", icon: Target },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-50 flex flex-col",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Sidebar Header */}
      <div className="h-20 flex items-center px-4 border-b border-border/50">
        <Link href="/" className="flex items-center gap-3">
          <Logo 
            className={cn("transition-all duration-300", isCollapsed && "scale-90 ml-1")} 
            hideText={isCollapsed} 
            hideTagline={true}
          />
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto scrollbar-hide">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {/* Active Background Indicator */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-primary/10 rounded-xl -z-10 border border-primary/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-primary")} />
              
              {!isCollapsed && (
                <span className="text-sm font-bold tracking-wide">
                  {item.label}
                </span>
              )}

              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-3 border-t border-border/50 space-y-1">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 group relative"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5 shrink-0 mx-auto" /> : <ChevronLeft className="w-5 h-5 shrink-0" />}
          {!isCollapsed && <span className="text-sm font-bold tracking-wide">Collapse Sidebar</span>}
          
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
              Expand
            </div>
          )}
        </button>

        <button
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-rose-500 hover:bg-rose-500/10 transition-all duration-200 group relative"
        >
          <LogOut className="w-5 h-5 shrink-0 mx-auto lg:mx-0" />
          {!isCollapsed && <span className="text-sm font-bold tracking-wide">Logout</span>}
          
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-rose-500 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
              Logout
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}
