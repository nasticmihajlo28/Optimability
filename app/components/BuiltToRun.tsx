import Image from "next/image";

/* ------------------------------------------------------------------------ */
/* Card A — phone with plan notification                                     */
/* ------------------------------------------------------------------------ */

function PlanSkeletonRow() {
  return (
    <div className="flex h-10 items-center gap-2.5 rounded-md bg-white px-2 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06)]">
      <div className="h-7 w-8 shrink-0 rounded bg-linear-to-r from-[#e0e0e0] to-[#f4f4f4]" />
      <div className="flex w-full flex-col gap-1.5">
        <div className="h-1.5 w-4/5 rounded-full bg-linear-to-r from-[#e0e0e0] to-[#f6f6f6]" />
        <div className="h-1.5 w-3/5 rounded-full bg-linear-to-r from-[#e0e0e0] to-[#f6f6f6]" />
      </div>
    </div>
  );
}

function PlanVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #CDDDE5 0%, #AEC7D5 40%, #7FA3B6 100%)",
      }}
    >
      {/* Phone frame (bottom clipped by the card) */}
      <div className="absolute left-1/2 top-[43px] h-[360px] w-[308px] max-w-[calc(100%-24px)] -translate-x-1/2 rounded-t-[40px] border-4 border-b-0 border-[#b8c1c8] bg-[#f7f7f7]">
        {/* Notch */}
        <div className="absolute left-1/2 top-3.5 h-3.5 w-[88px] -translate-x-1/2 rounded-full bg-[#c6c6c6]" />

        {/* Skeleton list */}
        <div className="absolute inset-x-4 top-[124px] flex flex-col gap-3.5">
          <PlanSkeletonRow />
          <PlanSkeletonRow />
          <PlanSkeletonRow />
          <PlanSkeletonRow />
        </div>
      </div>

      {/* Notification pill overflowing the phone */}
      <div className="absolute left-1/2 top-[90px] flex h-16 w-[95%] max-w-[381px] -translate-x-1/2 items-center gap-3 rounded-lg bg-white px-2 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.18)]">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-linear-to-b from-brand-deep to-brand-ocean">
          <Image
            src="/optimability-logo.svg"
            alt=""
            width={26}
            height={26}
            unoptimized
          />
        </div>
        <div className="min-w-0">
          <p className="truncate font-sans text-base leading-[1.375rem] tracking-[-1px] text-black">
            Based on your results, we updated your plan
          </p>
          <p className="truncate font-sans text-xs leading-4 tracking-[-0.5px] text-black/50">
            Recovery data from this week
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Card B — biomarkers chart popover                                         */
/* ------------------------------------------------------------------------ */

function DropletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.333 10.764c0 1.194-.474 2.338-1.318 3.182A4.486 4.486 0 0 1 7.833 15.264a4.486 4.486 0 0 1-3.182-1.318 4.486 4.486 0 0 1-1.318-3.182c0-3.247 2.965-8.141 4.081-9.867a.5.5 0 0 1 .838 0c1.116 1.726 4.081 6.62 4.081 9.867Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CursorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 2l4.2 11 1.5-4.7L13.4 7 3 2Z"
        fill="black"
        stroke="white"
        strokeWidth="0.8"
      />
    </svg>
  );
}

/** Blurred gradient waves painting the background (exported from Figma) */
const WAVES = [
  { src: "/built-to-run/wave-1.svg", left: "-33.5%", top: -185, width: "163%", height: 438 },
  { src: "/built-to-run/wave-2.svg", left: "-33.5%", top: -104, width: "163%", height: 437 },
  { src: "/built-to-run/wave-3.svg", left: "-33.4%", top: 39, width: "162.8%", height: 424 },
  { src: "/built-to-run/wave-4.svg", left: "-33.4%", top: -24, width: "162.7%", height: 422 },
  { src: "/built-to-run/wave-5.svg", left: "-32.3%", top: 111, width: "162.8%", height: 425 },
];

/** Skeleton bar heights of the mini app cards, in % of card height */
const MINI_BARS = [14, 19.5, 25.5, 21, 39, 25, 33.5];

