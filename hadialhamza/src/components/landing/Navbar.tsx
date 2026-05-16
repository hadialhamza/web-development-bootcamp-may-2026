"use client";

import { useState, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import NavLink from "@/components/ui/NavLink";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UserDropdown from "@/components/ui/UserDropdown";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Analytics", href: "/#analytics" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mock login state for demonstration
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-2 shadow-sm"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Logo className="transition-transform duration-300 hover:scale-[1.02]" />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-[15px] tracking-tight font-semibold"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          {isLoggedIn ? (
            <UserDropdown 
              user={{
                name: "Hadi Al Hamza",
                email: "hamzaglory@gmail.com",
                role: "Premium Plan"
              }}
            />
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="icon"
          className="lg:hidden h-10 w-10"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </header>
  );
}
