import { cn } from "@/lib/utils";
import Link from "next/link";

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "on-dark";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[inset_0_-1px_0_rgba(22,35,46,0.12)] hover:bg-[#c9964a]",
  secondary:
    "border border-border bg-card text-foreground hover:border-copper-dark/40 hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
  "on-dark":
    "border border-white/20 bg-transparent text-anchor-foreground hover:border-white/40 hover:bg-white/8",
};

export function CtaButton({
  href = "#contact",
  children,
  variant = "primary",
  className,
  onClick,
}: CtaButtonProps) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex h-12 min-h-12 items-center justify-center rounded-md px-5 text-[15px] font-semibold tracking-tight transition-colors duration-200 active:translate-y-px",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
