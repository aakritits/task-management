"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { workflowSteps } from "@/lib/content";
import { cx } from "@/lib/cx";

const AUTO_ADVANCE_MS = 5000;

export function Workflow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || reduceMotion) return;
    timer.current = setInterval(() => {
      setActive((current) => (current + 1) % workflowSteps.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduceMotion]);

  return (
    <section
      id="workflow"
      className="scroll-mt-20 border-y border-line bg-surface py-20 sm:py-28"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-iris">How it works</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-[2.5rem] sm:leading-[1.1]">
            Set up in an afternoon, not a quarter
          </h2>
        </Reveal>

        <div
          className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ul className="flex flex-col gap-2">
            {workflowSteps.map((step, index) => {
              const isActive = index === active;
              return (
                <li key={step.step}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={cx(
                      "relative w-full overflow-hidden rounded-xl border p-5 text-left transition-colors duration-300",
                      isActive
                        ? "border-line-strong bg-paper"
                        : "border-transparent hover:bg-paper/60",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cx(
                          "grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold transition-colors",
                          isActive
                            ? "bg-iris text-white"
                            : "bg-iris-soft text-iris",
                        )}
                      >
                        {isActive ? <Check size={14} /> : step.step}
                      </span>
                      <span className="font-medium text-ink">{step.title}</span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="overflow-hidden text-sm text-ink-soft"
                        >
                          <span className="block pl-10 pt-2">
                            {step.description}
                          </span>
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {isActive && !paused && !reduceMotion && (
                      <motion.span
                        key={active}
                        className="absolute bottom-0 left-0 h-0.5 bg-iris"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: AUTO_ADVANCE_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative min-h-[280px] rounded-2xl border border-line bg-paper p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <WorkflowPanel index={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorkflowPanel({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="space-y-2.5">
        <p className="text-xs font-semibold text-ink-faint">Importing 3 boards</p>
        {["Trello — Marketing", "Asana — Product", "Sheet — Q3 roadmap"].map(
          (row, i) => (
            <motion.div
              key={row}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.15 }}
              className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2.5 text-sm"
            >
              <span className="text-ink">{row}</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-mint">
                <Check size={13} /> Mapped
              </span>
            </motion.div>
          ),
        )}
      </div>
    );
  }

  if (index === 1) {
    const bars = [
      { label: "Design review", left: 0, width: 45 },
      { label: "Build import", left: 20, width: 60 },
      { label: "Beta invites", left: 55, width: 40 },
    ];
    return (
      <div className="space-y-3">
        <p className="text-xs font-semibold text-ink-faint">Week of Sep 8</p>
        {bars.map((bar, i) => (
          <div key={bar.label} className="text-sm">
            <span className="text-ink">{bar.label}</span>
            <div className="mt-1 h-6 rounded-md bg-line/60">
              <motion.div
                className="h-full rounded-md bg-iris/80"
                style={{ marginLeft: `${bar.left}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${bar.width}%` }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-ink-faint">
        Thread · Import from Trello
      </p>
      {[
        { who: "Riya", text: "Statuses mapped cleanly. Shipping to beta today." },
        { who: "Jordan", text: "Nice. I will update the changelog entry." },
      ].map((msg, i) => (
        <motion.div
          key={msg.who}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.2 }}
          className="rounded-lg border border-line bg-surface p-3"
        >
          <p className="text-xs font-semibold text-ink">{msg.who}</p>
          <p className="mt-1 text-sm text-ink-soft">{msg.text}</p>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="inline-flex items-center gap-1.5 rounded-full bg-mint/12 px-2.5 py-1 text-xs font-medium text-mint"
      >
        <Check size={12} /> Marked shipped
      </motion.div>
    </div>
  );
}
