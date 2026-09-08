import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CTABand, PageHeader } from "@/components/sections";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Modern Harvest about sustainable programmes, supply agreements, and agricultural exports.",
};

const details = [
  { label: "Email", value: "meet.dhaduk@modernsmilk.com", href: "mailto:meet.dhaduk@modernsmilk.com" },
  { label: "Phone", value: "+91 92130 22464", href: "tel:+919213022464" },
  {
    label: "Office",
    value: "Ground Floor, Raja Complex, Near Vijay Cross Roads, Navrangpura, Ahmedabad 380009, Gujarat, India",
  },
  { label: "Hours", value: "Monday to Saturday, 9:00 – 18:00 IST" },
];

export default function ContactUs() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's work together."
        body="Tell us what you grow or what you buy, and we'll come back with a straight answer about whether we can help."
        image={media.bannerWide}
      />

      <section className="shell py-20 lg:py-28">
        <div className="reveal grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div>
            <h2 className="text-h2">Send us a message.</h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="rounded-card bg-paper p-8">
            <h2 className="text-[24px] font-medium">Get in touch</h2>
            <dl className="mt-8 space-y-7">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="text-[13px] uppercase tracking-[1px] text-muted">{d.label}</dt>
                  <dd className="mt-2 text-[17px] leading-relaxed">
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-brand">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  );
}
