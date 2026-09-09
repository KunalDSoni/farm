import type { Metadata } from "next";
import { BannerHeader, CTABand, SolutionCard } from "@/components/sections";
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
      <BannerHeader
        eyebrow="Our solutions"
        title="Transforming agriculture through innovation."
        body="We deliver end-to-end agricultural solutions that combine traditional farming wisdom with modern innovation."
        image={media.fieldWide}
        imageAlt="Aerial view of cultivated farmland"
      />

      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.slug} s={s} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
