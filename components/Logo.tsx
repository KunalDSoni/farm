import Link from "next/link";

/**
 * Modern Harvest wordmark, drawn in the reference template's style:
 * a square grain glyph beside a two-line wordmark with a registered mark.
 * `currentColor` throughout so it inverts on the transparent/dark nav.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Modern Harvest — home" className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9 shrink-0">
        <g fill="currentColor">
          {/* grain heads, mirrored either side of a central stem */}
          <path d="M19 4c-2.6 2-4 4.5-4 7.4 0 1.5.4 2.9 1.1 4.2l2.9-2.2V4Z" />
          <path d="M21 4v9.4l2.9 2.2c.7-1.3 1.1-2.7 1.1-4.2C25 8.5 23.6 6 21 4Z" />
          <path d="M8 14c.4 3.2 2 5.7 4.4 7.3 1.3.8 2.7 1.3 4.2 1.4l-1.1-3.4L8 14Z" />
          <path d="M32 14l-7.5 5.3-1.1 3.4c1.5-.1 2.9-.6 4.2-1.4C30 19.7 31.6 17.2 32 14Z" />
          <path d="M10 25.6c1.6 2.8 3.9 4.5 6.7 5.1 1.5.3 3 .3 4.4-.1l-2.3-2.8-8.8-2.2Z" />
          <path d="M30 25.6l-8.8 2.2-2.3 2.8c1.4.4 2.9.4 4.4.1 2.8-.6 5.1-2.3 6.7-5.1Z" />
          <rect x="19.1" y="14" width="1.8" height="22" rx=".9" />
        </g>
      </svg>
      <span className="text-[17px] font-medium leading-[1.15] tracking-[-0.2px]">
        Modern
        <br />
        Harvest
      </span>
      <span className="self-start pt-1 text-[9px] opacity-60">®</span>
    </Link>
  );
}
