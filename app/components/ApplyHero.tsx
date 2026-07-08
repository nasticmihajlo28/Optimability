import Image from "next/image";
import videoThumbnail from "../images/apply-video-thumbnail.png";

export default function ApplyHero() {
  return (
    <section
      className="hero-gradient flex w-full flex-col items-center px-4 pb-20 pt-20"
      aria-label="Apply to Optimability"
    >
      {/* Badge */}
      <div className="flex h-9 items-center justify-center rounded-full bg-white/12 px-8">
        <span className="font-sans text-base capitalize leading-none tracking-[-1px] text-white">
          For Founders Doing Multiple 6 Figures A Year
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-8 max-w-[72.5625rem] text-center font-jakarta text-[3.75rem] font-normal capitalize leading-[4.25rem] tracking-[-2px] text-white">
        Eliminate The Decision Fatigue That&apos;s Costing You Thousands Of
        Dollars
      </h1>

      {/* Subtitle */}
      <p className="mt-8 max-w-[22.125rem] text-center font-sans text-base leading-[1.375rem] tracking-[-1px] text-white/80">
        A done-for-you system built for founders runs your health so you can
        keep running your business
      </p>

      {/* Video thumbnail */}
      <div className="relative mt-14 w-full max-w-[68.5rem] overflow-hidden rounded-sm">
        <Image
          src={videoThumbnail}
          alt="Founder explaining how Optimability works"
          priority
          className="h-auto w-full object-cover"
        />
        <button
          type="button"
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex size-[5.5rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/40 backdrop-blur-[5px] transition-transform duration-200 hover:scale-105"
        >
          <svg
            viewBox="0 0 44 44"
            fill="none"
            aria-hidden="true"
            className="size-11"
          >
            <path
              d="M14.668 9.42358V35.0902L34.8346 22.2569L14.668 9.42358Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
