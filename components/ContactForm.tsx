"use client";

import { useState } from "react";
import { Leaf } from "./ui";

const field =
  "w-full rounded-md bg-white px-4 py-3.5 text-[15px] ring-1 ring-black/10 transition-shadow placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // No backend is wired up yet — hand off to the user's mail client.
        const body = [
          `Name: ${data.get("name") ?? ""}`,
          `Company: ${data.get("company") ?? ""}`,
          `Email: ${data.get("email") ?? ""}`,
          `Interest: ${data.get("interest") ?? ""}`,
          "",
          String(data.get("message") ?? ""),
        ].join("\n");
        window.location.href = `mailto:meet.dhaduk@modernsmilk.com?subject=${encodeURIComponent(
          "Enquiry from modernharvest.in"
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <label className="block">
        <span className="mb-2 block text-[15px]">Name</span>
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>

      <label className="block">
        <span className="mb-2 block text-[15px]">Company</span>
        <input name="company" autoComplete="organization" className={field} placeholder="Company name" />
      </label>

      <label className="block">
        <span className="mb-2 block text-[15px]">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@company.com"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-[15px]">Interest</span>
        <select name="interest" className={field} defaultValue="General enquiry">
          <option>General enquiry</option>
          <option>Precision farming</option>
          <option>Sustainable irrigation</option>
          <option>Supply chain support</option>
          <option>Climate-resilient program</option>
          <option>Organic practices</option>
        </select>
      </label>

      <label className="block sm:col-span-2">
        <span className="mb-2 block text-[15px]">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className={`${field} resize-y`}
          placeholder="Tell us about your land, your crops, and what you're trying to solve."
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 rounded-pill bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark"
        >
          <Leaf />
          Send enquiry
        </button>
        <p aria-live="polite" className="mt-4 text-[15px] text-muted">
          {sent
            ? "Opening your email app — if nothing happens, write to meet.dhaduk@modernsmilk.com."
            : "We reply to every enquiry within one working day."}
        </p>
      </div>
    </form>
  );
}
