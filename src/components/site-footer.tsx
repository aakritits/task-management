"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footerGroups } from "@/lib/content";

type IconProps = { className?: string };

const socials: { label: string; href: string; Icon: (p: IconProps) => React.ReactElement }[] = [
  {
    label: "X",
    href: "#",
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56v-2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 0 1 6 0c2.29-1.53 3.3-1.21 3.3-1.21.66 1.66.24 2.88.12 3.18.77.83 1.23 1.88 1.23 3.17 0 4.53-2.8 5.53-5.48 5.82.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.83.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.91 24 12 24 12s0-3.91-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              One calm workspace for tasks, docs, and conversations. Built for
              small, fast moving teams.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
              className="mt-6 flex max-w-sm gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email for product updates"
                aria-label="Email for product updates"
                className="h-10 flex-1 rounded-full border border-line-strong bg-paper px-4 text-sm text-ink placeholder:text-ink-faint focus:border-ink/30 focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-full bg-iris px-4 text-sm font-medium text-white transition-colors hover:bg-iris-hover"
              >
                {done ? "Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Novi Labs, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-ink-faint transition-colors hover:text-ink"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-ink-faint transition-colors hover:text-ink"
            >
              Terms
            </a>
            <div className="flex items-center gap-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-full text-ink-faint transition-colors hover:bg-ink/[0.04] hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
