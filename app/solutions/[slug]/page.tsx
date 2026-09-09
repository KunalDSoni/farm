import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTABand, SolutionCard, SplitHeader } from "@/components/sections";
import { Leaf } from "@/components/ui";
import { solutions } from "@/lib/content";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = solutions.find((x) => x.slug === params.slug);
  if (!s) return { title: "Solution not found" };
  return { title: s.title, description: s.short };
}

export default function SolutionDetail({ params }: Params) {
  const s = solutions.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const others = solutions.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <SplitHeader eyebrow="Our solutions" title={s.title} body={s.short} image={s.image} imageAlt={s.title} />

      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div data-reveal className="space-y-6 text-[19px] leading-relaxed">
            <p>{s.intro}</p>
            <p className="text-[17px] text-muted">{s.body}</p>
          </div>

          <div data-reveal className="space-y-10">
            <div>
              <h2 className="text-[24px] font-medium">Benefits</h2>
              <ul className="mt-5 space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <Leaf className="mt-1.5 text-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[24px] font-medium">Who it&rsquo;s for</h2>
              <ul className="mt-5 space-y-3">
                {s.audience.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <Leaf className="mt-1.5 text-brand" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-20 lg:pb-28">
        <h2 data-reveal className="text-h2">What else do we offer?</h2>
        <div data-reveal-group className="mt-10 grid gap-6 sm:grid-cols-3">
          {others.map((o) => (
            <SolutionCard key={o.slug} s={o} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
