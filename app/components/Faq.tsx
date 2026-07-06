"use client";

import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is Optimability?",
    answer:
      "Optimability is a done-for-you health optimization service. We combine lab testing, wearable data, and a dedicated team that plans your nutrition, training, and recovery — so you perform at your best without managing any of it yourself.",
  },
  {
    question: "Is this just lab testing?",
    answer:
      "No. Labs are only the starting point. We turn your results into a complete plan — meals, training, supplements, and habits — and our team keeps adjusting it as your data changes.",
  },
  {
    question: "Do I have to manage the app myself?",
    answer:
      "No. Your team runs everything behind the scenes and keeps your plan up to date. You just follow simple daily guidance and watch your progress.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "You'll book a short intro call so we can talk through your goals and see if it is the right fit. If it is, we schedule your labs and onboarding within days.",
  },
  {
    question: "Does this replace my doctor or trainer?",
    answer:
      "No — we work alongside them. We handle the day-to-day optimization, coordinate with your existing doctor or trainer, and flag anything that needs medical attention.",
  },
  {
    question: "What makes this different from wearables or trackers?",
    answer:
      "Trackers give you data; Optimability gives you outcomes. We combine your wearable data with lab work and a human team that actually implements the changes for you.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`size-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="w-full px-4 py-[6.25rem]"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto flex w-full max-w-[82.5rem] flex-col gap-12 lg:flex-row lg:justify-between">
        <h2 className="font-jakarta text-[3.25rem] font-normal capitalize leading-[3.75rem] tracking-[-2px] text-black">
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="flex w-full flex-col gap-6 lg:max-w-[40.5rem]">
          {FAQS.map(({ question, answer }, i) => {
            const open = openIndex === i;
            return (
              <div key={question} className="rounded-2xl bg-surface-muted">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex h-16 w-full cursor-pointer items-center justify-between gap-4 pl-6 pr-2.5 text-left"
                >
                  <span className="font-sans text-base tracking-[-0.5px] text-black">
                    {question}
                  </span>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-black">
                    <ChevronIcon open={open} />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 font-sans text-base leading-[1.375rem] tracking-[-0.5px] text-black/70">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
