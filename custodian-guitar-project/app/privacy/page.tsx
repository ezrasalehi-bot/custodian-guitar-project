import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for The Custodian Guitar Project.",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10 md:py-14">
      <section className="panel p-7 md:p-10">
        <h1 className="text-4xl font-semibold leading-tight">Privacy</h1>
        <p className="mt-4 text-lg text-[color:var(--ink-soft)]">
          We only use your information to respond to your inquiry. We do not sell your data.
        </p>
        <p className="mt-4 text-lg text-[color:var(--ink-soft)]">
          If you submit a form, your message is delivered to us so we can respond. You can request
          deletion of your submission at any time.
        </p>
      </section>
    </main>
  );
}
