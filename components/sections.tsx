import Image from "next/image";
import Link from "next/link";
import { media } from "@/lib/media";
import type { Solution } from "@/lib/content";
import { Button, Leaf, Pill } from "./ui";

const TAGS = ["Driven", "Rooted", "Impactful"];

/* The yellow gradient closing band that ends every page. */
export function CTABand() {
  return (
    <section className="shell py-20">
      <div
        data-reveal
        className="overflow-hidden rounded-card bg-sun px-8 py-16 sm:px-14 sm:py-20"
      >
        <h2 className="max-w-2xl text-[40px] font-medium leading-[1.08] tracking-[-1.2px] sm:text-[56px] lg:text-[70px] lg:leading-[77px]">
          Grow something great together.
        </h2>
        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-black/70">
          Whether you&rsquo;re a farmer, distributor, or partner, we&rsquo;re here to support your
          goals with sustainable solutions and global expertise.
        </p>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-8">
          <Button href="/contact-us">Let&rsquo;s work together</Button>
          <ul className="flex flex-wrap gap-7">
            {TAGS.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[15px]">
                <Leaf className="text-brand" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * Split page header: white ground, text left, image bleeding off the right
 * edge of the viewport and running up behind the transparent nav, with the
 * Driven/Rooted/Impactful pills overlaid at the image's lower edge.
 * Used on About, Pricing, Blog, FAQ and solution detail pages.
 */
export function SplitHeader({
  eyebrow,
  title,
  body,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative bg-white">
      <div className="lg:grid lg:min-h-[564px] lg:grid-cols-[minmax(0,58%)_minmax(0,42%)]">
        <div className="shell flex flex-col justify-center pb-14 pt-[150px] lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:py-0 lg:pl-10 lg:pr-16">
          <div data-reveal-group>
            <div data-reveal>
              <Pill className="mb-6">{eyebrow}</Pill>
            </div>
            <h1
              data-reveal
              className="text-[40px] font-medium leading-[1.06] tracking-[-1.4px] sm:text-[54px] lg:text-[70px] lg:leading-[77px]"
            >
              {title}
            </h1>
            {body ? (
              <p data-reveal className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
                {body}
              </p>
            ) : null}
          </div>
        </div>

        <div className="relative h-[320px] sm:h-[420px] lg:h-[564px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <ul className="absolute inset-x-0 bottom-6 flex flex-wrap justify-center gap-3 px-6 lg:justify-end lg:pr-10">
            {TAGS.map((t) => (
              <li key={t}>
                <Pill tone="onImage">{t}</Pill>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * Full-bleed banner header: edge-to-edge image with a scrim, centred white
 * text, transparent nav sitting over it. Used on Solutions, Our Team and
 * Contact pages.
 */
export function BannerHeader({
  eyebrow,
  title,
  body,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative flex min-h-[562px] items-center overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="shell relative flex flex-col items-center py-32 text-center text-white">
        <div data-reveal-group className="flex flex-col items-center">
          <div data-reveal>
            <Pill tone="onImage" className="mb-6">
              {eyebrow}
            </Pill>
          </div>
          <h1
            data-reveal
            className="max-w-4xl text-[40px] font-medium leading-[1.06] tracking-[-1.4px] sm:text-[54px] lg:text-[70px] lg:leading-[77px]"
          >
            {title}
          </h1>
          {body ? (
            <p data-reveal className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/85">
              {body}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* Image card with scrim + title/description, used on home and /solutions. */
export function SolutionCard({ s }: { s: Solution }) {
  return (
    <Link
      href={`/solutions/${s.slug}`}
      data-reveal
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-card sm:aspect-square"
    >
      <Image
        src={s.image}
        alt={s.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-scrim" aria-hidden="true" />
      <span className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-90">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </span>
      <div className="relative p-6 text-white">
        <h3 className="text-[21px] font-medium leading-snug">{s.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-white/85">{s.short}</p>
      </div>
    </Link>
  );
}
