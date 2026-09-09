import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Testimonials from "@/components/Testimonials";
import { CTABand, SolutionCard } from "@/components/sections";
import { Button, Leaf, Pill } from "@/components/ui";
import { media } from "@/lib/media";
import { solutions, stats, values } from "@/lib/content";

const sustainability = [
  { title: "Composting", body: "Reducing waste and returning nutrients to the soil" },
  { title: "Water-saving systems", body: "Smart irrigation that conserves every drop" },
  { title: "Cover cropping", body: "Protecting topsoil between growing seasons" },
];

const why = [
  {
    title: "Sustainable Practices",
    body: "From pesticide-free farming to smart water use, we're committed to methods that respect the planet and future generations.",
    image: media.hand,
    tone: "bg-black text-white",
    tilt: "lg:-rotate-[4deg]",
  },
  {
    title: "Global Expertise",
    body: "Years of international experience delivering scalable agricultural solutions across diverse climates and regions.",
    image: media.farmer,
    tone: "bg-paper text-ink",
    tilt: "",
  },
  {
    title: "Trusted by Thousands",
    body: "Farmers, distributors, and supply chain partners worldwide rely on us for quality, reliability, and long-term success.",
    image: media.vegetables,
    tone: "bg-brand text-white",
    tilt: "lg:rotate-[4deg]",
  },
];

