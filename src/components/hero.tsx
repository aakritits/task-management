"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero-visual";
import { HowItWorksButton } from "@/components/how-it-works-modal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(27,27,37,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(27,27,37,0.035)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <motion.div
            variants={reduceMotion ? undefined : container}
            initial={reduceMotion ? undefined : "hidden"}
            animate={reduceMotion ? undefined : "show"}
          >
            <motion.a
              variants={item}
              href="#changelog"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft transition-colors hover:border-line-strong"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              New — shared timeline view
              <ArrowRight size={12} />
            </motion.a>

            <motion.h1
              variants={item}
              className="font-display mt-5 text-[2.5rem] font-semibold leading-[1.05] text-ink sm:text-6xl"
            >
              Run your team without the tab switching.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base text-ink-soft sm:text-lg"
            >
              Novi brings tasks, docs, and conversations into one calm workspace
              built for small, fast moving teams.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button as="a" href="#signup" size="lg">
                Start free
                <ArrowRight size={16} />
              </Button>
              <HowItWorksButton />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 text-xs text-ink-faint"
            >
              Free for up to 5 people · No credit card · Cancel anytime
            </motion.p>
          </motion.div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
