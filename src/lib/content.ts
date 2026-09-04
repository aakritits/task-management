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
