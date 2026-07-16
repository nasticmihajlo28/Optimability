import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

/* A section body is a mix of paragraphs (string) and bullet lists (string[]) */
export type LegalSection = {
  heading?: string;
  body: (string | string[])[];
};

export default function LegalPage({
  badge,
  title,
  subtitle,
  sections,
}: {
  badge: string;
  title: string;
  subtitle: string;
  sections: LegalSection[];
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header band */}
      <header className="hero-gradient flex w-full flex-col items-center px-4 pb-16 pt-10 md:pb-20">
        <Link href="/" className="flex w-fit items-center gap-3 self-start md:self-center">
          <Image
            src="/optimability-logo.svg"
            alt="Optimability logo"
            width={40}
            height={40}
            unoptimized
          />
          <span className="font-jakarta text-base font-semibold leading-6 tracking-[0.01em] text-white">
            Optimability
          </span>
        </Link>

        <div className="mt-10 flex h-8 items-center justify-center rounded-full bg-white/12 px-5">
          <span className="font-sans text-sm leading-none text-white md:text-base">
            {badge}
          </span>
        </div>

        <h1 className="mt-5 max-w-[50rem] text-center font-jakarta text-[2rem] font-medium leading-[1.15] text-white md:text-[2.75rem]">
          {title}
        </h1>

        <p className="mt-4 max-w-[32.5rem] text-center font-sans text-sm leading-6 text-white/70 md:text-base">
          {subtitle}
        </p>
      </header>

      {/* Document body */}
      <main className="mx-auto w-full max-w-[45rem] grow px-4 py-14 md:py-20">
        {sections.map(({ heading, body }, s) => (
          <section key={s} className={s > 0 ? "mt-10" : undefined}>
            {heading && (
              <h2 className="font-jakarta text-xl font-semibold leading-snug text-brand-deep md:text-2xl">
                {heading}
              </h2>
            )}
            {body.map((block, b) =>
              typeof block === "string" ? (
                <p
                  key={b}
                  className="mt-4 font-sans text-base leading-7 text-neutral-700"
                >
                  {block}
                </p>
              ) : (
                <ul
                  key={b}
                  className="mt-4 flex list-disc flex-col gap-2 pl-6 font-sans text-base leading-7 text-neutral-700"
                >
                  {block.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )
            )}
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
