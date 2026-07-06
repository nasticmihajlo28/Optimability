export default function RealResults() {
  return (
    <section
      id="testimonials"
      className="w-full px-4 pt-20"
      aria-label="Real results from real founders"
    >
      {/* Card: 1320x900, #ebf1f4, radius 8 (exact Figma geometry at lg) */}
      <div className="relative mx-auto w-full max-w-[82.5rem] rounded-lg bg-surface-muted px-6 py-10 lg:h-[900px] lg:px-0 lg:py-0">
        {/* Heading */}
        <h2 className="max-w-[423px] font-jakarta text-[3.25rem] font-normal capitalize leading-[3.75rem] tracking-[-2px] text-black lg:absolute lg:left-[112px] lg:top-[375.5px] lg:max-w-none lg:w-[423px] lg:-translate-y-1/2">
          Real results from real founders
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[424px] font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80 lg:absolute lg:left-[112px] lg:top-[470px] lg:mt-0 lg:max-w-none lg:w-[424px] lg:-translate-y-1/2">
          14-hour days without real food and energy take their toll. Sam Zia,
          serial entrepreneur, shares how Optimability changed that
        </p>

        {/* View more — destination will be wired up later */}
        <button
          type="button"
          className="relative mt-6 block h-12 w-[200px] cursor-pointer overflow-hidden rounded-lg lg:absolute lg:left-[112px] lg:top-[527px] lg:mt-0"
          style={{
            backgroundImage:
              "linear-gradient(124.196deg, #011a29 2.75%, #034d74 46.26%)",
          }}
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
        <div className="relative mt-10 aspect-[536/740] w-full max-w-[536px] rounded-lg bg-[#d9d9d9] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.2)] lg:absolute lg:left-[672px] lg:top-[80px] lg:mt-0 lg:aspect-auto lg:h-[740px] lg:w-[536px]">
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
