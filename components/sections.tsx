import Image from "next/image";
import Link from "next/link";
import { media } from "@/lib/media";
import type { Solution } from "@/lib/content";
import { Button, Leaf, Pill } from "./ui";

/* The yellow gradient closing band that ends every page. */
export function CTABand() {
  return (
    <section className="shell py-20">
      <div className="reveal overflow-hidden rounded-card bg-sun px-8 py-16 sm:px-14 sm:py-20">
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
            {["Driven", "Rooted", "Impactful"].map((t) => (
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

/* Inner-page banner used by every page except home. */
export function PageHeader({
  eyebrow,
  title,
  body,
  image = media.bannerAbout,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-brand" aria-hidden="true" />
      <div className="shell relative grid items-center gap-12 pb-20 pt-[150px] lg:grid-cols-2 lg:pb-28 lg:pt-[190px]">
        <div className="text-white">
          <Pill tone="onImage" className="mb-6">
            {eyebrow}
          </Pill>
          <h1 className="text-[40px] font-medium leading-[1.08] tracking-[-1.2px] sm:text-[52px] lg:text-[64px] lg:leading-[1.06]">
            {title}
          </h1>
          {body ? (
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/80">{body}</p>
          ) : null}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-[5/4]">
          <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
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
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-card sm:aspect-square"
    >
      <Image
        src={s.image}
        alt={s.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-scrim" aria-hidden="true" />
      <span className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-90">
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
