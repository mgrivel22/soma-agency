"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, FadeIn, SectionEyebrow } from "@/components/ui-primitives";
import { faqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/6 py-20 sm:py-28">
      <Container>
        <FadeIn className="max-w-2xl">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
            Questions fréquentes
          </h2>
        </FadeIn>
        <FadeIn className="mx-auto mt-10 max-w-3xl" delay={0.06}>
          <Accordion className="rounded-2xl border border-white/8 bg-zinc-900/70 px-5 sm:px-6">
            {faqs.map((item) => (
              <AccordionItem key={item.question} className="border-white/8">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-zinc-50 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-zinc-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
    </section>
  );
}
