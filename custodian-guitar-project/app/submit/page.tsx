import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tell Us About an Instrument",
  description:
    "Share what you know about the instrument. No pressure, no obligation. We'll respond respectfully and clearly.",
};

export default function Submit() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10 md:py-14">
      <section className="panel p-7 md:p-10">
        <h1 className="text-4xl font-semibold leading-tight">Tell Us About an Instrument</h1>
        <p className="mt-3 text-lg text-[color:var(--ink-soft)]">
          Share as much or as little as you know. Photos help, but are not required.
        </p>

        <div className="soft-panel mt-6 p-5">
          <p className="text-xl font-semibold">What happens next</p>
          <p className="mt-2 text-[color:var(--ink-soft)]">
            We review your details and reply with clear next steps. Asking questions here does not
            commit you to a sale.
          </p>
        </div>

        <form className="mt-8 grid gap-5" action="https://formspree.io/f/mbdajplw" method="POST">
          <input type="hidden" name="_redirect" value="https://custodianguitarproject.com/thank-you" />

          <div className="grid gap-2">
            <label className="font-semibold" htmlFor="name">
              Your name
            </label>
            <input id="name" name="name" required placeholder="Full name" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input id="email" name="email" type="email" required placeholder="you@email.com" />
            </div>
            <div className="grid gap-2">
              <label className="font-semibold" htmlFor="phone">
                Phone (optional)
              </label>
              <input id="phone" name="phone" placeholder="(555) 555-5555" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="font-semibold" htmlFor="instrument">
                What is it?
              </label>
              <input
                id="instrument"
                name="instrument"
                placeholder="e.g., Fender Stratocaster, Gibson amp, Martin acoustic"
              />
            </div>
            <div className="grid gap-2">
              <label className="font-semibold" htmlFor="location">
                Location
              </label>
              <input id="location" name="location" placeholder="City, State" />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="font-semibold" htmlFor="provenance">
              How did it come into your family?
            </label>
            <textarea
              id="provenance"
              name="provenance"
              rows={4}
              placeholder="Share any owner history, dates, or stories you know."
            />
          </div>

          <div className="grid gap-2">
            <label className="font-semibold" htmlFor="condition">
              What do you know about its condition?
            </label>
            <textarea
              id="condition"
              name="condition"
              rows={4}
              placeholder="Any repairs, modifications, or missing parts?"
            />
          </div>

          <div className="grid gap-2">
            <label className="font-semibold" htmlFor="photo_links">
              Photo links (optional)
            </label>
            <input id="photo_links" name="photo_links" placeholder="https://..." />
            <p className="text-sm text-[color:var(--ink-soft)]">
              You can paste a Google Drive, iCloud, or Dropbox link.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button type="submit" className="btn-primary cursor-pointer">
              Send Message
            </button>
            <a href="mailto:custodianguitarproject@gmail.com" className="btn-secondary">
              Email Us Directly
            </a>
          </div>

          <p className="text-sm text-[color:var(--ink-soft)]">
            By submitting, you are starting a conversation, not committing to a sale.
          </p>
        </form>
      </section>
    </main>
  );
}
