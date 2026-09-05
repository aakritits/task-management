"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { changelogEntries } from "@/lib/content";
import { cx } from "@/lib/cx";

const tagStyles: Record<string, string> = {
  New: "bg-iris-soft text-iris",
  Improved: "bg-mint/12 text-mint",
  Fixed: "bg-ink/[0.06] text-ink-soft",
};

const dotStyles: Record<string, string> = {
  New: "bg-iris",
  Improved: "bg-mint",
  Fixed: "bg-ink-faint",
};

export function Changelog() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="changelog" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-iris">Changelog</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-[2.5rem] sm:leading-[1.1]">
            What shipped recently
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            We ship in small pieces, every couple of weeks. Here is the recent
            history.
          </p>
        </Reveal>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-12 max-w-2xl sm:hidden">
          <div
            aria-hidden
            className="absolute left-[5px] top-2 bottom-2 w-px bg-line"
          />
          <div className="flex flex-col gap-10">
            {changelogEntries.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
                className="relative pl-8"
              >
                <span
                  className={cx(
                    "absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-paper",
                    dotStyles[entry.tag],
                  )}
                />

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-ink-faint">
                    {entry.date}
                  </span>
                  <span
                    className={cx(
                      "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      tagStyles[entry.tag],
                    )}
                  >
                    {entry.tag}
                  </span>
                  <span className="text-xs font-medium text-ink-faint">
                    v{entry.version}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {entry.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {entry.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-16 hidden sm:grid sm:grid-cols-4 sm:gap-8">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[5px] h-px bg-line"
          />
          {changelogEntries.map((entry, index) => (
            <motion.div
              key={entry.version}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
              className="relative pt-8"
            >
              <span
                className={cx(
                  "absolute left-0 top-0 h-[11px] w-[11px] rounded-full ring-4 ring-paper",
                  dotStyles[entry.tag],
                )}
              />

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-ink-faint">
                  {entry.date}
                </span>
                <span className="text-xs font-medium text-ink-faint">
                  v{entry.version}
                </span>
              </div>
              <span
                className={cx(
                  "mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold",
                  tagStyles[entry.tag],
                )}
              >
                {entry.tag}
              </span>

              <h3 className="mt-3 text-base font-semibold text-ink">
                {entry.title}
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {entry.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
