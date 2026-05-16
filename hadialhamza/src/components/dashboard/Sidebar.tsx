"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { signOut } from "next-auth/react";
import { customToast } from "@/components/ui/customToast";
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  PieChart, 
  BarChart3, 
  Target, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Budgets", href: "/dashboard/budgets", icon: PieChart },
  { label: "Goals", href: "/dashboard/goals", icon: Target },
  { label: "Profile", href: "/dashboard/profile", icon: User },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isMobile?: boolean;
  onMobileClose?: () => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed, isMobile = false, onMobileClose }: SidebarProps) {
  const pathname = usePathname();

  const handleNavClick = () => {
    if (isMobile && onMobileClose) {
      onMobileClose();
    }
  };

  const handleLogout = () => {
    customToast.confirm(
      "Sign Out",
      "Are you sure you want to log out of your account?",
      () => {
        customToast.success(
          "Signed Out",
          "You have been successfully logged out.",
        );
        signOut({ callbackUrl: "/" });
      },
    );
  };

  return (
    <aside 
      className={cn(
        "h-full bg-card flex flex-col",
        isMobile
          ? "w-64 border-r border-border"
          : "fixed left-0 top-0 border-r border-border z-50 transition-[width] duration-300 ease-in-out",
        !isMobile && (isCollapsed ? "w-20" : "w-64"),
      )}
    >
      {/* Sidebar Header */}
      <div className="h-20 flex items-center px-4 border-b border-border/50 shrink-0">
        <Link href="/" className="flex items-center gap-3" onClick={handleNavClick}>
          <Logo 
            className={cn("transition-all duration-300", !isMobile && isCollapsed && "scale-90 ml-1")} 
            hideText={!isMobile && isCollapsed} 
            hideTagline={true}
          />
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto scrollbar-hide">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const showLabel = isMobile || !isCollapsed;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className={cn(
                "relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                !showLabel && "justify-center"
              )}
            >
              {/* Active Background Indicator */}
              {isActive && (
                <motion.div
                  layoutId={isMobile ? "sidebar-active-mobile" : "sidebar-active"}
                  className="absolute inset-0 bg-primary/10 rounded-xl -z-10 border border-primary/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-primary")} />
              
              {showLabel && (
                <span className="text-sm font-bold tracking-wide">
                  {item.label}
                </span>
              )}

              {/* Tooltip for collapsed state (desktop only) */}
              {!isMobile && isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className={cn(
        "p-3 space-y-1 shrink-0",
        !isMobile && "border-t border-border/50"
      )}>
        {/* Collapse toggle — desktop only */}
        {!isMobile && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 group relative"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 shrink-0 mx-auto" />
            ) : (
              <ChevronLeft className="w-5 h-5 shrink-0" />
            )}
            {!isCollapsed && <span className="text-sm font-bold tracking-wide">Collapse Sidebar</span>}
            
            {isCollapsed && (
              <div className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
                Expand
              </div>
            )}
          </button>
        )}

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-rose-500 hover:bg-rose-500/10 transition-all duration-200 group relative",
            !isMobile && isCollapsed && "justify-center"
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {(isMobile || !isCollapsed) && <span className="text-sm font-bold tracking-wide">Logout</span>}
          
          {!isMobile && isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-rose-500 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
              Logout
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}
