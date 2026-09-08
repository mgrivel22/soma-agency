"use client";

import { siteConfig } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

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
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-zinc-950/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.05] text-[15px] font-semibold text-zinc-100 active:translate-y-px"
            >
              <Phone className="size-4 text-emerald-400" aria-hidden />
              Appeler
            </a>
            <Link
              href="/#contact"
              className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-emerald-400 text-[15px] font-semibold text-zinc-950 active:translate-y-px"
            >
              Audit gratuit
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