export default function Home() {
  return (
    <>
      <HeroVideo />

      {/* ===== About ===== */}
      <section className="bg-paper py-20 lg:py-28">
        <div data-reveal-group className="shell grid gap-12 lg:grid-cols-2">
          <div>
            <div data-reveal>
              <Pill className="mb-6">About us</Pill>
            </div>
            <h2 data-reveal className="text-h2">
              We are committed to advancing agriculture.
            </h2>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {values.map((v) => (
                <li
                  key={v}
                  data-reveal
                  className="rounded-md bg-black/[0.06] px-3.5 py-2 text-[15px]"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pt-2">
            <p data-reveal className="max-w-md text-[17px] leading-relaxed text-muted">
              Our mission is to redefine what&rsquo;s possible in modern farming &mdash; creating
              lasting value for communities, ecosystems, and future generations. Rooted in
              tradition, driven by innovation &mdash; we grow more than crops, we grow impact.
            </p>
            <div data-reveal className="mt-10">
              <Button href="/about-us">About the company</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="shell grid gap-12 py-20 sm:grid-cols-3 lg:py-28">
        {stats.map((s) => (
          <div key={s.label} data-reveal-group>
            <div data-reveal>
              <Leaf className="h-5 w-5 text-brand" />
            </div>
            <p
              data-reveal
              className="mt-5 text-[64px] font-medium leading-none tracking-[-2px] lg:text-[72px]"
            >
              {s.value}
            </p>
            <h3 data-reveal className="mt-5 text-[19px] font-medium">
              {s.label}
            </h3>
            <p data-reveal className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">
              {s.body}
            </p>
          </div>
        ))}
      </section>

      {/* ===== Solutions ===== */}
      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="grid gap-12 lg:grid-cols-[minmax(0,330px)_minmax(0,1fr)]">
          <div>
            <div data-reveal>
              <Pill className="mb-6">Our solutions</Pill>
            </div>
            <h2 data-reveal className="text-h2">
              Innovating the way you grow.
            </h2>
            <p data-reveal className="mt-5 max-w-sm text-[17px] leading-relaxed text-muted">
              We deliver end-to-end agricultural solutions that combine traditional farming
              wisdom with modern innovation.
            </p>
            <div data-reveal className="mt-10">
              <Button href="/solutions">Discover our solutions</Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {solutions.slice(0, 3).map((s) => (
              <SolutionCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Sustainability ===== */}
      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="grid items-center gap-12 rounded-card bg-paper p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <h2
              data-reveal
              className="text-[40px] font-medium leading-[1.08] tracking-[-1.2px] lg:text-[70px] lg:leading-[77px]"
            >
              Sustainability at our core.
            </h2>
            <p data-reveal className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
              We&rsquo;re committed to farming that respects the land, preserves resources, and
              supports future generations.
            </p>
            <dl className="mt-10">
              {sustainability.map((s) => (
                <div key={s.title} data-reveal className="border-t border-black/10 py-5">
                  <dt className="text-[17px] font-medium">{s.title}</dt>
                  <dd className="mt-1 text-[15px] text-muted">{s.body}</dd>
                </div>
              ))}
            </dl>
            <div data-reveal className="mt-8">
              <Button href="/contact-us">Let&rsquo;s work together</Button>
            </div>
          </div>
          <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image
              src={media.sustainability}
              alt="A grower walking between rows of leafy crops at golden hour"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Why choose us ===== */}
      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="flex flex-col items-center text-center">
          <div data-reveal>
            <Pill className="mb-6">Why choose us</Pill>
          </div>
          <h2 data-reveal className="max-w-3xl text-[36px] font-medium leading-[1.1] tracking-[-1.2px] sm:text-[48px] lg:text-[62px] lg:leading-[1.08]">
            We&rsquo;re more than just a farm &mdash; we&rsquo;re your trusted partner in
            sustainable agriculture.
          </h2>
        </div>

        <div data-reveal-group className="mt-16 grid gap-8 lg:grid-cols-3">
          {why.map((c) => (
            <article
              key={c.title}
              data-reveal
              className={`rounded-card p-8 transition-transform duration-500 lg:hover:rotate-0 ${c.tone} ${c.tilt}`}
            >
              <div className="relative h-[110px] w-[100px] overflow-hidden rounded-md">
                <Image src={c.image} alt="" fill sizes="100px" className="object-cover" />
              </div>
              <h3 className="mt-8 text-[24px] font-medium leading-snug">{c.title}</h3>
              <p className={`mt-4 text-[15px] leading-relaxed ${c.tone.includes("text-white") ? "opacity-80" : "text-muted"}`}>
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Founder quote ===== */}
      <section className="shell py-20 lg:py-28">
        <div data-reveal className="grid overflow-hidden rounded-card lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)]">
          <div className="relative min-h-[380px]">
            <Image
              src={media.founder}
              alt="James Der Linden, Founder and CEO"
              fill
              sizes="(max-width: 1024px) 100vw, 530px"
              className="object-cover"
            />
            <span className="absolute bottom-6 left-6 text-[15px] text-white/90">
              Founder &amp; CEO
            </span>
          </div>
          <div className="flex flex-col justify-between gap-16 bg-brand p-8 text-white sm:p-12 lg:p-14">
            <blockquote className="flex gap-4">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7 shrink-0 opacity-90">
                <path d="M9.9 5.5c-3.3 1.6-5.4 4.6-5.4 8.3 0 3 1.7 5.1 4.2 5.1 2.1 0 3.7-1.6 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1 .2.4-1.9 2-3.6 4-4.6l-2.2-2Zm9.4 0c-3.3 1.6-5.4 4.6-5.4 8.3 0 3 1.7 5.1 4.2 5.1 2.1 0 3.7-1.6 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1 .2.4-1.9 2-3.6 4-4.6l-2.2-2Z" />
              </svg>
              <p className="text-[21px] font-medium leading-snug lg:text-[24px]">
                &ldquo;We started this journey with a simple belief &mdash; that farming can feed
                the world without harming it. Every seed we plant, every partnership we build,
                reflects our commitment to sustainability, innovation, and people.&rdquo;
              </p>
            </blockquote>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <p className="text-[40px] font-medium leading-[1.05] tracking-[-1.2px] lg:text-[56px]">
                James
                <br />
                Der Linden
              </p>
              <Button href="/our-team" variant="glass">
                Meet our team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABand />
    </>
  );
}
