import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-14">
      <section className="rounded-3xl border border-neutral-200/70 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          A permanent home for historic guitars and amplifiers.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-700">
          We acquire historically significant instruments directly from original owners and families—
          not for resale, but for lifelong preservation, care, and use.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/inherited"
            className="rounded-full bg-[#2a4b3f] px-5 py-2.5 font-semibold text-white hover:brightness-95"
          >
            Inherited a Guitar? Start Here
          </Link>
          <Link
            href="/submit"
            className="rounded-full border border-neutral-200 px-5 py-2.5 font-semibold hover:bg-neutral-50"
          >
            Tell Us About an Instrument
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200/70 bg-[#fbfaf7] p-5">
            <h2 className="font-semibold">No resale. Ever.</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Instruments we acquire become part of a private, permanent collection.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-[#fbfaf7] p-5">
            <h2 className="font-semibold">Top market value.</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Because we don’t flip instruments, we can pay fairly and transparently.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-[#fbfaf7] p-5">
            <h2 className="font-semibold">A respectful experience.</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Clear communication, plain language, and no-pressure evaluation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
