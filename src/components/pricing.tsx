"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { pricingPlans } from "@/lib/content";
import { cx } from "@/lib/cx";

export function Pricing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-y border-line bg-surface py-20 sm:py-28"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-iris">Pricing</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-[2.5rem] sm:leading-[1.1]">
            Simple pricing that grows with your team
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Start free. Upgrade only when your team actually needs the extra
            room.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
              className={cx(
                "relative flex flex-col rounded-2xl border p-6 sm:p-7",
                plan.highlighted
                  ? "border-iris bg-ink text-white shadow-[var(--shadow-float)] lg:-translate-y-3"
                  : "border-line bg-paper",
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-iris px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}

              <h3
                className={cx(
                  "text-lg font-semibold",
                  plan.highlighted ? "text-white" : "text-ink",
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cx(
                  "mt-2 text-sm",
                  plan.highlighted ? "text-white/70" : "text-ink-soft",
                )}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className={cx(
                    "font-display text-4xl font-semibold",
                    plan.highlighted ? "text-white" : "text-ink",
                  )}
                >
                  {plan.price}
                </span>
              </div>
              <p
                className={cx(
                  "mt-1 text-xs",
                  plan.highlighted ? "text-white/60" : "text-ink-faint",
                )}
              >
                {plan.period}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {plan.features.map((item) => (
                  <li
                    key={item}
                    className={cx(
                      "flex items-start gap-2.5 text-sm",
                      plan.highlighted ? "text-white/85" : "text-ink-soft",
                    )}
                  >
                    <Check
                      size={16}
                      className={cx(
                        "mt-0.5 shrink-0",
                        plan.highlighted ? "text-mint" : "text-iris",
                      )}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href="#signup"
                size="lg"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
