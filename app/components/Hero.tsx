import Image from "next/image";
import CtaButton from "./CtaButton";
import heroImage from "../images/hero-image.png";

export default function Hero() {
  return (
    <section className="flex w-full flex-col items-center px-4 pt-16">
      {/* Badge */}
      <div className="flex h-8 w-[12.5rem] items-center justify-center rounded-full bg-white/12">
        <span className="font-sans text-base leading-none text-white">
          For Founders &amp; Teams
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-6 max-w-[61.25rem] text-center font-jakarta text-[3.5rem] font-medium leading-[1.15] text-white">
        One System Completely Running Your Entire Health And Performance
      </h1>

      {/* Subtitle */}
      <p className="mt-7 max-w-[32.5rem] text-center font-sans text-base leading-6 text-white/80">
        One system running your nutrition, training, recovery, and testing so
        you can operate at full capacity without managing anything
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex items-center gap-[1.875rem]">
        <CtaButton />
        <a
          href="#how-it-works"
          className="flex h-12 w-[12.5rem] items-center justify-center rounded-lg border border-transparent transition-colors duration-200 hover:border-white/40"
        >
          <span className="font-sans text-base text-white">
            See How It Works
          </span>
        </a>
      </div>

      {/* Hero image */}
      <Image
        src={heroImage}
        alt="Two people in a meeting behind frosted glass"
        width={1320}
        height={720}
        priority
        className="mt-16 -mb-[21.25rem] h-auto w-full max-w-[82.5rem] rounded-[1.25rem] object-cover"
      />
    </section>
  );
}
