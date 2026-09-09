import type { Metadata } from "next";
import FaqGrid from "@/components/FaqGrid";
import { CTABand, SplitHeader } from "@/components/sections";
import { media } from "@/lib/media";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about our programmes, regions, certification, and pricing.",
};

export default function FAQ() {
  return (
    <>
      <SplitHeader
        eyebrow="FAQ"
        title="Everything you need to know."
        body="Explore answers to the most common queries we receive from farmers, partners, and innovators around the world."
        image={media.bannerFaq}
        imageAlt="A grower reviewing notes among the crops"
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="shell">
          <FaqGrid items={faqs} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
