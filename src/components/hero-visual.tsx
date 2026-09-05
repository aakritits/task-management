"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { CheckCircle2, MessageCircle, Paperclip } from "lucide-react";

type Card = {
  title: string;
  meta: string;
  tag: string;
  tagClass: string;
  people: string[];
};

const columns: { name: string; count: number; cards: Card[] }[] = [
  {
    name: "This week",
    count: 3,
    cards: [
      {
        title: "Onboarding flow polish",
        meta: "Due Thu",
        tag: "Design",
        tagClass: "bg-iris-soft text-iris",
        people: ["AK", "RM"],
      },
      {
        title: "Billing webhook retries",
        meta: "Due Fri",
        tag: "Backend",
        tagClass: "bg-amber-100 text-amber-700",
        people: ["JD"],
      },
    ],
  },
  {
    name: "In progress",
    count: 2,
    cards: [
      {
        title: "Import from Trello",
        meta: "3 subtasks",
        tag: "Feature",
        tagClass: "bg-sky-100 text-sky-700",
        people: ["RM", "AK"],
      },
    ],
  },
  {
    name: "Shipped",
    count: 8,
    cards: [
      {
        title: "Timeline shared view",
        meta: "Merged",
        tag: "Done",
        tagClass: "bg-emerald-100 text-emerald-700",
        people: ["JD", "RM"],
      },
    ],
  },
];

function Avatars({ people }: { people: string[] }) {
  return (
    <div className="flex -space-x-1.5">
      {people.map((p) => (
        <span
          key={p}
          className="grid h-5 w-5 place-items-center rounded-full border-2 border-surface bg-ink text-[9px] font-semibold text-white"
        >
          {p}
        </span>
      ))}
    </div>
  );
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-8 -top-10 bottom-0 -z-10 rounded-[2rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(90,75,218,0.16),transparent_70%)]"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        className="rounded-2xl border border-line bg-surface p-3 shadow-[var(--shadow-float)]"
      >
        <div className="flex items-center gap-2 px-2 py-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 text-xs font-medium text-ink-faint">
            Sprint 14 · Product team
          </span>
        </div>

        <div className="md:grid md:grid-cols-3 grid grid-cols-2 gap-3 rounded-xl bg-paper p-3">
          {columns.map((column, colIndex) => (
            <div key={column.name} className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-semibold text-ink-soft">
                  {column.name}
                </span>
                <span className="text-[11px] text-ink-faint">
                  {column.count}
                </span>
              </div>

              {column.cards.map((card, cardIndex) => (
                <motion.div
                  key={card.title}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE,
                    delay: 0.4 + colIndex * 0.12 + cardIndex * 0.08,
                  }}
                  className="rounded-lg border border-line bg-surface p-2.5 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[9px] font-semibold ${card.tagClass}`}
                    >
                      {card.tag}
                    </span>
                    <Avatars people={card.people} />
                  </div>
                  <p className="mt-2 text-[12px] font-medium leading-snug text-ink">
                    {card.title}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] text-ink-faint">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 size={11} />
                      {card.meta}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageCircle size={11} />2
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Paperclip size={11} />1
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 1, y: [0, -8, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0.5, delay: 1 }
            : {
                opacity: { duration: 0.5, delay: 1 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="absolute -right-3 top-6 hidden rounded-xl border border-line bg-surface px-3 py-2.5 shadow-[var(--shadow-float)] sm:-right-6 sm:block"
      >
        <p className="text-[11px] font-semibold text-ink">Timeline synced</p>
        <p className="text-[10px] text-ink-faint">3 deadlines this week</p>
      </motion.div>

      <motion.div
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 1, y: [0, 8, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0.5, delay: 1.15 }
            : {
                opacity: { duration: 0.5, delay: 1.15 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="absolute -left-3 bottom-10 hidden items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5 shadow-[var(--shadow-float)] sm:-left-8 sm:flex"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-mint/15 text-mint">
          <MessageCircle size={13} />
        </span>
        <div>
          <p className="text-[11px] font-semibold text-ink">Reply from Riya</p>
          <p className="text-[10px] text-ink-faint">on “Import from Trello”</p>
        </div>
      </motion.div>
    </div>
  );
}
