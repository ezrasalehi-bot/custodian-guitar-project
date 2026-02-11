import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We're Looking For",
  description: "Vintage electric guitars, acoustic guitars, and amplifiers we evaluate and acquire.",
};

export default function WhatWeSeek() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10 md:py-14">
      <section className="panel p-7 md:p-10">
        <h1 className="text-4xl font-semibold leading-tight">What We're Looking For</h1>
        <p className="mt-4 text-lg text-[color:var(--ink-soft)]">
          We focus on historically significant American instruments. Originality and story matter
          more than cosmetic perfection.
        </p>

        <div className="mt-7 grid gap-4">
          <div className="soft-panel p-5">
            <h2 className="text-2xl font-semibold">Electric Guitars (1950s-1960s)</h2>
            <p className="mt-2 text-[color:var(--ink-soft)]">
              Primarily Fender and Gibson models. Honest wear is welcome; originality is key.
            </p>
          </div>

          <div className="soft-panel p-5">
            <h2 className="text-2xl font-semibold">Amplifiers (1950s-1960s)</h2>
            <p className="mt-2 text-[color:var(--ink-soft)]">
              Vintage tube amps, primarily Fender and Gibson. We care about originality and safe
              operation.
            </p>
          </div>

          <div className="soft-panel p-5">
            <h2 className="text-2xl font-semibold">Acoustic Guitars (1930s-1950s)</h2>
            <p className="mt-2 text-[color:var(--ink-soft)]">
              Primarily American-built instruments. Repairs are common and okay; we evaluate
              case-by-case.
            </p>
          </div>
        </div>

        <div className="soft-panel mt-8 p-5">
          <p className="text-xl font-semibold">Not sure if it fits?</p>
          <p className="mt-2 text-[color:var(--ink-soft)]">
            Send what you have anyway. We'll help you understand what it is and what it may be
            worth, with no pressure.
          </p>
        </div>
      </section>
    </main>
  );
}
