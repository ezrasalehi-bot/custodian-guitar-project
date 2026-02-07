import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for The Custodian Guitar Project.",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <section className="rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
        <p className="mt-4 text-neutral-700">
          We only use your information to respond to your inquiry. We do not sell your data.
        </p>
        <p className="mt-4 text-neutral-700">
          If you submit a form, your message is delivered to us so we can respond. You can request deletion of your submission at any time.
        </p>
      </section>
    </main>
  );
}
