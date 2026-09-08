"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Drives the `.reveal` scroll-in used across the template.
 * Re-scans on route change; degrades to "everything visible" without JS
 * or when the viewer prefers reduced motion (handled in globals.css).
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    nodes.forEach((n) => {
      // Anything already on screen at mount shows immediately — no flash.
      if (n.getBoundingClientRect().top < window.innerHeight) n.classList.add("is-in");
      else io.observe(n);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
