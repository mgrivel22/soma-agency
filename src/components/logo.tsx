import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
        className,
      )}
      aria-label="Soma Digital — accueil"
    >
      <span
        aria-hidden="true"
        className="relative flex size-8 items-center justify-center rounded-lg bg-zinc-900 ring-1 ring-white/10 transition-colors group-hover:ring-emerald-400/40"
      >
        <span className="absolute inset-[3px] rounded-md bg-gradient-to-br from-zinc-800 to-zinc-950" />
        <span className="relative block h-3 w-3 rounded-[3px] bg-emerald-400" />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-zinc-50 sm:text-base">
        Soma Digital
      </span>
    </Link>
  );
}
