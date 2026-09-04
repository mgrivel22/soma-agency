import { cn } from "@/lib/utils";
import Link from "next/link";

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-emerald-400 text-zinc-950 shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_10px_30px_-12px_rgba(52,211,153,0.55)] hover:bg-emerald-300 hover:shadow-[0_0_0_1px_rgba(110,231,183,0.35),0_12px_32px_-10px_rgba(52,211,153,0.65)]",
  secondary:
    "border border-white/12 bg-white/[0.04] text-zinc-100 hover:border-white/20 hover:bg-white/[0.07]",
  ghost: "text-zinc-200 hover:bg-white/[0.06] hover:text-white",
};

export function CtaButton({
  href = "#contact",
  children,
  variant = "primary",
  className,
  onClick,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex h-12 min-h-12 items-center justify-center rounded-xl px-5 text-[15px] font-semibold tracking-tight transition-all duration-200 active:translate-y-px",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
