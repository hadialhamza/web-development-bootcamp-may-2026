"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Analytics", href: "#analytics" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socials = [
  {
    icon: "/icons/github.svg",
    href: "https://github.com/hadialhamza",
    alt: "GitHub",
  },
  {
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/hadihamza",
    alt: "LinkedIn",
  },
  {
    icon: "/icons/gmail.svg",
    href: "mailto:hamzaglory@gmail.com",
    alt: "Gmail",
  },
  {
    icon: "/icons/facebook.svg",
    href: "#",
    alt: "Facebook",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-2 space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed font-medium">
              SpendSentry is a modern personal finance tracker designed to help
              you monitor income, expenses, and gain deep financial insights.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2.5 rounded-xl bg-muted/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-border/50 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} SpendSentry. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
            >
              Support
            </Link>
            <Link
              href="#"
              className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
            >
              Status
            </Link>
            <Button
              variant="icon"
              size="sm"
              onClick={scrollToTop}
              className="h-10 w-10 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-xl"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/5 rounded-full blur-[100px] -z-10" />
    </footer>
  );
}
