"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { features } from "@/lib/content";

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-iris">Everything in one place</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-[2.5rem] sm:leading-[1.1]">
            The parts of your day that used to live in five tabs
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Novi keeps planning, discussion, and delivery in a single view, so
            small teams spend less time keeping tools in sync.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: EASE,
                }}
                className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-card)] sm:p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-iris-soft text-iris transition-colors duration-300 group-hover:bg-iris group-hover:text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
