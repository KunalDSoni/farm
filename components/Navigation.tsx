"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Leaf } from "./ui";

const primary = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
];

const allPages = [
  { href: "/our-team", label: "Our Team" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /*
   * Three nav states, matching the reference:
   *  - over a full-bleed hero/banner: transparent, white text
   *  - over a split header (white ground): transparent, dark text
   *  - once scrolled past the header: solid green, white text
   */
  const bannerPages = ["/", "/solutions", "/our-team", "/contact-us"];
  const overBanner = bannerPages.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled;
  const darkText = !solid && !overBanner;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-brand text-white" : "bg-transparent"
      } ${darkText ? "text-ink" : "text-white"}`}
    >
      <div className="shell flex h-[90px] items-center justify-between gap-8">
        <Logo />

        <nav
          aria-label="Primary"
          className={`hidden items-center gap-9 lg:flex ${
            overBanner ? "" : "lg:ml-14 lg:mr-auto"
          }`}
        >
          {primary.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`text-[15px] transition-opacity hover:opacity-70 ${
                pathname === l.href ? "opacity-100" : "opacity-90"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[15px] opacity-90 transition-opacity hover:opacity-70"
            >
              All Pages
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`h-4 w-4 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}>
                <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {menuOpen ? (
              <div className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-4">
                <div className="overflow-hidden rounded-card bg-white py-2 text-ink shadow-xl ring-1 ring-black/5">
                  {allPages.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-5 py-2.5 text-[15px] transition-colors hover:bg-paper"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </nav>

        <Link
          href="/contact-us"
          className="hidden items-center gap-2.5 rounded-pill bg-white/15 px-7 py-3.5 text-[15px] text-white ring-1 ring-white/25 backdrop-blur-md transition-colors hover:bg-white/25 lg:inline-flex"
        >
          <Leaf />
          Let&rsquo;s work together
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden bg-brand transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="shell flex flex-col gap-1 pb-8 pt-2">
          {[...primary, ...allPages].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-white/10 py-3.5 text-[17px]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-pill bg-white px-7 py-3.5 text-[15px] font-medium text-brand"
          >
            <Leaf />
            Let&rsquo;s work together
          </Link>
        </nav>
      </div>
    </header>
  );
}
