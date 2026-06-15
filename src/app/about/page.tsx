import type { Metadata } from "next";
import {
  AboutHero,
  CTASection,
  MissionVision,
  TeamSection,
  Technologies,
  Testimonials,
  WhoWeAre,
  WhyChooseUs,
  WorkProcess,
} from "@/components/about";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — our mission, team, and how we help businesses grow.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhyChooseUs />
      <WorkProcess />
      <Technologies />
      <TeamSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
