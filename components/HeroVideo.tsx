"use client";

import { useEffect, useRef, useState } from "react";
import { media } from "@/lib/media";
import { ArrowLink, Pill } from "./ui";

const tags = ["Driven", "Rooted", "Impactful"];

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  /*
   * Muted autoplay is still refused in some real conditions — iOS Low Power
   * Mode, data saver, background tabs. Retry when the page becomes visible
   * and once on first interaction, so the hero doesn't sit on a frozen frame.
   */
  useEffect(() => {
    const attempt = () => {
      const v = videoRef.current;
      if (!v || document.hidden) return;
      v.play().catch(() => {
        /* still blocked — the poster underneath keeps the hero looking right */
      });
    };
    attempt();
    document.addEventListener("visibilitychange", attempt);
    window.addEventListener("pointerdown", attempt, { once: true });
    return () => {
      document.removeEventListener("visibilitychange", attempt);
      window.removeEventListener("pointerdown", attempt);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/*
        The poster carries the first paint (and is all that shows if the video
        fails), so it sits underneath rather than on the <video> element —
        a <source> error does not fire onError on the <video> itself.
      */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${media.heroPoster}')` }}
        aria-hidden="true"
      />

      {!failed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.heroPoster}
          aria-hidden="true"
          onError={() => setFailed(true)}
        >
          {/* onError on <source> is what actually fires when the file 404s/403s */}
          <source
            src={media.heroVideo}
            type="video/mp4"
            onError={() => setFailed(true)}
          />
        </video>
      ) : null}

      {/* Legibility scrim — the template keeps the footage almost untinted */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" aria-hidden="true" />

      <div className="shell relative z-10 pb-14 pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <div className="animate-rise">
            <div className="flex flex-wrap gap-2.5">
              {tags.map((t) => (
                <Pill key={t} tone="onImage">
                  {t}
                </Pill>
              ))}
            </div>

            <p className="mt-7 max-w-lg text-[32px] font-medium leading-[1.15] tracking-[-0.6px] text-white">
              Through sustainable farming and smart collaboration, we grow more than crops
              &mdash; we grow impact.
            </p>

            <div className="mt-10">
              <ArrowLink href="/contact-us" light>
                Start growing with us
              </ArrowLink>
            </div>
          </div>

          <h1 className="animate-rise text-right text-[44px] font-medium leading-[1.1] tracking-[-1.4px] text-white sm:text-[56px] lg:text-[70px] lg:leading-[77px]">
            Redefining agriculture at a global scale.
          </h1>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/25 pt-6 text-[14px] text-white/85">
          <span>22.4707&deg; N, 70.0577&deg; E</span>
          <span className="hidden sm:inline">Talala, Gir &mdash; Gujarat, India</span>
        </div>
      </div>
    </section>
  );
}
