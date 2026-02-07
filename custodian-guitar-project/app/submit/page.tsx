import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tell Us About an Instrument",
  description:
    "Share what you know about the instrument. No pressure, no obligation. We’ll respond respectfully and clearly.",
};

export default function Submit() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <section className="rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">
          Tell Us About an Instrument
        </h1>
        <p className="mt-3 text-neutral-700">
          Share as much or as little as you know. Photos help, but aren’t required.
          We’ll respond respectfully and clearly—no pressure, no obligation.
        </p>

        {/* Visitor-friendly note (replace the setup box) */}
        <div className="mt-5 rounded-2xl border border-neutral-200/70 bg-[#fbfaf7] p-5 text-sm text-neutral-700">
          <p className="font-semibold">What happens next</p>
          <p className="mt-2">
            We’ll review what you send and reply with clear next steps. There’s no obligation,
            and we’re happy to help even if you’re not ready to sell.
          </p>
        </div>

        <form
          className="mt-8 grid gap-4"
          action="https://formspree.io/f/mbdajplw"
          method="POST"
        >
          <div className="grid gap-2">
            <label className="text-sm font-semibold">Your name</label>
            <input
              name="name"
              required
              className="rounded-xl border border-neutral-200 px-4 py-3"
              placeholder="Full name"
            />
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-semibold">Email</label>
              <input
                name="email"
                type="email"
                required
                className="rounded-xl border border-neutral-200 px-4 py-3"
                placeholder="you@email.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold">Phone (optional)</label>
              <input
                name="phone"
                className="rounded-xl border border-neutral-200 px-4 py-3"
                placeholder="(555) 555-5555"
              />
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-semibold">What is it?</label>
              <input
                name="instrument"
                className="rounded-xl border border-neutral-200 px-4 py-3"
                placeholder="e.g., Fender Stratocaster, Gibson amp, Martin acoustic"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold">Location</label>
              <input
                name="location"
                className="rounded-xl border border-neutral-200 px-4 py-3"
                placeholder="City, State"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold">
              How did it come into your family?
            </label>
            <textarea
              name="provenance"
              rows={4}
              className="rounded-xl border border-neutral-200 px-4 py-3"
              placeholder="Tell us anything you know about the original owner, dates, places, and memories."
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold">
              What do you know about its condition?
            </label>
            <textarea
              name="condition"
              rows={3}
              className="rounded-xl border border-neutral-200 px-4 py-3"
              placeholder="Any repairs, modifications, missing parts, or known issues?"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold">
              Photo links (optional)
              <span className="ml-2 text-xs font-normal text-neutral-600">
                Paste a Google Drive / iCloud / Dropbox link if you have photos.
              </span>
            </label>
            <input
              name="photo_links"
              className="rounded-xl border border-neutral-200 px-4 py-3"
              placeholder="https://..."
            />
            <p className="text-xs text-neutral-600">
              Best photos: front/back, headstock (front/back), serial number,
              electronics cavity (if safe), amp back panel, and close-ups of notable markings.
            </p>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-[#2a4b3f] px-6 py-3 font-semibold text-white hover:brightness-95"
          >
            Send
          </button>

          <p className="text-xs text-neutral-600">
            By submitting, you’re asking for a conversation—not committing to a sale.
          </p>
          <div className="mt-8 border-t border-neutral-200 pt-6 text-center">
  <p className="mb-3 text-sm text-neutral-700">
    Prefer to email us directly?
  </p>

  <a
    href="mailto:custodianguitarproject@gmail.com"
    className="inline-flex items-center justify-center rounded-full bg-[#2a4b3f] px-6 py-3 text-sm font-semibold text-white hover:brightness-95"
  >
    Email The Custodian Guitar Project
  </a>
</div>

        </form>
      </section>
    </main>
  );
}
