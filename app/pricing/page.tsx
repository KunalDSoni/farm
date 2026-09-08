import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import { CTABand, PageHeader } from "@/components/sections";
import { Button, Leaf } from "@/components/ui";
import { media } from "@/lib/media";
import { plans, faqs } from "@/lib/content";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent programme pricing for farms, cooperatives, and exporters — from single-site starters to enterprise supply agreements.",
};

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Plans that grow with your land."
        body="Straightforward programme pricing. No tie-ins, no per-seat surprises — you pay for the seasons we work together."
        image={media.fieldWide}
      />

      <section className="shell py-20 lg:py-28">
        <div className="reveal grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-card p-8 ${
                p.featured
                  ? "bg-brand text-white ring-1 ring-brand"
                  : "bg-paper text-ink ring-1 ring-black/5"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-[21px] font-medium">{p.name}</h2>
                {p.featured ? (
                  <span className="rounded-pill bg-white/15 px-3 py-1 text-[13px] backdrop-blur-md">
                    Most popular
                  </span>
                ) : null}
              </div>

              <p className={`mt-6 text-[48px] font-medium leading-none tracking-[-1.4px]`}>
                {p.price}
              </p>
              <p className={`mt-2 text-[15px] ${p.featured ? "opacity-75" : "text-muted"}`}>
                {p.cadence}
              </p>

              <p className={`mt-6 text-[15px] leading-relaxed ${p.featured ? "opacity-85" : "text-muted"}`}>
                {p.body}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-relaxed">
                    <Leaf className={`mt-1.5 ${p.featured ? "text-white" : "text-brand"}`} />
                    <span className={p.featured ? "opacity-90" : "text-muted"}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/contact-us" variant={p.featured ? "glass" : "solid"}>
                  {p.price === "Custom" ? "Talk to us" : "Get started"}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="shell reveal grid gap-12 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
          <h2 className="text-h2">Questions about pricing.</h2>
          <Accordion items={faqs.slice(0, 4)} />
        </div>
      </section>

      <Testimonials />
      <CTABand />
    </>
  );
}
