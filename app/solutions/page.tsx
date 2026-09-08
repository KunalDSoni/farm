import type { Metadata } from "next";
import { CTABand, PageHeader, SolutionCard } from "@/components/sections";
import { media } from "@/lib/media";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "End-to-end agricultural solutions combining traditional farming wisdom with modern innovation.",
};

export default function Solutions() {
  return (
    <>
      <PageHeader
        eyebrow="Our solutions"
        title="Innovating the way you grow."
        body="We deliver end-to-end agricultural solutions that combine traditional farming wisdom with modern innovation."
        image={media.precisionFarming}
      />

      <section className="shell py-20 lg:py-28">
        <div className="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.slug} s={s} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
