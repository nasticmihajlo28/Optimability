import Image from "next/image";
import CtaButton from "./CtaButton";

const NAV_LINKS = [
  { label: "How We Help You", href: "#how-we-help-you" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Founders", href: "#founders" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex h-[5.125rem] w-full max-w-[84.5rem] items-center justify-between px-4">
        {/* Logo + brand */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/optimability-logo.svg"
            alt="Optimability logo"
            width={36}
            height={36}
            priority
            unoptimized
          />
          <span className="font-jakarta text-base font-semibold leading-6 tracking-[0.01em] text-white">
            Optimability
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link font-sans text-base leading-none text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <CtaButton />
      </nav>
    </header>
  );
}
