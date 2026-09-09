import type { Metadata } from "next";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import { CTABand, SplitHeader } from "@/components/sections";
import { Button, Leaf, Pill } from "@/components/ui";
import { media } from "@/lib/media";
import { stats, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Modern Harvest is a grower-led agricultural export business rooted in tradition and driven by innovation.",
};

const principles = [
  {
    title: "Rooted in the land",
    body: "We start from soil, water, and season — not from a sales target. Every programme we run is designed around what a specific piece of land can sustain.",
  },
  {
    title: "Driven by evidence",
    body: "Decisions follow measurement. Soil tests, metered water, yield records, and shipment data tell us what is working and what needs to change.",
  },
  {
    title: "Built on partnership",
    body: "Growers, cooperatives, and buyers all carry risk. We structure agreements so that improvements are shared rather than extracted.",
  },
];

export default function AboutUs() {
  return (
    <>
      <SplitHeader
        eyebrow="About us"
        title="Elevating global farming standards."
        body="Modern Harvest is more than a company — we're a movement toward smarter, more sustainable farming."
        image={media.bannerAbout}
        imageAlt="Aerial view of fields divided by a winding river"
      />

      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="grid gap-12 lg:grid-cols-2">
          <h2 data-reveal className="text-h2">
            Our mission is to redefine what&rsquo;s possible in modern farming.
          </h2>
          <div data-reveal className="space-y-5 text-[17px] leading-relaxed text-muted lg:pt-2">
            <p>
              Modern Harvest began with a small group of family farms and a straightforward
              conviction: that agriculture can be both commercially serious and genuinely
              regenerative. Those two goals are usually presented as a trade-off. We have spent
              our years since proving they are not.
            </p>
            <p>
              Today we work across cropping systems and climates, connecting growers with
              importers, wholesalers, and supermarket chains who need supply they can rely on and
              provenance they can verify.
            </p>
          </div>
        </div>

        <div data-reveal-group className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} data-reveal className="rounded-card bg-paper p-8">
              <Leaf className="h-5 w-5 text-brand" />
              <p className="mt-5 text-[52px] font-medium leading-none tracking-[-1.6px]">
                {s.value}
              </p>
              <h3 className="mt-4 text-[17px] font-medium">{s.label}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-20 lg:pb-28">
        <div data-reveal className="relative aspect-[21/9] overflow-hidden rounded-card">
          <Image
            src={media.fieldWide}
            alt="Aerial view of cultivated fields divided by tree lines"
            fill
            sizes="1280px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div data-reveal-group className="shell grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
          <div>
            <Pill className="mb-6">How we work</Pill>
            <h2 className="text-h2">Three principles behind every programme.</h2>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {values.map((v) => (
                <li key={v} className="rounded-md bg-black/[0.06] px-3.5 py-2 text-[15px]">
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <dl className="space-y-0">
            {principles.map((p) => (
              <div key={p.title} data-reveal className="border-t border-black/10 py-7 first:border-t-0 first:pt-0">
                <dt className="text-[24px] font-medium">{p.title}</dt>
                <dd className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal className="relative aspect-[3/4] overflow-hidden rounded-card">
            <Image
              src={media.fieldTall}
              alt="Rows of young crops running toward the horizon"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-h2">Where we go next.</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted">
              The next decade of farming will be defined by volatility — in weather, in water, and
              in markets. Our work is to make that volatility survivable for the people who grow
              food, and invisible to the people who buy it.
            </p>
            <div className="mt-10">
              <Button href="/solutions">Discover our solutions</Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABand />
    </>
  );
}
