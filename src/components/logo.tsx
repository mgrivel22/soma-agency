import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      aria-label="Soma Digital — accueil"
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative flex size-8 items-center justify-center ring-1",
          inverted
            ? "bg-white/8 ring-white/15"
            : "bg-anchor ring-anchor/20",
        )}
      >
        <span className="block size-2.5 bg-primary" />
      </span>
      <span
        className={cn(
          "font-heading text-[15px] font-semibold tracking-tight sm:text-base",
          inverted ? "text-anchor-foreground" : "text-foreground",
        )}
      >
        Soma Digital
      </span>
    </Link>
  );
}
