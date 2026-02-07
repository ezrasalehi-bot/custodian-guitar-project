import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We’re Looking For",
  description: "Vintage electric guitars, acoustic guitars, and amplifiers we evaluate and acquire.",
};

export default function WhatWeSeek() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <section className="rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">What We’re Looking For</h1>
        <p className="mt-4 text-neutral-700">
          We focus on historically significant American instruments. Originality and story matter
          more than cosmetic perfection.
        </p>

        <div className="mt-7 grid gap-4">
          <div className="rounded-2xl border border-neutral-200/70 bg-[#fbfaf7] p-5">
            <h2 className="font-semibold">Electric Guitars (1950s–1960s)</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Primarily Fender and Gibson models. Honest wear is welcome; originality is key.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200/70 bg-[#fbfaf7] p-5">
            <h2 className="font-semibold">Amplifiers (1950s–1960s)</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Vintage tube amps, primarily Fender and Gibson. We care about originality and safe operation.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200/70 bg-[#fbfaf7] p-5">
            <h2 className="font-semibold">Acoustic Guitars (1930s–1950s)</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Primarily American-built instruments. Repairs are common and OK; we evaluate case-by-case.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200/70 bg-white p-5">
          <p className="font-semibold">Not sure if it fits?</p>
          <p className="mt-2 text-neutral-700">
            Send what you have anyway. We’ll help you understand what it is and what it may be worth—no pressure.
          </p>
        </div>
      </section>
    </main>
  );
}
