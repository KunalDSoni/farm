import Link from "next/link";
import type { ReactNode } from "react";

/* The little leaf glyph that prefixes every pill and button in the template. */
export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className={`h-3 w-3 shrink-0 ${className}`}>
      <path
        fill="currentColor"
        d="M11.2.8C6.9.3 3.4 1.3 1.7 3.6.4 5.4.5 7.7 1.9 9.4l-1.3 1.3a.6.6 0 1 0 .9.9l1.3-1.3c1.7 1.3 4 1.4 5.8.1 2.3-1.7 3.3-5.2 2.8-9.5a.6.6 0 0 0-.2-.1Z"
      />
    </svg>
  );
}

/* Small rounded label — "About us", "Our solutions", "Driven / Rooted / Impactful". */
export function Pill({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "onImage";
  className?: string;
}) {
  const tones = {
    light: "bg-white text-ink ring-1 ring-black/5 shadow-sm",
    onImage: "bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill px-3.5 py-1.5 text-[15px] ${tones[tone]} ${className}`}
    >
      <Leaf className={tone === "light" ? "text-brand" : "text-white"} />
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "glass" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  const variants = {
    solid: "bg-brand text-white hover:bg-brand-dark",
    glass:
      "bg-white/15 text-white backdrop-blur-md ring-1 ring-white/25 hover:bg-white/25",
    ghost: "bg-white text-brand ring-1 ring-black/10 hover:bg-paper",
  };
  const external = href.startsWith("http");
  const cls = `inline-flex items-center gap-2.5 rounded-pill px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        <Leaf />
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <Leaf />
      {children}
    </Link>
  );
}

/* Underlined arrow link used in the hero. */
export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex w-full max-w-[280px] items-center justify-between gap-6 border-b pb-3 text-[15px] transition-colors ${
        light
          ? "border-white/40 text-white hover:border-white"
          : "border-black/20 text-ink hover:border-black"
      }`}
    >
      {children}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

/* Section eyebrow + heading, matching the template's two layouts. */
export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
  size = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  size?: "h2" | "display";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "flex flex-col items-center text-center" : ""} ${className}`}>
      {eyebrow ? (
        <Pill className="mb-6">{eyebrow}</Pill>
      ) : null}
      <h2 className={size === "display" ? "text-display max-w-4xl" : "text-h2 max-w-xl"}>{title}</h2>
      {body ? (
        <p className={`mt-5 text-[17px] leading-relaxed text-muted ${align === "center" ? "max-w-2xl" : "max-w-md"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
