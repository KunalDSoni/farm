import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABand, SplitHeader } from "@/components/sections";
import { media } from "@/lib/media";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Field notes on agronomy, water, climate, and the supply chain.",
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  return (
    <>
      <SplitHeader
        eyebrow="Blog"
        title="Discover the future of farming."
        body="What we are learning across soil, water, climate, and the long road from field to port."
        image={media.bannerBlog}
        imageAlt="A farmer walking through a young crop"
      />

      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} data-reveal>
              <Link href="/blog" className="group block">
                <div className="relative aspect-[413/220] overflow-hidden rounded-card">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[14px] text-muted">
                  <span className="rounded-pill bg-paper px-3 py-1">{p.category}</span>
                  <time dateTime={p.date}>{fmt(p.date)}</time>
                </div>
                <h2 className="mt-3 text-[21px] font-medium leading-snug transition-colors group-hover:text-brand">
                  {p.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
