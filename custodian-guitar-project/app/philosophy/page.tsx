import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description: "Why we never resell instruments and what it means to be a custodian.",
};

export default function Philosophy() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10 md:py-14">
      <section className="panel p-7 md:p-10">
        <h1 className="text-4xl font-semibold leading-tight">Our Philosophy</h1>

        <p className="mt-4 text-lg text-[color:var(--ink-soft)]">
          The Custodian Guitar Project exists for one reason: to preserve historically significant
          instruments and carry their stories forward without turning them into inventory.
        </p>

        <p className="mt-4 text-lg text-[color:var(--ink-soft)]">
          We acquire directly from original owners and families. Instruments become part of a
          private, permanent collection: maintained, documented, played, and cared for, never
          relisted and never resold.
        </p>

        <div className="soft-panel mt-6 p-6">
          <p className="text-2xl font-semibold">Our promise</p>
          <ul className="mt-3 list-disc pl-6 text-lg text-[color:var(--ink-soft)]">
            <li>No resale. Ever.</li>
            <li>Clear, respectful communication.</li>
            <li>A thoughtful evaluation process.</li>
            <li>A permanent home where the instrument will be played and preserved.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
