import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  hideText?: boolean;
  hideTagline?: boolean;
}

export default function Logo({
  className,
  hideText = false,
  hideTagline = false,
}: LogoProps) {
  return (
    <div className={cn("inline-flex items-center select-none", className)}>
      {/* Logo icon */}
      <Image
        src="/logo/spend-sentry-logo.png"
        alt="SpendSentry Logo icon"
        width={44}
        height={44}
        className="object-contain shrink-0"
        priority
      />

      {/* Text block */}
      {!hideText && (
        <div className="flex flex-col font-logo items-center">
          <span className="font-bold text-3xl leading-none">
            <span className="text-foreground">Spend</span>
            <span className="text-primary">Sentry</span>
          </span>

          {/* Tagline */}
          {!hideTagline && (
            <span className="font-semibold uppercase text-primary text-[10px] tracking-widest mt-0.5">
              Track ● Analyze ● Save
            </span>
          )}
        </div>
      )}
    </div>
  );
}
