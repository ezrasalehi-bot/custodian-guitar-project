import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Custodian Guitar Project.",
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <section className="rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-neutral-700">
          The best way to reach us is through the submission form so we can understand what you have.
        </p>
        <div className="mt-6">
          <Link
            href="/submit"
            className="rounded-full bg-[#2a4b3f] px-5 py-2.5 font-semibold text-white hover:brightness-95"
          >
            Tell Us About an Instrument
          </Link>
        </div>
      </section>
    </main>
  );
}
