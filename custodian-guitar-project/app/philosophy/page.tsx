import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description: "Why we never resell instruments and what it means to be a custodian.",
};

export default function Philosophy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <section className="rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Our Philosophy</h1>

        <p className="mt-4 text-neutral-700">
          The Custodian Guitar Project exists for one reason: to preserve historically significant
          instruments and carry their stories forward—without turning them into inventory.
        </p>

        <p className="mt-4 text-neutral-700">
          We acquire directly from original owners and families. Instruments we acquire become part
          of a private, permanent collection: maintained, documented, played, and cared for—never
          relisted, never resold.
        </p>

        <div className="mt-6 rounded-2xl border border-neutral-200/70 bg-[#fbfaf7] p-5">
          <p className="font-semibold">Our promise</p>
          <ul className="mt-3 list-disc pl-6 text-neutral-700">
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
