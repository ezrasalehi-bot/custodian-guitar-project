import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "The Custodian Guitar Project",
    template: "%s | The Custodian Guitar Project",
  },
  description:
    "We acquire historically significant guitars and amplifiers directly from original owners and families—never for resale, always for lifelong preservation.",
  metadataBase: new URL("https://example.com"), // TODO: replace after domain is live
  openGraph: {
    title: "The Custodian Guitar Project",
    description: "A permanent home for vintage guitars and amplifiers. No resale. Ever.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#fbfaf7]/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <div className="min-w-0">
          <Link href="/" className="block text-lg font-semibold tracking-tight">
            The Custodian Guitar Project
          </Link>
          <p className="text-sm text-neutral-600">
            Permanent collection • No resale • Respectful evaluation
          </p>
        </div>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          <Link className="hover:underline" href="/">Home</Link>
          <Link className="hover:underline" href="/inherited">Inherited a Guitar?</Link>
          <Link className="hover:underline" href="/philosophy">Our Philosophy</Link>
          <Link className="hover:underline" href="/what-we-seek">What We’re Looking For</Link>
          <Link
            href="/submit"
            className="rounded-full bg-[#2a4b3f] px-4 py-2 font-semibold text-white hover:brightness-95"
          >
            Tell Us About an Instrument
          </Link>
        </nav>

        <div className="md:hidden">
          <Link
            href="/submit"
            className="rounded-full bg-[#2a4b3f] px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
          >
            Submit
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 bg-[#fbfaf7]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-neutral-600">
        <span>© {new Date().getFullYear()} The Custodian Guitar Project</span>
        <span className="flex gap-3">
          <Link className="hover:underline" href="/privacy">Privacy</Link>
          <Link className="hover:underline" href="/contact">Contact</Link>
        </span>
      </div>
    </footer>
  );
}

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17939002163"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17939002163');
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
