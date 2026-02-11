import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inherited a Guitar?",
  description:
    "Inherited a vintage guitar or amp? Learn what to do first, how valuation works, and how The Custodian Guitar Project differs from dealers. No pressure. No resale.",
};

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="panel p-7 md:p-8">
      <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
      <div className="mt-3 text-lg text-[color:var(--ink-soft)]">{children}</div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="soft-panel mt-4 p-4 text-[color:var(--ink)]">
      <div className="border-l-4 border-[color:var(--accent)] pl-4">{children}</div>
    </div>
  );
}

export default function InheritedPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <section className="pb-8">
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Inherited a Guitar?
        </h1>
        <p className="mt-4 max-w-4xl text-xl text-[color:var(--ink-soft)]">
          You’re not expected to know what you have. This guide will help you take the first steps
          calmly, understand value without pressure, and decide what’s right for your family.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/submit" className="btn-primary">
            Tell Us About the Guitar
          </Link>
          <a href="#process" className="btn-secondary">
            See Our Process
          </a>
        </div>
      </section>

      <div className="grid gap-5">
        <Card title="You’re Not Expected to Know What You Have">
          <p>
            If you’ve recently inherited a guitar or amplifier, you may be holding something
            valuable, historic, or deeply personal—and not know where to start. That’s normal.
          </p>
          <p className="mt-3">Most families we speak with don’t know:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>The exact year or model</li>
            <li>Whether it’s original</li>
            <li>If it’s rare or common</li>
            <li>What it might be worth</li>
            <li>Whether it should even be sold</li>
          </ul>
          <Callout>
            Our role is to help you understand what you have{" "}
            <strong>before any decisions are made</strong>.
          </Callout>
        </Card>

        <Card title="Take Your Time — There Is No Rush">
          <p>
            One of the most common mistakes families make is selling too quickly. You may receive
            fast offers, confident opinions, and pressure to “act now.”
          </p>
          <p className="mt-3">
            Vintage guitars are not commodities. They are historical objects with stories, context,
            and nuance.
          </p>
          <Callout>
            A guitar that has been in a family for decades deserves a thoughtful evaluation—not a
            rushed transaction.
          </Callout>
        </Card>

        <Card title="Why Many Families Feel Uncomfortable Selling to Dealers">
          <p>
            Traditional vintage dealers operate on resale. That means they must buy below market
            value, and the instrument is relisted for profit.
          </p>
          <p className="mt-3">
            Families often see it for sale days later at a much higher price—especially painful when
            the guitar belonged to a parent or grandparent.
          </p>
        </Card>

        <Card title="How The Custodian Guitar Project Is Different">
          <p className="font-semibold">We are not a dealer.</p>
          <p className="mt-3">We acquire instruments for a private, permanent collection—never for resale.</p>
          <ul className="mt-3 list-disc pl-6">
            <li>We can pay <strong>top market value</strong></li>
            <li>There is <strong>no pressure to flip</strong></li>
            <li>The instrument goes to <strong>one lifelong home</strong></li>
            <li>Its history is <strong>respected and preserved</strong></li>
          </ul>
          <Callout>The instrument’s story continues—it doesn’t end with a listing.</Callout>
        </Card>

        <Card title="What Types of Instruments Do We Evaluate?">
          <p>We specialize in historically significant American instruments, including:</p>
          <ul className="mt-3 list-disc pl-6">
            <li><strong>Electric guitars (1950s–1960s)</strong> — primarily Fender and Gibson</li>
            <li><strong>Tube amplifiers (1950s–1960s)</strong> — vintage Fender and Gibson</li>
            <li><strong>Acoustic guitars (1930s–1950s)</strong> — primarily American-built instruments</li>
          </ul>
          <p className="mt-3">
            <strong>Condition matters less than originality and story.</strong> Wear, repairs, and honest use are expected—and often appreciated.
          </p>
        </Card>

        <section id="process" className="panel p-7 md:p-8">
          <h2 className="text-3xl font-semibold leading-tight">Our Process (Simple and Respectful)</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {[
              ["Step 1", "Initial Conversation", "You share what you know and send photos (if available)."],
              ["Step 2", "Historical Evaluation", "We identify the instrument and explain its significance in plain language."],
              ["Step 3", "Clear Offer", "If appropriate, we make an offer and explain how it was determined."],
              ["Step 4", "In-Person Experience", "When possible, we meet in person and handle the instrument with care."],
              ["Step 5", "No Obligation", "Whether you sell or not, the information is yours to keep."],
            ].map(([step, title, text]) => (
              <div key={step} className="soft-panel p-4">
                <div className="inline-flex rounded-full border border-[color:var(--line)] bg-white px-3 py-1 text-xs font-semibold">
                  {step}
                </div>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <Card title="If You’re Not Ready to Sell">
          <p>
            That’s completely fine. Many families contact us simply to understand what they have,
            decide whether to keep it, or learn how to store and care for it properly.
          </p>
          <p className="mt-3">We’re happy to help—without expectation.</p>
        </Card>

        <section className="panel p-7 md:p-8">
          <h2 className="text-3xl font-semibold leading-tight">Tell Us About the Guitar</h2>
          <p className="mt-3 text-lg text-[color:var(--ink-soft)]">
            If you’d like to start a conversation, we’d be honored. Share as much or as little as you know. Photos help, but aren’t required.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/submit" className="btn-primary">
              Tell Us About an Instrument
            </Link>
            <Link href="/philosophy" className="btn-secondary">
              Read Our Philosophy
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
