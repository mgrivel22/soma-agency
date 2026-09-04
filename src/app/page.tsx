import { AuditSection } from "@/components/sections/audit";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { MethodSection } from "@/components/sections/method";
import { OfferSection } from "@/components/sections/offer";
import { ProblemsSection } from "@/components/sections/problems";
import { ProjectsSection } from "@/components/sections/projects";
import { WhySection } from "@/components/sections/why";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemsSection />
      <ProjectsSection />
      <OfferSection />
      <MethodSection />
      <WhySection />
      <AuditSection />
      <ContactSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
