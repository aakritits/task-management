import { cx } from "@/lib/cx";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cx("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-lg bg-iris text-white"
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 12.5V3.5L8 8l5-4.5v9"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-[1.15rem] font-semibold tracking-tight text-ink">
        Novi
      </span>
    </span>
  );
}
