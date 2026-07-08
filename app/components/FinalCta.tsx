import Image from "next/image";
import CtaButton from "./CtaButton";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const COLUMN_ONE: Testimonial[] = [
  {
    quote:
      "“It is so different when you have fuel in your system and you're taken care of. This service is a no brainer.”",
    name: "Sam Zia",
    role: "Serial Entrepreneur",
    avatar: "/founders/avatar-sam-zia.png",
  },
  {
    quote:
      "“When you have your health dialed in, progress is inevitable. I feel flow state all the time.”",
    name: "Nathan Nazareth",
    role: "8 Figure Serial Entrepreneur",
    avatar: "/founders/avatar-nathan-nazareth.png",
  },
  {
    quote:
      "“I feel better than I have ever felt in my life. It is just unbelievable. I did not know life could be this good.”",
    name: "William Phillips",
    role: "Founder, Maverick Oil",
    avatar: "/founders/avatar-william-phillips.png",
  },
];

const COLUMN_TWO: Testimonial[] = [
  {
    quote:
      "“This is number one by far. Best service delivery I have ever gotten, and I have spent more than $100K on stuff like this.”",
    name: "Johnny Mau",
    role: "Founder, Sales Syndicate",
    avatar: "/founders/avatar-johnny-mau.png",
  },
  {
    quote:
      "“I am the strongest I have ever been and in the best shape of my entire life and it is all taken care of for me.”",
    name: "Louis Garoz",
    role: "Founder, Deal Maker",
    avatar: "/founders/avatar-louis-garoz.png",
  },
  {
    quote:
      "“So much natural dopamine, and more vital and shredded than ever.”",
    name: "Braeden Barkmeier",
    role: "Internet Money Founder",
    avatar: "/founders/avatar-braeden-barkmeier.png",
  },
];

function TestimonialCard({ quote, name, role, avatar }: Testimonial) {
  return (
    <li className="flex h-[18.25rem] flex-col justify-between rounded-xl bg-white/[0.07] p-5">
      <blockquote className="font-sans text-base leading-6 tracking-[-0.5px] text-white">
        {quote}
      </blockquote>
      <div className="flex items-center gap-4">
        {/* unoptimized: sources are already small; the optimizer's low-quality
            small rendition looks soft, the original downscaled by the browser doesn't */}
        <Image
          src={avatar}
          alt={name}
          width={44}
          height={44}
          unoptimized
          className="size-11 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-sans text-base leading-[1.375rem] text-white">
            {name}
          </p>
          <p className="mt-0.5 font-sans text-sm leading-[1.125rem] text-white/60">
            {role}
          </p>
        </div>
      </div>
    </li>
  );
}

/* Endless upward scroll: two identical lists inside a container translated
   by -50% per loop. The negative delay offsets the phase so the columns
   start staggered, as in the design. */
function MarqueeColumn({
  items,
  duration,
  delay,
}: {
  items: Testimonial[];
  duration: string;
  delay: string;
}) {
  return (
    <div className="w-[19.5rem] shrink-0">
      <div
        className="animate-marquee-y flex flex-col motion-reduce:[animation-play-state:paused]"
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        <ul className="flex flex-col gap-6 pb-6">
          {items.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </ul>
        <ul aria-hidden className="flex flex-col gap-6 pb-6">
          {items.map((t) => (
            <TestimonialCard key={`${t.name}-copy`} {...t} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FinalCta() {
  return (
    <section
      id="qualify"
      className="hero-gradient mt-[6.25rem] w-full overflow-hidden px-4"
      aria-label="Ready to let Optimability run your health"
    >
      <div className="relative mx-auto w-full max-w-[82.5rem]">
        {/* Copy + CTA */}
        <div className="flex min-h-[55rem] max-w-[38rem] flex-col justify-center py-20">
          <h2 className="font-jakarta text-[3.25rem] font-normal capitalize leading-[3.75rem] tracking-[-2px] text-white">
            Ready To Let Optimability Run Your Health
          </h2>
          <p className="mt-4 max-w-[17rem] font-sans text-base leading-[1.375rem] tracking-[-1px] text-white/80">
            Schedule a call so we can talk through your goals and see if it is
            the right fit
          </p>
          <div className="mt-6">
            <CtaButton />
          </div>
        </div>

        {/* Testimonial columns scrolling behind a bottom fade */}
        <div className="absolute inset-y-0 right-0 hidden gap-6 overflow-hidden [mask-image:linear-gradient(180deg,black_78%,transparent_100%)] lg:flex">
          <MarqueeColumn items={COLUMN_ONE} duration="55s" delay="-8.4s" />
          <MarqueeColumn items={COLUMN_TWO} duration="70s" delay="-2.7s" />
        </div>
      </div>
    </section>
  );
}
