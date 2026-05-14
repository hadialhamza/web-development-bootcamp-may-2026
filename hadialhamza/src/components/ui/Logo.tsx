import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center select-none", className)}
    >
      {/* Logo icon */}
      <Image
        src="/logo/spend-sentry-logo.png"
        alt="SpendSentry Logo icon"
        width={44}
        height={44}
        className="object-contain"
        priority
      />

      {/* Text block */}
      <div className="flex flex-col font-logo items-center">
        <span className="font-bold tracking-tight text-3xl">
          <span className="text-foreground">Spend</span>
          <span className="text-primary">Sentry</span>
        </span>

        {/* Tagline */}
        <span className="font-semibold uppercase text-primary text-[10px] tracking-widest">
          Track ● Analyze ● Save
        </span>
      </div>
    </Link>
  );
}
