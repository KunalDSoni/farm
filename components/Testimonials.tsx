"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";

const tones = {
  light: "bg-paper text-ink",
  dark: "bg-black text-white",
  green: "bg-brand text-white",
};

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="shell py-20 lg:py-28">
      <div className="reveal flex flex-wrap items-end justify-between gap-8">
        <h2 className="max-w-lg text-h2">Trusted by farmers &amp; businesses worldwide.</h2>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Previous testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-black/15 transition-opacity hover:bg-paper disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Next testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-black/15 transition-opacity hover:bg-paper disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            data-card
            className={`flex w-[300px] shrink-0 snap-start flex-col justify-between rounded-card p-7 sm:w-[360px] ${tones[t.tone]}`}
          >
            <blockquote className="text-[17px] font-medium leading-snug">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-3">
              <Image
                src={t.avatar}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="text-[15px]">
                <span className="font-medium">{t.name}</span>
                <span className={t.tone === "light" ? "text-muted" : "opacity-75"}>, {t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
