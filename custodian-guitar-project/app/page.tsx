import Image from "next/image";
import Link from "next/link";
import heroImage from "../assets/blog/golden-era/header.jpg";
import stratImage from "../assets/blog/golden-era/fender-strat.jpg";
import lesPaulImage from "../assets/blog/golden-era/gibson-les-paul.jpg";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <section className="panel overflow-hidden">
        <div className="grid gap-8 p-7 md:grid-cols-[1.1fr_1fr] md:p-10">
          <div>
            <p className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-1 text-sm font-semibold text-[color:var(--ink-soft)]">
              Trusted by families preserving historic instruments
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              A Permanent Home for Vintage Guitars and Amplifiers
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-[color:var(--ink-soft)]">
              We acquire historically significant instruments directly from original owners and
              families. No resale, no pressure, and clear guidance every step of the way.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/inherited" className="btn-primary">
                Inherited a Guitar? Start Here
              </Link>
              <Link href="/submit" className="btn-secondary">
                Tell Us About an Instrument
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["No resale. Ever.", "Your instrument enters a private, permanent collection."],
                ["Top market value.", "We are not buying for flip margin."],
                ["Clear communication.", "Simple language and no-pressure conversations."],
              ].map(([title, text]) => (
                <div key={title} className="soft-panel p-4">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <p className="mt-1 text-base text-[color:var(--ink-soft)]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[#efe4d3]">
            <Image
              src={heroImage}
              alt="A collection of vintage guitars arranged in a warm studio setting"
              className="h-full w-full object-cover"
              priority
            />
            <figcaption className="border-t border-[color:var(--line)] bg-[#f9f2e7] px-4 py-3 text-sm text-[color:var(--ink-soft)]">
              Historic instruments deserve thoughtful, lifelong stewardship.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="panel overflow-hidden">
          <Image
            src={stratImage}
            alt="A close-up of a 1950s Fender Stratocaster style vintage guitar"
            className="h-64 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-semibold">Vintage Electric Guitars</h2>
            <p className="mt-3 text-[color:var(--ink-soft)]">
              We focus on historically significant Fender and Gibson instruments, especially from the
              1950s and 1960s.
            </p>
          </div>
        </article>

        <article className="panel overflow-hidden">
          <Image
            src={lesPaulImage}
            alt="A sunburst Gibson Les Paul style vintage guitar"
            className="h-64 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-semibold">Family-First Experience</h2>
            <p className="mt-3 text-[color:var(--ink-soft)]">
              Whether you sell or keep the instrument, we help you understand what you have in clear,
              plain terms.
            </p>
          </div>
        </article>
      </section>

      <section className="panel mt-10 p-7 md:p-10">
        <h2 className="text-3xl font-semibold md:text-4xl">How It Works (Simple and Straightforward)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["1", "Share what you know", "Use our short form. Photos are helpful but optional."],
            ["2", "Receive a clear evaluation", "We explain what the instrument is and why it matters."],
            ["3", "Decide with no pressure", "If it is a fit, you can accept an offer or walk away."],
          ].map(([num, title, text]) => (
            <article key={num} className="soft-panel p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-lg font-bold">
                {num}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-[color:var(--ink-soft)]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
