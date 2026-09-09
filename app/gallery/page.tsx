import type { Metadata } from "next";
import Image from "next/image";
import { CTABand, SplitHeader } from "@/components/sections";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Fields, pack-houses, and the people who work them.",
};

/* Mirrors the template's mixed 1-wide / 2-wide masonry rhythm. */
const layout = [
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-1",
];

export default function Gallery() {
  return (
    <>
      <SplitHeader
        eyebrow="Gallery"
        title="Moments that tell our story."
        body="Land, crops, and the people who work them — photographed across our growing regions."
        image={media.gallery[0]}
        imageAlt="Workers harvesting vegetables"
      />

      <section className="shell py-20 lg:py-28">
        <div data-reveal-group className="grid gap-6 sm:grid-cols-3">
          {media.gallery.map((src, i) => (
            <div
              key={src}
              data-reveal
              className={`relative h-[280px] overflow-hidden rounded-card sm:h-[350px] ${layout[i] ?? "sm:col-span-1"}`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
