import type { Metadata } from "next";
import Image from "next/image";
import { CTABand, PageHeader } from "@/components/sections";
import { Button } from "@/components/ui";
import { media } from "@/lib/media";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The agronomists, operators, and partnership leads behind Modern Harvest.",
};

export default function OurTeam() {
  const [founder, ...rest] = team;

  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="The people behind the harvest."
        body="Agronomists, operators, and partnership leads who spend more time in fields than in meeting rooms."
        image={media.bannerTeam}
      />

      <section className="shell py-20 lg:py-28">
        <div className="reveal grid overflow-hidden rounded-card lg:grid-cols-[minmax(0,530px)_minmax(0,1fr)]">
          <div className="relative min-h-[380px]">
            <Image
              src={media.founder}
              alt={`${founder.name}, ${founder.role}`}
              fill
              sizes="(max-width: 1024px) 100vw, 530px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-12 bg-brand p-8 text-white sm:p-12 lg:p-14">
            <p className="text-[21px] font-medium leading-snug lg:text-[24px]">
              &ldquo;We started this journey with a simple belief &mdash; that farming can feed the
              world without harming it. Every seed we plant, every partnership we build, reflects
              our commitment to sustainability, innovation, and people.&rdquo;
            </p>
            <div>
              <p className="text-[32px] font-medium leading-tight tracking-[-0.8px]">
                {founder.name}
              </p>
              <p className="mt-1 text-[15px] opacity-75">{founder.role}</p>
              <div className="mt-8">
                <Button href="/contact-us" variant="glass">
                  Work with us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-20 lg:pb-28">
        <div className="reveal grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((m) => (
            <article key={m.name}>
              <div className="relative aspect-[298/350] overflow-hidden rounded-card">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-5 text-[19px] font-medium">{m.name}</h2>
              <p className="mt-1 text-[15px] text-muted">{m.role}</p>
            </article>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
