"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STAGGER_MS = 100; // measured off the reference template
const MAX_STAGGER_STEPS = 6; // don't let long lists drift far behind the scroll

/**
 * Drives the per-block scroll reveal.
 *
 * Blocks opt in with `data-reveal`. Siblings inside a shared
 * `data-reveal-group` fire in DOM order, each offset by STAGGER_MS, which is
 * how the reference template staggers pills, stat lines, and cards. Elements
 * outside a group animate on their own with no delay.
 *
 * Degrades to "everything visible" without JS or IntersectionObserver, and
 * reduced-motion is handled in globals.css.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;

    // Assign each block its stagger offset within its group.
    const groups = new Map<Element, number>();
    nodes.forEach((n) => {
      const group = n.closest("[data-reveal-group]");
      if (!group) {
        n.style.setProperty("--reveal-delay", "0ms");
        return;
      }
      const i = groups.get(group) ?? 0;
      groups.set(group, i + 1);
      n.style.setProperty(
        "--reveal-delay",
        `${Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS}ms`
      );
    });

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      // Fires once a block is ~12% into the viewport, matching the reference.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 }
    );

    nodes.forEach((n) => {
      // Anything already on screen at mount shows immediately — no flash.
      if (n.getBoundingClientRect().top < window.innerHeight * 0.9) {
        n.classList.add("is-in");
      } else {
        io.observe(n);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
