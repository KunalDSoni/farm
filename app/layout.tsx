import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modernharvest.in"),
  title: {
    default: "Modern Harvest — Redefining agriculture at a global scale",
    template: "%s | Modern Harvest",
  },
  description:
    "Modern Harvest connects Indian family farms with global B2B buyers through sustainable, certified agricultural exports.",
  openGraph: {
    type: "website",
    siteName: "Modern Harvest",
    title: "Modern Harvest — Redefining agriculture at a global scale",
    description:
      "Sustainable farming and smart collaboration — we grow more than crops, we grow impact.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrument.variable}>
      <head>
        {/* Marks the document as JS-capable so reveal animations only arm when they can finish */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.className+=' js'",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-brand focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
