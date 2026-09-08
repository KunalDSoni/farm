import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import { CTABand, PageHeader } from "@/components/sections";
import { Button } from "@/components/ui";
import { media } from "@/lib/media";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about our programmes, regions, certification, and pricing.",
};

export default function FAQ() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered."
        body="If what you need isn't here, write to us — a person will reply."
        image={media.plants}
      />

      <section className="shell py-20 lg:py-28">
        <div className="reveal grid gap-12 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
          <div>
            <h2 className="text-h2">Still deciding?</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Most conversations start with a field assessment. It costs nothing and it tells both
              of us whether there is a fit.
            </p>
            <div className="mt-10">
              <Button href="/contact-us">Ask us directly</Button>
            </div>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
