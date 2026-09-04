"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="signup" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-ink px-6 py-14 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_20%_10%,#5a4bda,transparent_45%),radial-gradient(circle_at_80%_90%,#0fb5a6,transparent_40%)]"
            />
            <h2 className="font-display relative text-3xl font-semibold text-white sm:text-[2.5rem] sm:leading-[1.1]">
              Give your team one calm place to work
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-[0.95rem] text-white/70">
              Start free for up to 5 people. Bring your boards over in minutes.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@team.com"
                aria-label="Work email"
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
              />
              <Button type="submit" size="lg" className="shrink-0">
                {submitted ? (
                  <>
                    <Check size={16} /> Check your inbox
                  </>
                ) : (
                  <>
                    Start free <ArrowRight size={16} />
                  </>
                )}
              </Button>
            </form>

            <motion.p
              className="relative mt-4 text-xs text-white/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              No credit card required
            </motion.p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
