export default function CtaButton() {
  return (
    <a
      href="#qualify"
      className="flex h-12 w-fit items-center gap-3.5 rounded-lg bg-white pl-4 pr-1.5"
    >
      <span className="font-sans text-base whitespace-nowrap text-brand-navy">
        See If You Qualify
      </span>
      <span className="cta-gradient flex size-9 shrink-0 items-center justify-center rounded-md">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 12h13M12.5 6l6 6-6 6"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
