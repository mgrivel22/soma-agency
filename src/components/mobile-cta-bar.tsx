"use client";

import { siteConfig } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={reduce ? false : { y: 80 }}
          animate={{ y: 0 }}
          exit={reduce ? undefined : { y: 80 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 border border-border bg-card text-[15px] font-semibold text-foreground active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Phone className="size-4 text-copper-dark" aria-hidden />
              Appeler
            </a>
            <Link
              href="/#contact"
              className="inline-flex h-12 flex-1 items-center justify-center bg-primary text-[15px] font-semibold text-primary-foreground active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Audit gratuit
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
