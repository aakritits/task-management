"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { workflowSteps } from "@/lib/content";

export function HowItWorksButton() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <Play size={15} className="text-iris" />
        See how it works
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="How Novi works"
              initial={
                reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }
              }
              transition={{ duration: 0.3, ease: EASE }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-float)]"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-iris to-[#7b6ef0]">
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute inset-0 grid place-items-center">
                  <motion.span
                    className="grid h-16 w-16 place-items-center rounded-full bg-white text-iris shadow-lg"
                    animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  >
                    <Play size={22} className="translate-x-0.5" />
                  </motion.span>
                </div>
                <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90">
                  Product tour · 1:48
                </span>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white"
              >
                <X size={15} />
              </button>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Three steps to a calmer workspace
                </h3>
                <ol className="mt-4 space-y-4">
                  {workflowSteps.map((step) => (
                    <li key={step.step} className="flex gap-3">
                      <span className="font-mono text-xs font-semibold text-iris">
                        {step.step}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-sm text-ink-soft">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Button
                  as="a"
                  href="#signup"
                  size="lg"
                  className="mt-6 w-full"
                  onClick={() => setOpen(false)}
                >
                  Start free
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
