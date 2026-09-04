# Design & technical notes

## Direction

The brief asks for something "a small team would trust" and a "calm workspace."
I took *calm* literally as the design constraint:

- **Warm off-white paper background**, near-black ink, and a single restrained
  accent (`iris`, a muted violet) with a secondary `mint` used only for small
  status cues. No gradients on content, no heavy shadows except where an element
  is meant to float above the page.
- **One display typeface** (Bricolage Grotesque) for headings, Geist for body and
  Geist Mono for small UI labels. Tight tracking on headings, generous line
  spacing on body copy.
- Motion is present everywhere but low amplitude — short travel, soft
  `cubic-bezier(0.16, 1, 0.3, 1)` easing, nothing bouncing.

## Sections

- **Hero** — required nav + headline + supporting line + two CTAs + a visual.
  The visual is a real-looking sprint board rendered in DOM (not an image) so it
  stays crisp at any size, with two floating cards that drift on a slow loop to
  suggest live activity.
- **Logo marquee** — a light "teams switch from" strip. CSS-only infinite scroll,
  paused under `prefers-reduced-motion`.
- **Features** — heading + supporting line + four cards, each with a Lucide icon,
  title, and one or two sentences, straight from the suggested list. Cards
  reveal on scroll with a stagger and lift on hover; the icon tile inverts.
- **Workflow** ("How it works") — an extra interactive section. Three steps
  auto-advance on a 5s timer with a progress bar, pause on hover, and are
  clickable. The right panel animates a small illustration per step (import
  rows, a timeline, a resolved thread).
- **Modal** — the hero's "See how it works" opens an accessible dialog
  (`role="dialog"`, `aria-modal`, Escape to close, scroll lock, backdrop click).
- **Closing CTA** — conversion band with an email field and success state.
- **Footer** — Novi name + tagline, four link groups (Product / Company /
  Resources / Legal), newsletter signup with button, social icons (inline SVG
  brand marks), and a bottom row with copyright + Privacy/Terms.

## Responsiveness

- Mobile-first Tailwind. Single column on phones; two-column hero, features grid,
  and workflow open up at `lg`.
- Nav collapses to a menu button under `md` with an animated height transition
  and body scroll lock while open.
- The hero board scales its own grid; floating side cards are hidden below `sm`
  where they would overlap.
- Type and spacing step up at `sm`/`lg` rather than scaling fluidly, to keep
  line lengths controlled.

## Accessibility

- `prefers-reduced-motion` is honoured — `useReducedMotion()` disables entrance
  and looping animation, and the marquee/progress animations stop.
- Skip link, focus-visible rings on all interactive elements, `aria-label`s on
  icon-only buttons, labelled form inputs, semantic landmarks.

## Technical choices

- **Next.js App Router, fully static.** The page prerenders; client components
  are scoped to the pieces that actually need interactivity or `motion`.
- **Tailwind v4** with the CSS-first `@theme` block — design tokens (colours,
  fonts, shadows, easing) live in `globals.css` and are the single source of
  truth.
- **Motion** (`motion/react`) for animation. One shared easing constant in
  `lib/motion.ts` keeps timing consistent.
- **Content is data.** Nav, features, workflow steps, and footer groups live in
  `lib/content.ts` so copy changes never touch markup.
- Icons from `lucide-react`; social marks are inline SVG since the library
  dropped brand icons.

## Trade-offs / what I'd do next

- Copy and logos are placeholder. The "product tour" modal shows a poster frame,
  not a real video.
- Forms are client-only with an optimistic success state; no backend.
- With more time: real OG image, a pricing section to match the nav link,
  light/dark theme, and Playwright visual-regression coverage.
