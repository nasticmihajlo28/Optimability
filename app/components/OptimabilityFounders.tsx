import Image, { type StaticImageData } from "next/image";
import martinPhoto from "../images/martin nikolov.png";
import ioanPhoto from "../images/Ioan Popov.png";

const FOUNDERS: { name: string; role: string; photo: StaticImageData }[] = [
  { name: "Martin Nikolov", role: "CEO", photo: martinPhoto },
  { name: "Ioan Popov", role: "COO", photo: ioanPhoto },
];

export default function OptimabilityFounders() {
  return (
    <section
      id="founders"
      className="w-full px-4 pt-44"
      aria-label="Optimability founders"
    >
      <div className="mx-auto w-full max-w-[82.5rem]">
        <h2 className="text-center font-jakarta text-[3.25rem] font-normal capitalize leading-[3.75rem] tracking-[-2px] text-black">
          Optimability Founders
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDERS.map(({ name, role, photo }) => (
            <article key={name} className="rounded-lg bg-surface-muted p-5">
              <div className="relative h-[22rem] w-full overflow-hidden rounded-lg">
                <Image
                  src={photo}
                  alt={`${name}, ${role} of Optimability`}
                  fill
                  sizes="384px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-sans text-base leading-[1.375rem] tracking-[-1px] text-black">
                {name}
              </p>
              <p className="mt-1 font-sans text-sm leading-[1.375rem] tracking-[-0.5px] text-black/60">
                {role}
              </p>
            </article>
          ))}

          {/* Mission card */}
          <article className="hero-gradient flex min-h-[28rem] flex-col justify-between rounded-lg p-6 sm:col-span-2 lg:col-span-1">
            <p className="font-sans text-base text-white/90">Our mission</p>
            <p className="font-jakarta text-4xl font-normal leading-[3rem] tracking-[-1px] text-white">
              On A Mission To
              <br />
              Double The Average
              <br />
              Human&apos;s Lifespan
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
