function ClipboardCheckIcon() {
  return (
    <svg viewBox="0 0 22 24.331" fill="none" aria-hidden="true" className="h-6 w-[1.375rem]">
      <path
        d="M15.6667 2.83333C18.2042 2.84733 19.5785 2.9605 20.4745 3.8565C21.5 4.882 21.5 6.53167 21.5 9.831V16.831C21.5 20.1315 21.5 21.7812 20.4745 22.8067C19.4502 23.831 17.7993 23.831 14.5 23.831H7.5C4.20067 23.831 2.54983 23.831 1.5255 22.8067C0.5 21.78 0.5 20.1315 0.5 16.831V9.831C0.5 6.53167 0.5 4.882 1.5255 3.8565C2.4215 2.9605 3.79583 2.84733 6.33333 2.83333"
        stroke="#ffffff"
      />
      <path
        d="M7.5 13.8L9.49967 15.6667L14.5 11"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33398 2.25C6.33398 1.78587 6.51836 1.34075 6.84655 1.01256C7.17474 0.684375 7.61986 0.5 8.08398 0.5H13.9173C14.3814 0.5 14.8266 0.684375 15.1548 1.01256C15.4829 1.34075 15.6673 1.78587 15.6673 2.25V3.41667C15.6673 3.8808 15.4829 4.32591 15.1548 4.6541C14.8266 4.98229 14.3814 5.16667 13.9173 5.16667H8.08398C7.61986 5.16667 7.17474 4.98229 6.84655 4.6541C6.51836 4.32591 6.33398 3.8808 6.33398 3.41667V2.25Z"
        stroke="#ffffff"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="size-7">
      <path
        d="M24.8638 8.58368C23.8577 12.507 21.8159 16.088 18.952 18.952C16.088 21.8159 12.507 23.8577 8.58368 24.8638C5.56483 25.6322 3 23.0364 3 19.9202V18.5102C3 17.7319 3.6331 17.1073 4.4072 17.0297C5.69088 16.9021 6.95097 16.5989 8.15221 16.1287L10.2954 18.2719C13.7851 16.5991 16.5991 13.7851 18.2719 10.2954L16.1287 8.15221C16.5994 6.95104 16.9031 5.69094 17.0311 4.4072C17.1073 3.63169 17.7319 3 18.5102 3H19.9202C23.0364 3 25.6322 5.56483 24.8638 8.58368Z"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="size-7">
      <path
        d="M9.35703 22.403L19.7119 15.5177L13.964 13.7012L17.6772 5.57716L7.88912 13.4198L12.8826 14.9978L9.35703 22.403ZM10.7651 15.967L6.47574 14.6114C6.08584 14.4882 5.85894 14.2226 5.79504 13.8147C5.73114 13.4068 5.86386 13.0768 6.19321 12.8248L18.1207 3.2336C18.3348 3.06642 18.5615 2.98243 18.8009 2.98164C19.0404 2.98085 19.2668 3.06443 19.4803 3.23238C19.6938 3.40034 19.821 3.60653 19.8617 3.85096C19.9025 4.0954 19.8691 4.3377 19.7616 4.57787L16.0743 12.7298L21.2273 14.3582C21.6296 14.4854 21.8545 14.7656 21.902 15.199C21.9504 15.6326 21.7935 15.9707 21.4313 16.2134L8.89818 24.5451C8.68528 24.6853 8.46226 24.7475 8.22912 24.7317C7.99534 24.7147 7.78813 24.6235 7.60749 24.4583C7.42653 24.2941 7.31123 24.0954 7.2616 23.8624C7.21293 23.6297 7.24282 23.3934 7.35129 23.1535L10.7651 15.967Z"
        fill="#ffffff"
      />
    </svg>
  );
}

const STEPS = [
  {
    title: "We review your application",
    description: "We look at your goals and situation within 24 hours",
    descriptionClass: "max-w-[11.375rem]",
    icon: <ClipboardCheckIcon />,
  },
  {
    title: "We reach out",
    description:
      "If you are a good fit, someone from our team will contact you to schedule a call",
    descriptionClass: "max-w-[17.875rem]",
    icon: <PhoneIcon />,
  },
  {
    title: "Your program goes live",
    description: "Once approved, your team is assigned and everything starts",
    descriptionClass: "max-w-[16.875rem]",
    icon: <BoltIcon />,
  },
];

export default function AfterYouApply() {
  return (
    <section
      className="w-full px-4 pt-36"
      aria-label="What happens after you apply"
    >
      <h2 className="text-center font-jakarta text-[3.25rem] font-normal capitalize leading-[3.75rem] tracking-[-2px] text-black">
        What happens after you apply
      </h2>

      <div className="relative mx-auto mt-16 w-full max-w-[60rem]">
        {/* Connector line between the icon tiles */}
        <div
          aria-hidden
          className="absolute left-[16.667%] right-[16.667%] top-8 hidden h-px bg-linear-to-r from-brand-ocean to-brand-deep md:block"
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {STEPS.map(({ title, description, descriptionClass, icon }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="relative z-10 flex size-16 items-center justify-center rounded-lg bg-linear-to-br from-brand-deep to-brand-ocean">
                {icon}
              </div>
              <h3 className="mt-8 text-center font-sans text-xl leading-[1.375rem] tracking-[-1px] text-black">
                {title}
              </h3>
              <p
                className={`mt-4 text-center font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80 ${descriptionClass}`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
