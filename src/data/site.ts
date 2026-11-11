// Single source for profile facts and project copy. Every figure here is a measured number;
// do not round up or add figures that were not measured.

export const SITE = {
  url: "https://thuannm-precio.github.io",
  name: "Thuan Nguyen",
  role: "Full-stack developer",
  location: "Ho Chi Minh City, Vietnam",
  timezone: "UTC+7",
  // The only call to action on the site.
  upworkUrl: "https://www.upwork.com/freelancers/~01de82ba87a18caa06",
  description:
    "Thuan Nguyen, full-stack developer (.NET, Vue, React, SQL Server). Working software shipped fast with Claude Code, planned, tested and checked by hand.",
};

export type ReceiptLine = { label: string; value: string };

export type CaseStudy = {
  slug: string;
  no: string;
  name: string;
  kicker: string;
  outcome: string;
  summary: string;
  receipt: ReceiptLine[];
  total: ReceiptLine;
  footnote?: string;
};

export const CASES: CaseStudy[] = [
  {
    slug: "snapprompt",
    no: "001",
    name: "SnapPrompt",
    kicker: "Desktop AI app · Windows",
    outcome: "A desktop AI app, from idea to v0.1.2 in about 16 hours of hands-on work.",
    summary:
      "Capture any region of the screen and ask Claude about it. Tray app with global shortcuts, on-device text recognition, organisation policy, auto-update and paid licensing.",
    receipt: [
      { label: "Stack", value: "Tauri 2 · Rust · React" },
      { label: "Lines of code", value: "~52,000" },
      { label: "Rust tests", value: "46" },
      { label: "Parallel worktrees", value: "9" },
      { label: "Licensing", value: "KeyWard (own)" },
    ],
    total: { label: "Hands-on work, idea → v0.1.2", value: "~16 h" },
    footnote: "Hours are measured working time, not calendar time.",
  },
  {
    slug: "keyward",
    no: "002",
    name: "KeyWard",
    kicker: "Licensing backend · Cloudflare Workers",
    outcome: "A self-hosted licensing service for my own apps, built in 3 days.",
    summary:
      "Issue, activate and verify software licenses for many products from one Cloudflare Worker. Signed offline tokens, seat limits, admin CLI and SDKs for TypeScript and Rust. It licenses SnapPrompt today.",
    receipt: [
      { label: "Stack", value: "Workers · Hono · D1" },
      { label: "Lines of code", value: "~21,000" },
      { label: "Automated tests", value: "~200" },
      { label: "SDKs", value: "TypeScript · Rust" },
      { label: "In production for", value: "SnapPrompt" },
    ],
    total: { label: "Build time", value: "3 days" },
  },
  {
    slug: "enterprise",
    no: "003",
    name: "Enterprise work",
    kicker: ".NET · Vue · Microsoft 365",
    outcome: "102 pull requests merged in 51 days on an enterprise ticketing product.",
    summary:
      "My day job: extensions and integrations for a Microsoft 365 intranet product used by enterprise and public-sector customers in the Nordics. Client code stays private; the patterns are rebuilt in public demos.",
    receipt: [
      { label: "Stack", value: ".NET · Vue · TypeScript" },
      { label: "Enterprise codebases", value: "37" },
      { label: "Integrations", value: "Workday · SAP · +4" },
      { label: "Customers", value: "Banks · retail · cities" },
      { label: "Client code shown", value: "None" },
    ],
    total: { label: "PRs merged in 51 days", value: "102" },
  },
];

export type LabItem = {
  slug: string;
  name: string;
  what: string;
  stack: string;
  image?: string;
  link?: { href: string; label: string };
};

export const LAB: LabItem[] = [
  {
    slug: "table-desk",
    name: "TableDesk",
    what: "Restaurant admin: live order board, menu, sales and staff, with optimistic updates that roll back on failure.",
    stack: "React · TypeScript",
    image: "table-desk",
    link: { href: "https://thuannm-precio.github.io/table-desk/", label: "Open the live demo" },
  },
  {
    slug: "sync-pilot",
    name: "SyncPilot",
    what: "Scheduled HR → directory sync that writes only changed records, retries transient errors and reports every run.",
    stack: ".NET · Vue 3 · SQLite",
    image: "sync-pilot",
  },
  {
    slug: "leave-flow",
    name: "LeaveFlow",
    what: "Leave requests with manager approval, team calendar and an HR export to Excel.",
    stack: "ASP.NET Core · Vue · SQL",
    image: "leave-flow",
  },
  {
    slug: "inbox-triage",
    name: "InboxTriage",
    what: "AI support inbox: tickets in any language are translated, tagged and drafted for a person to approve, with prompt-injection evals.",
    stack: "ASP.NET Core · React · Claude API",
    image: "inbox-triage",
  },
  {
    slug: "price-watch",
    name: "PriceWatch",
    what: "Scheduled scraper that cleans product data, keeps history, exports to CSV and Google Sheets and alerts on price changes.",
    stack: "Python · Playwright",
    image: "price-watch",
  },
  {
    slug: "formline-3d",
    name: "Formline 3D",
    what: "Parametric shelving configurator: drag a slider and the unit, price and cut list rebuild in 3D.",
    stack: "three.js · TypeScript",
    image: "formline-3d",
  },
  {
    slug: "mcp-inference-bridge",
    name: "MCP Inference Bridge",
    what: "MCP server that lets Claude and other AI agents call an existing image-classification API, with tests through a real MCP client.",
    stack: "Python · MCP",
  },
];

export const METHOD = [
  {
    step: "01",
    title: "Plan",
    text: "A written spec and the contracts between parts come before code. You see scope and price first.",
  },
  {
    step: "02",
    title: "Parallel",
    text: "Independent parts run in isolated Git worktrees at the same time. SnapPrompt used 9.",
  },
  {
    step: "03",
    title: "Test",
    text: "Tests ship with each feature: 46 Rust tests in SnapPrompt, about 200 in KeyWard.",
  },
  {
    step: "04",
    title: "Review",
    text: "I read and run every change before it ships. The code lands in your repository.",
  },
];
