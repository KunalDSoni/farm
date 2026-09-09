"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

/**
 * Two-column FAQ card grid, matching the reference: closed cards are white
 * with a "+", and an open card flips to solid brand green with white text
 * and an "×". Items fill column-wise — first half left, second half right.
 */
export default function FaqGrid({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];
  let index = -1;

  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-5" data-reveal-group>
      {columns.map((col, c) => (
        <div key={c} className="flex flex-col gap-5">
          {col.map((item) => {
            index += 1;
            const i = index;
            const isOpen = open === i;
            const panelId = `${base}-p-${i}`;
            const buttonId = `${base}-b-${i}`;
            return (
              <div
                key={item.q}
                data-reveal
                className={`overflow-hidden rounded-card transition-colors duration-300 ${
                  isOpen ? "bg-brand text-white" : "bg-white text-ink shadow-sm ring-1 ring-black/5"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left text-[19px] font-medium"
                  >
                    {item.q}
                    <span className="relative h-4 w-4 shrink-0">
                      {/* + rotates into × */}
                      <span
                        className={`absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                      <span
                        className={`absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-[400ms] ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 text-[16px] leading-relaxed text-white/85">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
