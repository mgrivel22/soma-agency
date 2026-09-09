"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui-primitives";
import { faqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion className="border-y border-border">
            {faqs.map((item) => (
              <AccordionItem key={item.question} className="border-border">
                <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
