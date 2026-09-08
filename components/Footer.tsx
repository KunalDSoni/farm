import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Home",
    links: [{ href: "/", label: "Home" }],
  },
  {
    title: "Company",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/our-team", label: "Our Team" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions/climate-resilient-program", label: "Climate-Resilient Program" },
      { href: "/solutions/technology-integration", label: "Technology integration" },
      { href: "/solutions/organic-practices", label: "Organic practices" },
      { href: "/solutions/supply-chain-support", label: "Supply chain support" },
      { href: "/solutions/sustainable-irrigation", label: "Sustainable irrigation" },
    ],
  },
  {
    title: "Information",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/modern_harvest626",
    icon: (
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.1a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: (
      <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="shell py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          <div>
            <Logo className="text-ink [&_span:first-of-type]:text-[30px] [&_svg]:h-14 [&_svg]:w-14" />
            <p className="mt-8 text-[17px] font-medium leading-snug">
              Redefining agriculture
              <br />
              at a global scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-pill px-3.5 py-2 text-[15px] ring-1 ring-black/10 transition-colors hover:bg-paper"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-brand">
                    {s.icon}
                  </svg>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[15px] font-medium">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[15px] text-muted transition-colors hover:text-brand"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-black/10 pt-7 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Modern Harvest. All rights reserved.</p>
          <p>Farmed &amp; Marketed by Modern Harvest</p>
        </div>
      </div>
    </footer>
  );
}
