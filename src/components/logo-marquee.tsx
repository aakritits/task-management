import { Container } from "@/components/ui/container";

const tools = ["Trello", "Asana", "Notion", "Jira", "Linear", "Sheets", "Basecamp"];

export function LogoMarquee() {
  return (
    <section className="border-y border-line bg-surface py-8">
      <Container>
        <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
          Teams switch to Novi from
        </p>
        <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-12 pr-12">
            {[...tools, ...tools].map((tool, index) => (
              <span
                key={`${tool}-${index}`}
                className="font-display text-lg font-semibold text-ink-faint"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
