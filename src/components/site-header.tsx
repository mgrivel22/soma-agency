"use client";

import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md transition-shadow duration-300",
        scrolled || open ? "border-border shadow-[0_1px_0_rgba(22,35,46,0.04)]" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phone.href}
            className="hidden items-center gap-2 px-2 py-2 text-sm font-semibold text-foreground transition-colors hover:text-copper-dark xl:inline-flex"
          >
            <Phone className="size-4 text-copper-dark" aria-hidden />
            {siteConfig.phone.display}
          </a>
          <CtaButton
            href="/#contact"
            className="hidden h-10 px-4 text-sm sm:inline-flex lg:h-11 lg:px-5 lg:text-[15px]"
          >
            Obtenir mon audit gratuit
          </CtaButton>
          <CtaButton href="/#contact" className="h-10 px-3 text-sm sm:hidden">
            Audit gratuit
          </CtaButton>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-foreground ring-1 ring-border transition hover:bg-muted lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Navigation mobile">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.phone.href}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 border border-border text-[15px] font-semibold text-foreground"
              >
                <Phone className="size-4 text-copper-dark" aria-hidden />
                {siteConfig.phone.display}
              </a>
              <CtaButton
                href="/#contact"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Obtenir mon audit gratuit
              </CtaButton>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
