import type { LucideIcon } from "lucide-react";
import {
  KanbanSquare,
  MessagesSquare,
  CalendarRange,
  ArrowLeftRight,
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: KanbanSquare,
    title: "Boards that move at your speed",
    description:
      "Plan sprints and track tasks without hunting through spreadsheets. Drag a card, set an owner, ship it.",
  },
  {
    icon: MessagesSquare,
    title: "Threads, not another inbox",
    description:
      "Keep project conversations attached to the work itself, so context never gets lost in a chat channel.",
  },
  {
    icon: CalendarRange,
    title: "One timeline for the whole team",
    description:
      "Every deadline and milestone in one shared view. See what is due, what slipped, and what is next.",
  },
  {
    icon: ArrowLeftRight,
    title: "Works the way you already do",
    description:
      "Import from Trello, Asana, or a spreadsheet in minutes. Your team keeps its habits, not its busywork.",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Free",
    period: "for up to 5 people",
    description: "Everything a small team needs to get off spreadsheets.",
    features: [
      "Unlimited boards",
      "Shared timeline",
      "Task threads",
      "Import from Trello or Asana",
    ],
    cta: "Start free",
  },
  {
    name: "Team",
    price: "$9",
    period: "per person / month",
    description: "For teams ready to drop the status meeting.",
    features: [
      "Everything in Starter",
      "Unlimited members",
      "Timeline dependencies",
      "Guest collaborators",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$19",
    period: "per person / month",
    description: "For organizations that need control at scale.",
    features: [
      "Everything in Team",
      "SSO and SCIM",
      "Audit log",
      "Custom roles and permissions",
      "Dedicated onboarding",
    ],
    cta: "Talk to sales",
  },
];

export type ChangelogEntry = {
  version: string;
  date: string;
  tag: "New" | "Improved" | "Fixed";
  title: string;
  items: string[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "2.4",
    date: "Aug 2026",
    tag: "New",
    title: "Timeline dependencies",
    items: [
      "Link tasks so moving one shifts everything downstream",
      "Warn when a dependency would miss its deadline",
    ],
  },
  {
    version: "2.3",
    date: "Jun 2026",
    tag: "Improved",
    title: "Faster imports",
    items: [
      "Trello and Asana imports now run in the background",
      "Status and owner mapping is editable before you confirm",
    ],
  },
  {
    version: "2.2",
    date: "Apr 2026",
    tag: "New",
    title: "Guest collaborators",
    items: [
      "Invite clients or contractors to a single board",
      "Guests see only the tasks they are tagged on",
    ],
  },
  {
    version: "2.1",
    date: "Feb 2026",
    tag: "Fixed",
    title: "Reliability pass",
    items: [
      "Fixed threads occasionally missing new replies in real time",
      "Fixed timeline drag on Firefox misplacing task dates",
    ],
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Bring the work in",
    description:
      "Import boards from Trello or Asana, or start from a template. Novi maps statuses and owners for you.",
  },
  {
    step: "02",
    title: "Plan the week together",
    description:
      "Drop tasks onto the timeline, assign owners, and let everyone see the same plan without a status meeting.",
  },
  {
    step: "03",
    title: "Ship and review",
    description:
      "Conversations, docs, and decisions stay attached to each task, so the next sprint starts with context.",
  },
];

export const footerGroups = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#workflow" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#changelog" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Guides", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
];
