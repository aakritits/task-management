# Novi — Landing Page

Landing page for **Novi**, a project and task management tool for small, fast moving teams.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

Requires Node 20+.

## Deploy

The project is a stock Next.js app and deploys to Vercel with no configuration:
push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new),
or run `npx vercel` from the project root.

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata
    page.tsx          section composition
    globals.css       design tokens (Tailwind v4 @theme) + keyframes
  components/
    site-header.tsx   sticky nav, collapses to a menu button under md
    hero.tsx          headline, CTAs, staggered entrance
    hero-visual.tsx   animated board mockup with floating detail cards
    logo-marquee.tsx  "switch from" strip
    features.tsx      four feature cards, scroll-reveal + hover states
    workflow.tsx      auto-advancing, clickable "how it works" walkthrough
    how-it-works-modal.tsx   dialog opened by the hero's secondary CTA
    cta.tsx           closing conversion band with email capture
    site-footer.tsx   link groups, newsletter signup, social icons, legal row
    reveal.tsx        small scroll-into-view wrapper
    ui/               button, container, logo primitives
  lib/
    content.ts        nav links, features, workflow steps, footer groups
    cx.ts             className joiner
    motion.ts         shared easing curve
```

## Notes on the build

See [NOTES.md](./NOTES.md) for the design and technical decisions.
