"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import spencerPhoto from "../images/image 5.png";
import samPhoto from "../images/image 6.png";

const TESTIMONIALS: {
  name: string;
  role: string;
  quote: string;
  photo: StaticImageData;
}[] = [
  {
    name: "Spencer Pawliw",
    role: "8 Figure Agency Founder",
    quote:
      "\u201CIt is a hack, having someone come in and do all this for you. I am saving so much time\u201D",
    photo: spencerPhoto,
  },
  {
    name: "Sam Zia",
    role: "Serial Entrepreneur",
    quote:
      "\u201CIt is so different when you have fuel in your system and you're taken care of. This service is a no brainer.\u201D",
    photo: samPhoto,
  },
];

/* Repeated so the carousel has a third card peeking in from the right,
   as in the design. Replace with real testimonials as they come in. */
const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`size-5 ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path
        d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhatFoundersAreSaying() {
  const [index, setIndex] = useState(0);
  const maxIndex = ITEMS.length - 2;

  return (
    <section
      id="founders-saying"
      className="w-full overflow-hidden px-4 pt-40"
      aria-label="What founders are saying"
    >
      <div className="mx-auto w-full max-w-[82.5rem]">
        {/* Heading + carousel arrows */}
        <div className="flex items-center justify-between">
          <h2 className="font-jakarta text-[3.25rem] font-normal capitalize leading-[3.75rem] tracking-[-2px] text-black">
            What Founders
            <br />
            Are Saying
          </h2>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="flex size-12 cursor-pointer items-center justify-center rounded-lg bg-surface-muted text-black transition-opacity disabled:cursor-default disabled:opacity-45"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={index === maxIndex}
              className="flex size-12 cursor-pointer items-center justify-center rounded-lg bg-surface-muted text-black transition-opacity disabled:cursor-default disabled:opacity-45"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        {/* Cards track — third card intentionally overflows to the right */}
        <div
          className="mt-12 flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(${index} * -1 * (100% + 1.5rem) / 2))` }}
        >
          {ITEMS.map(({ name, role, quote, photo }, i) => (
            <article
              key={`${name}-${i}`}
              className="flex w-full max-w-full shrink-0 flex-col gap-6 rounded-lg bg-surface-muted p-5 sm:flex-row lg:h-[27.125rem] lg:w-[40.5rem]"
            >
              {/* Photo */}
              <div className="relative h-[24.625rem] w-full shrink-0 overflow-hidden rounded-lg sm:w-[18.25rem]">
                <Image
                  src={photo}
                  alt={`${name}, ${role}`}
                  fill
                  sizes="292px"
                  className="object-cover"
                />
              </div>

              {/* Quote + author */}
              <div className="flex min-w-0 flex-1 flex-col pt-2 sm:pt-8">
                <blockquote className="font-jakarta text-2xl font-normal leading-9 tracking-[-1px] text-black">
                  {quote}
                </blockquote>
                <footer className="mt-auto pt-6">
                  <p className="font-sans text-base leading-[1.375rem] tracking-[-1px] text-black">
                    {name}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-[1.375rem] tracking-[-0.5px] text-black/60">
                    {role}
                  </p>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