/** Faded miniature of the biomarkers screen, stacked behind the main card */
function MiniAppCard({
  className,
  contentOpacity,
}: {
  className: string;
  contentOpacity: number;
}) {
  return (
    <div
      className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg ${className}`}
    >
      <div className="absolute inset-0" style={{ opacity: contentOpacity }}>
        {/* Header skeleton */}
        <div className="absolute left-[3.75%] top-[6%] h-[18%] w-[11.25%] rounded-[3px] bg-linear-to-r from-[#c5c5c5] to-[#eeeeee]" />
        <div className="absolute left-[18.1%] top-[8.5%] h-[5%] w-[30.3%] rounded-full bg-linear-to-r from-[#e0e0e0] to-[#a6a6a6]" />
        <div className="absolute left-[18.1%] top-[18%] h-[3.5%] w-[47.8%] rounded-full bg-linear-to-r from-[#d1d1d1] to-[#ededed]" />
        {/* Chart bars */}
        {MINI_BARS.map((height, i) => (
          <div
            key={i}
            className="absolute bottom-[13%] w-[10%] rounded-[3px] bg-linear-to-b from-[#e0e0e0] to-[#f9f9f9]"
            style={{ left: `${3.75 + i * 13.75}%`, height: `${height}%` }}
          />
        ))}
        {/* Day-label pills */}
        {MINI_BARS.map((_, i) => (
          <div
            key={i}
            className="absolute top-[90%] h-[4%] w-[6.9%] rounded-full bg-linear-to-r from-[#d1d1d1] to-[#ededed]"
            style={{ left: `${5 + i * 13.75}%` }}
          />
        ))}
      </div>
    </div>
  );
}

const CHART_BARS = [
  { day: "Mon", height: 28 },
  { day: "Tue", height: 39 },
  { day: "Wed", height: 51 },
  { day: "Thu", height: 42 },
  { day: "Fri", height: 78, highlight: true },
  { day: "Sat", height: 50 },
  { day: "Sun", height: 67 },
];

function BiomarkersVisual() {
  return (
    <div aria-hidden className="absolute inset-0 bg-white">
      {/* Wavy gradient background */}
      {WAVES.map(({ src, left, top, width, height }) => (
        <div
          key={src}
          className="absolute"
          style={{
            left,
            top,
            width,
            height,
            backgroundImage: `url(${src})`,
            backgroundSize: "100% 100%",
          }}
        />
      ))}

      {/* Mini app screens stacked behind the main card */}
      <MiniAppCard
        className="left-[calc(50%-213px)] h-[104px] w-[166px] border-[1.5px] border-[#558a82]/20 bg-[#aacec8]"
        contentOpacity={0.2}
      />
      <MiniAppCard
        className="left-[calc(50%+213px)] h-[104px] w-[166px] border-[1.5px] border-[#558a82]/20 bg-[#aacec8]"
        contentOpacity={0.2}
      />
      <MiniAppCard
        className="left-[calc(50%-106.5px)] h-[152px] w-[243px] border-2 border-[#579086]/40 bg-[#d7e5e2]"
        contentOpacity={0.6}
      />
      <MiniAppCard
        className="left-[calc(50%+106.5px)] h-[152px] w-[243px] border-2 border-[#579086]/40 bg-[#d7e5e2]"
        contentOpacity={0.6}
      />

      {/* Main biomarkers card */}
      <div className="absolute left-1/2 top-1/2 h-[200px] w-[320px] max-w-[calc(100%-16px)] -translate-x-1/2 -translate-y-1/2 rounded-lg border-4 border-[#558a82] bg-[#f4f4f4] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)]">
        {/* Header */}
        <div className="absolute left-3 top-3 flex items-center gap-2.5">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-b from-[#076c4f] to-[#10bc8b]">
            <DropletIcon className="size-4" />
          </div>
          <div>
            <p className="font-sans text-base leading-5 tracking-[-1px] text-black">
              Biomarkers
            </p>
            <p className="font-sans text-xs leading-4 tracking-[-1px] text-black/60">
              Blood, DEXA, and gut panels over time
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="absolute bottom-0 left-3 right-1 flex items-end justify-between">
          {CHART_BARS.map(({ day, height, highlight }) => (
            <div key={day} className="flex w-8 flex-col items-center gap-0.5">
              <div
                className={`w-full rounded-[4px] bg-linear-to-b from-[#076c4f] to-[#10bc8b] ${
                  highlight ? "" : "opacity-40"
                }`}
                style={{ height }}
              />
              <span className="font-sans text-[11px] leading-4 tracking-[-1px] text-black/60">
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Friday tooltip */}
        <div className="absolute left-[58px] top-[72px] h-[74px] w-[122px] rounded-[4px] bg-white p-2 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.2)]">
          <p className="font-sans text-xs leading-4 tracking-[-0.24px] text-black">
            Friday
          </p>
          <p className="font-sans text-[10px] leading-[14px] tracking-[-0.2px] text-black/60">
            Score: <span className="text-[#19b488]">83</span>
          </p>
          <p className="font-sans text-[10px] leading-[14px] tracking-[-0.2px] text-black/60">
            CRP: <span className="text-[#19b488]">1.0mg/L</span>
          </p>
          <p className="font-sans text-[10px] leading-[14px] tracking-[-0.2px] text-black/60">
            Glucose: <span className="text-[#19b488]">89mg/dL</span>
          </p>
          {/* Pointer toward the Friday bar */}
          <div className="absolute -right-[5px] top-1/2 size-2.5 -translate-y-1/2 rotate-45 bg-white" />
        </div>
        <CursorIcon className="absolute left-[66.9%] top-[109px] size-4" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Card C — AI Health Architect chat                                         */
/* ------------------------------------------------------------------------ */

function CheckCircleIcon({
  className,
  muted = false,
}: {
  className?: string;
  muted?: boolean;
}) {
  const stroke = muted ? "#c9cdc9" : "#2ABF68";
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="9" cy="9" r="8.3" stroke={stroke} strokeWidth="1.3" />
      {!muted && (
        <path
          d="M12.4 6.3 7.7 11.7 5.7 9.7"
          stroke={stroke}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.333 8h9.334M8.667 4 12.667 8l-4 4"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ANALYZED_FILES = [
  { name: "Sleep_report_latest.pdf", done: true },
  { name: "Adherence_log_this_week.pdf", done: true },
  { name: "Wearable_trends_7d.pdf", done: false },
];

function ArchitectVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #E7E0C3 0%, #D7CB9B 45%, #C5B677 100%)",
      }}
    >
      {/* Chat panel */}
      <div className="absolute left-1/2 top-[31px] h-[325px] w-[92%] max-w-[589px] -translate-x-1/2 rounded-xl bg-[#f4f4f4] shadow-[2px_2px_16px_0px_rgba(0,0,0,0.14)]">
        {/* User bubble */}
        <div className="absolute right-5 top-5 max-w-[calc(100%-40px)] rounded-lg bg-white px-4 py-2.5 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.1)]">
          <p className="font-sans text-sm leading-5 tracking-[-0.5px] text-black">
            Why did my score drop this week?
          </p>
        </div>

        {/* Analysis feed */}
        <div className="absolute left-6 top-[88px]">
          <p className="font-sans text-xs leading-4 tracking-[-0.3px] text-black/50">
            Analyzing your data...
          </p>
          <div className="mt-3.5 flex flex-col gap-3">
            {ANALYZED_FILES.map(({ name, done }) => (
              <div key={name} className="flex items-center gap-2.5">
                <CheckCircleIcon className="size-[18px] shrink-0" muted={!done} />
                <span
                  className={`font-sans text-[13px] leading-[18px] tracking-[-0.3px] ${
                    done ? "text-black" : "text-black/45"
                  }`}
                >
                  {name}
                </span>
              </div>
            ))}
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-2.5 opacity-60">
                <CheckCircleIcon className="size-[18px] shrink-0" muted />
                <div className="h-2 w-40 rounded-full bg-linear-to-r from-[#d9d9d9] to-[#ececec]" />
              </div>
            ))}
          </div>
        </div>

        {/* Input bar */}
        <div className="absolute inset-x-5 bottom-4 flex h-11 items-center justify-between gap-2 rounded-lg border border-black/10 bg-white pl-4 pr-1.5">
          <span className="min-w-0 truncate font-sans text-xs leading-4 tracking-[-0.3px] text-black/40">
            Ask a question or log what happened...
          </span>
          <span className="flex size-8 items-center justify-center rounded-md bg-linear-to-b from-brand-navy to-brand-blue">
            <ArrowRightIcon className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Card D — wearables connect list                                           */
/* ------------------------------------------------------------------------ */

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="white"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

const WEARABLES = [
  {
    name: "Apple Watch",
    rotation: "rotate-[3deg]",
    offset: "top-[52px]",
    icon: <AppleIcon className="size-6" />,
  },
  {
    name: "Whoop",
    rotation: "rotate-[-3deg]",
    offset: "top-[150px]",
    icon: (
      <span className="flex size-6 items-center justify-center rounded-full border border-white font-sans text-[11px] text-white">
        W
      </span>
    ),
  },
  {
    name: "Garmin",
    rotation: "rotate-[2deg]",
    offset: "top-[248px]",
    icon: (
      <span className="font-sans text-[7px] font-bold tracking-[0.5px] text-white">
        GARMIN
      </span>
    ),
  },
];

function WearableVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #D6E4ED 0%, #9EBCCD 45%, #6E96AD 100%)",
      }}
    >
      {WEARABLES.map(({ name, rotation, offset, icon }) => (
        <div
          key={name}
          className={`absolute left-1/2 flex h-[72px] w-[88%] max-w-[340px] -translate-x-1/2 items-center gap-3 rounded-xl bg-white px-3 shadow-[2px_4px_14px_0px_rgba(0,0,0,0.18)] ${rotation} ${offset}`}
        >
          <div className="flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-linear-to-b from-brand-deep to-brand-ocean">
            {icon}
          </div>
          <div className="min-w-0">
            <p className="font-sans text-base leading-5 tracking-[-0.5px] text-black">
              {name}
            </p>
            <p className="mt-0.5 font-sans text-xs leading-4 tracking-[-0.3px] text-black/50">
              Not connected
            </p>
          </div>
          <span className="ml-auto font-sans text-sm leading-5 tracking-[-0.5px] text-brand-ocean">
            Connect
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Section                                                                   */
/* ------------------------------------------------------------------------ */

function BentoCard({
  title,
  description,
  descriptionClass = "",
  visualHeight,
  visual,
}: {
  title: string;
  description: string;
  descriptionClass?: string;
  visualHeight: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-lg bg-surface-muted p-5">
      <div className={`relative w-full overflow-hidden rounded-lg ${visualHeight}`}>
        {visual}
      </div>
      <h3 className="mt-3 font-sans text-xl leading-[1.375rem] tracking-[-1px] text-black">
        {title}
      </h3>
      <p
        className={`mt-2 font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80 ${descriptionClass}`}
      >
        {description}
      </p>
    </div>
  );
}

export default function BuiltToRun() {
  return (
    <section
      id="built-to-run"
      className="w-full px-4 pt-20"
      aria-label="Built to run your health"
    >
      <div className="mx-auto w-full max-w-[82.5rem]">
        {/* Heading */}
        <h2 className="font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-black md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-2px]">
          Built to run your health
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-[25rem] font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80">
          One app tracking your nutrition, training, recovery, and biomarkers
          so your team always knows what to do next
        </p>

        {/* Bento grid — row 1 (536 / 760) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[536fr_760fr]">
          <BentoCard
            title="Plan Based on Your Data"
            description="Your protocol changes as your biomarkers, training, and recovery data change. No static plans. Just constant adaptation to you"
            visualHeight="h-[22.25rem]"
            visual={<PlanVisual />}
          />
          <BentoCard
            title="Track Every Part of Your Progress"
            description="Every area of your health tracked on its own, so you always know exactly what is improving"
            descriptionClass="max-w-[27.5rem]"
            visualHeight="h-[22.25rem]"
            visual={<BiomarkersVisual />}
          />
        </div>

        {/* Bento grid — row 2 (872 / 424) */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[872fr_424fr]">
          <BentoCard
            title="Meet your AI Health Architect"
            description="Health Architect is Optimability's AI advisor, trained on your biomarkers, meals, and recovery data. Ask anything and get answers built around you"
            descriptionClass="max-w-[24rem]"
            visualHeight="h-[24.75rem]"
            visual={<ArchitectVisual />}
          />
          <BentoCard
            title="Connect Your Wearable"
            description="Our app syncs with your Whoop, Garmin, or Apple Watch automatically"
            descriptionClass="max-w-[16.5rem]"
            visualHeight="h-[24.75rem]"
            visual={<WearableVisual />}
          />
        </div>
      </div>
    </section>
  );
}
