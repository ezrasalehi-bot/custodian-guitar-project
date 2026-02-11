import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Custodian Guitar Project.",
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10 md:py-14">
      <section className="panel p-7 md:p-10">
        <h1 className="text-4xl font-semibold leading-tight">Contact</h1>
        <p className="mt-4 text-lg text-[color:var(--ink-soft)]">
          The easiest way to reach us is through the instrument form so we can understand your
          situation clearly.
        </p>
        <div className="mt-6">
          <Link href="/submit" className="btn-primary">
            Tell Us About an Instrument
          </Link>
        </div>
      </section>
    </main>
  );
}
