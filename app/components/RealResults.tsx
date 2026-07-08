export default function RealResults() {
  return (
    <section
      id="testimonials"
      className="w-full px-4 pt-20"
      aria-label="Real results from real founders"
    >
      {/* Card: 1320x900, #ebf1f4, radius 8 — the exact Figma geometry needs
          the full 1320px container, so it only applies from xl up */}
      <div className="relative mx-auto w-full max-w-[82.5rem] rounded-lg bg-surface-muted px-6 py-10 xl:h-[900px] xl:px-0 xl:py-0">
        {/* Heading */}
        <h2 className="max-w-[423px] font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-black md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] xl:absolute xl:left-[112px] xl:top-[375.5px] xl:max-w-none xl:w-[423px] xl:-translate-y-1/2 xl:text-[3.25rem] xl:leading-[3.75rem] xl:tracking-[-2px]">
          Real results from real founders
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[424px] font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80 xl:absolute xl:left-[112px] xl:top-[470px] xl:mt-0 xl:max-w-none xl:w-[424px] xl:-translate-y-1/2">
          14-hour days without real food and energy take their toll. Sam Zia,
          serial entrepreneur, shares how Optimability changed that
        </p>

        {/* View more — destination will be wired up later */}
        <button
          type="button"
          className="relative mt-6 block h-12 w-[200px] cursor-pointer overflow-hidden rounded-lg bg-[linear-gradient(124.196deg,#011a29_2.75%,#034d74_46.26%)] transition-colors duration-200 hover:bg-none hover:bg-brand-ocean xl:absolute xl:left-[112px] xl:top-[527px] xl:mt-0"
        >
          <span className="absolute left-[calc(50%-21px)] top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans text-base tracking-[-1px] text-white">
            View more
          </span>
          <span className="absolute right-1.5 top-1.5 flex size-9 items-center justify-center rounded-lg bg-white">
            <svg
              className="size-5 rotate-90"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 16.6663V3.33301M5 8.33301L10 3.33301L15 8.33301"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Video placeholder (536x740) — the real video drops in here later */}
        <div className="relative mt-10 aspect-[536/740] w-full max-w-[536px] rounded-lg bg-[#d9d9d9] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.2)] xl:absolute xl:left-[672px] xl:top-[80px] xl:mt-0 xl:aspect-auto xl:h-[740px] xl:w-[536px]">
          {/* Play button overlay */}
          <div className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 backdrop-blur-[5px]">
            <svg
              className="size-8"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10.668 6.85352V25.5202L25.3346 16.1868L10.668 6.85352Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
