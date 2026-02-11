import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["500", "600", "700"],
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "The Custodian Guitar Project",
    template: "%s | The Custodian Guitar Project",
  },
  description:
    "We acquire historically significant guitars and amplifiers directly from original owners and families - never for resale, always for lifelong preservation.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "The Custodian Guitar Project",
    description: "A permanent home for vintage guitars and amplifiers. No resale. Ever.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/inherited", label: "Inherited a Guitar?" },
  { href: "/what-we-seek", label: "What We Seek" },
  { href: "/philosophy", label: "Our Philosophy" },
  { href: "/contact", label: "Contact" },
];

function Nav() {
  return (
    <header className="site-header">
      <div className="mx-auto max-w-6xl px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <Link href="/" className="site-title">
              The Custodian Guitar Project
            </Link>
            <p className="site-subtitle">Permanent collection. No resale. Respectful, clear evaluations.</p>
          </div>

          <Link href="/submit" className="btn-primary">
            Tell Us About an Instrument
          </Link>
        </div>

        <nav aria-label="Main navigation" className="mt-4 flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-chip">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--paper)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-base text-[color:var(--ink-soft)]">
        <span>© {new Date().getFullYear()} The Custodian Guitar Project</span>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className="text-[color:var(--ink)] hover:underline">
            Privacy
          </Link>
          <Link href="/contact" className="text-[color:var(--ink)] hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${titleFont.variable} ${bodyFont.variable}`}>
      <head>
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
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
