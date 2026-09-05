import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Features } from "@/components/features";
import { Workflow } from "@/components/workflow";
import { Pricing } from "@/components/pricing";
import { Changelog } from "@/components/changelog";
import { Cta } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="top" className="flex-1">
        <Hero />
        <LogoMarquee />
        <Features />
        <Workflow />
        <Pricing />
        <Changelog />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
