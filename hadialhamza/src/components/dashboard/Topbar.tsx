"use client";

import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ui/ThemeToggle";

import UserDropdown from "../ui/UserDropdown";

interface TopbarProps {
  onMenuClick?: () => void;
  className?: string;
}

export default function Topbar({ onMenuClick, className }: TopbarProps) {
  return (
    <header 
      className={cn(
        "h-20 bg-background/80 backdrop-blur-md border-b border-border px-6 flex items-center justify-between sticky top-0 z-40",
        className
      )}
    >
      {/* Left Section: Mobile Menu & Welcome Text */}
      <div className="flex items-center gap-4">
        <Button 
          variant="icon" 
          onClick={onMenuClick}
          className="lg:hidden h-10 w-10"
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="hidden sm:flex flex-col">
          <h2 className="text-lg font-bold tracking-tight text-foreground leading-none">Welcome back, Hadi!</h2>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Saturday, 16 May 2026</p>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl bg-muted/30 border border-border group focus-within:border-primary/50 transition-all duration-300">
          <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-sm w-48 lg:w-64 font-medium text-foreground placeholder:text-muted-foreground/60"
          />
          <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-border bg-card text-[10px] font-black text-muted-foreground">
            ⌘K
          </kbd>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          
          <Button variant="icon" className="relative h-10 w-10">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-background" />
          </Button>

          <div className="h-8 w-px bg-border mx-2 hidden sm:block" />

          {/* User Profile Dropdown */}
          <UserDropdown 
            user={{
              name: "Hadi Al Hamza",
              email: "hamzaglory@gmail.com",
              role: "Premium Plan"
            }}
          />
        </div>
      </div>
    </header>
  );
}
