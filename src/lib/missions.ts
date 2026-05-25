import type { Mission } from "@/types/mission";

export const missions: Mission[] = [
  {
    slug: "sass",
    number: "M_01",
    title: "Share &",
    titleItalic: "Swap Shop",
    year: "2026",
    context: "RMIT Programming Project · Real client work",
    status: "featured",
    difficulty: 5,
    summary:
      "A full-stack website for a Melbourne pop-up swap collective. Events sync automatically from the client's existing Humanitix ticketing account — zero manual website updates required, ever.",
    problem:
      "A non-technical community team needed a polished website where event listings stayed accurate without them touching code. They already used Humanitix for ticketing — the site had to be the single source of truth without becoming a maintenance burden.",
    approach:
      "Three phases before any production code: a platform comparison report (WordPress vs Squarespace vs Wix Studio with Velo), then complete UX wireframes for all 8 pages with a Figma design token system, then the build.",
    steps: [
      {
        key: "API integration",
        body: "Server-side .jsw backend authenticating to Humanitix's REST API and normalising messy responses (locations as strings or objects, recurring events, missing fields) through five helper functions.",
      },
      {
        key: "Security",
        body: "Caught a hardcoded API key in the source mid-development. Regenerated it on Humanitix and moved credentials into Wix Secrets Manager — key never touches the browser, never appears in any file.",
      },
      {
        key: "Performance",
        body: "10-second TTL in-memory cache plus promise deduplication, so concurrent page loads share one in-flight API request rather than hammering Humanitix.",
      },
      {
        key: "Defensive coding",
        body: "Every $w() DOM call wrapped in a safeSet() guard, so missing elements never throw and stop the page render.",
      },
      {
        key: "Debugging",
        body: "Found a silent filter where e.published === true excluded every event (the field doesn't exist in the public API, so the comparison was always false). Removed it, added stage-by-stage console tracing.",
      },
    ],
    lesson: {
      title: "What it taught me",
      body: "Silent failures are harder to debug than thrown errors. The published filter never threw — it just quietly returned an empty array. Stage tracing through the data pipeline turned a day's hunt into a five-minute fix. Also: an API key hardcoded 'just for testing' is a compromised key. Same time, no risk — use the secrets manager from line one.",
    },
    stats: [
      { value: "29h", label: "logged" },
      { value: "08", label: "pages" },
      { value: "04", label: "bugs" },
      { value: "01", label: "live API" },
    ],
    stack: [
      "JavaScript (ES6+)",
      "Velo by Wix (.jsw)",
      "REST API",
      "Wix Secrets Manager",
      "Figma · Tokens Studio",
      "async / await",
    ],
    featuredOnHome: true,
  },
  {
    slug: "devops",
    number: "M_02",
    title: "DevOps",
    titleItalic: "Pipeline",
    year: "2024",
    context: "RMIT — Systems Deployment & Operations",
    status: "distinction",
    difficulty: 4,
    summary:
      "Two assignments, one continuous theme — take a working application from 'deploys manually if you remember the steps' to 'anyone on the team can ship it with one PR merge.'",
    problem:
      "Manual deployments are slow, error-prone, and impossible to audit. The unit's two assignments wanted a working CI/CD pipeline and a fully Infrastructure-as-Code deployment story for two different Node.js apps — one backed by MongoDB, one by PostgreSQL.",
    approach:
      "Treat the pipeline like a product in its own right: branch protections, automated tests on every pull request, and a deployment path defined entirely in version-controlled code, so it's reproducible from a clean machine.",
    steps: [
      {
        key: "CI pipeline",
        body: "Built a GitHub Actions workflow for a Node.js / Express / MongoDB app under a GitHub Flow branching strategy. Every PR triggers install, lint, and test jobs before merge to main is allowed.",
      },
      {
        key: "Provisioning",
        body: "Wrote Terraform configs to spin up AWS EC2 instances and the surrounding network resources — versioned, reviewed via PR, destroyable with one command.",
      },
      {
        key: "Configuration",
        body: "Ansible playbooks handle the post-provision side: installing Docker, pulling images, wiring environment variables, starting the Node.js + PostgreSQL service.",
      },
      {
        key: "Containers",
        body: "Dockerised the apps so the developer environment, the CI runner, and the AWS host all see the same runtime.",
      },
    ],
    lesson: {
      title: "What it taught me",
      body: "Infrastructure-as-Code is the difference between 'it deploys' and 'anyone can deploy it.' The first time you destroy your environment and rebuild it from a clean clone in fifteen minutes is genuinely satisfying. Also: separation of concerns matters here — Terraform for what exists, Ansible for what's installed on it, Docker for what runs inside it. Mixing those responsibilities gets messy quickly.",
    },
    stats: [
      { value: "02", label: "apps" },
      { value: "04", label: "tools" },
      { value: "DI", label: "grade" },
    ],
    stack: [
      "AWS EC2",
      "Terraform",
      "Ansible",
      "Docker",
      "GitHub Actions",
      "Node.js · MongoDB · PostgreSQL",
    ],
    featuredOnHome: true,
  },
  {
    slug: "grad-tracker",
    number: "M_03",
    title: "Grad Job",
    titleItalic: "Tracker",
    year: "2026",
    context: "Personal project · Live tool",
    status: "live",
    difficulty: 3,
    summary:
      "A tool I built for my own graduate job hunt — because a spreadsheet wasn't cutting it. A focused application tracker you can actually use right now, in your browser.",
    problem:
      "Tracking dozens of applications across stages — applied, screening, interview — in a spreadsheet is clumsy and easy to let slip. I wanted something purpose-built that I'd actually open every day during the hunt.",
    approach:
      "Build it deliberately without a framework — clean state management, DOM rendering, and client-side persistence handled directly. Zero dependencies so it loads instantly and nothing can break.",
    steps: [
      {
        key: "Pipeline board",
        body: "Six-stage kanban — Wishlist → Applied → Screening → Interview → Offer / Rejected — with one-click stage moves.",
      },
      {
        key: "Live stats",
        body: "Total tracked, active applications, and a computed interview-rate metric that updates as the data changes.",
      },
      {
        key: "Persistence",
        body: "Everything saves to localStorage — survives refreshes, no account, no backend, data stays on the user's device.",
      },
      {
        key: "Search & filter",
        body: "Live text search across company / role / location, plus stage filtering, with event-delegated rendering.",
      },
    ],
    lesson: {
      title: "Why no framework",
      body: "Reaching for React isn't always the answer. Built directly, this loads instantly, has zero dependencies, and nothing in the supply chain can break it. Knowing when not to add a framework is its own skill.",
    },
    stats: [
      { value: "06", label: "stages" },
      { value: "00", label: "deps" },
      { value: "LIVE", label: "try it" },
    ],
    stack: [
      "Vanilla JavaScript",
      "localStorage",
      "Zero dependencies",
      "Responsive CSS",
      "Event delegation",
    ],
    links: [
      {
        label: "Launch the tool",
        href: "https://imamnazar.github.io/grad-job-tracker/",
        primary: true,
      },
      { label: "Source on GitHub", href: "https://github.com/ImamNazar/grad-job-tracker" },
    ],
    featuredOnHome: true,
  },
  {
    slug: "mkcare",
    number: "M_04",
    title: "Mk",
    titleItalic: "Care",
    year: "2022",
    context: "Higher Diploma Capstone · ICBT",
    status: "capstone",
    difficulty: 4,
    summary:
      "A responsive hospital management web application with three role-based portals — patient, doctor, administrator — sharing a single MySQL database. Each role gets the views and permissions it needs and nothing it doesn't.",
    problem:
      "A hospital needs three completely different views of the same data: patients see their appointments and prescriptions, doctors see their patient list and clinical notes, administrators see everyone. Building three separate apps duplicates effort; a single app without role separation leaks data.",
    approach:
      "One PHP backend, one MySQL schema, three role-locked frontends. Authentication gates which portal you see; permission checks live in the data layer, not just the UI.",
    steps: [
      {
        key: "Schema",
        body: "Designed a relational MySQL schema covering patients, doctors, appointments, prescriptions, and admin records. Foreign keys enforce referential integrity.",
      },
      {
        key: "Auth & roles",
        body: "Session-based authentication routes users to one of three portals based on role flag. Server-side permission checks on every protected route.",
      },
      {
        key: "Portals",
        body: "Patient portal — view appointments, prescriptions, medical history. Doctor portal — patient list, appointment scheduling, clinical notes. Admin portal — user management, system-wide oversight.",
      },
      {
        key: "Responsive",
        body: "Fully responsive layouts so doctors can review patient records on tablet during rounds, not just at a desktop.",
      },
    ],
    stats: [
      { value: "03", label: "portals" },
      { value: "PHP", label: "stack" },
      { value: "SQL", label: "db" },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    links: [{ label: "Source on GitHub", href: "https://github.com/ImamNazar/MKCare_webApp" }],
    featuredOnHome: true,
  },
  {
    slug: "sky-ticketing",
    number: "M_05",
    title: "SKY",
    titleItalic: "Ticketing",
    year: "2024",
    context: "Frontend contribution at INVECT TECH",
    status: "professional",
    difficulty: 3,
    summary:
      "A single-page React application for a real-time ticketing agency — Google Maps integration, GSAP-powered animations, EmailJS-backed contact form, and a full responsive component library stitched together with React Router.",
    problem:
      "A ticketing agency needed a live marketing site with rich animations, location features, and a working contact pipeline — without engaging a full agency. The brief: production-quality frontend, fast, on a tight timeline.",
    approach:
      "Component-driven build with React + React Router. GSAP for the section reveals and scroll-triggered moments. Google Maps for the office locator. EmailJS so the contact form works without provisioning a backend.",
    steps: [
      {
        key: "Components",
        body: "Built and shipped reusable React components — hero, service cards, testimonials, map embed, contact form — each with its own animation timeline.",
      },
      {
        key: "Routing",
        body: "React Router for client-side route transitions between pages, with section anchors for in-page navigation.",
      },
      {
        key: "Motion",
        body: "GSAP timelines for the reveal animations and one or two attention-grabbing scroll-driven moments.",
      },
      {
        key: "Integrations",
        body: "Google Maps API for the office locator; EmailJS for the contact form so submissions deliver to the team without server infra.",
      },
    ],
    stats: [
      { value: "REACT", label: "stack" },
      { value: "GSAP", label: "motion" },
      { value: "LIVE", label: "site" },
    ],
    stack: ["React.js", "React Router", "Google Maps API", "GSAP", "EmailJS"],
    links: [{ label: "Live site", href: "https://sky-ticketing.com/", primary: true }],
    featuredOnHome: true,
  },
  {
    slug: "elegant-wardrobe",
    number: "M_06",
    title: "Elegant",
    titleItalic: "Wardrobe",
    year: "2022",
    context: "Full-stack e-commerce build",
    status: "professional",
    difficulty: 3,
    summary:
      "A complete responsive online clothing store — customer browsing, cart, checkout, registration, plus a full admin panel for orders, users, and inventory across men / women / kids categories. CRUD operations all the way down.",
    problem:
      "Build a working e-commerce site end-to-end as a learning exercise: storefront, account flow, cart, checkout, and an admin panel for managing the catalogue and orders. Not a tutorial follow-along — designed and built from scratch.",
    approach:
      "Server-rendered PHP storefront backed by MySQL. Session-based cart. Role-flag-locked admin section sharing the same database. Three product taxonomies (men / women / kids) handled by a single category-aware product model.",
    steps: [
      {
        key: "Storefront",
        body: "Category browsing, product detail pages, search, registration, login, cart, and checkout — all responsive across mobile and desktop.",
      },
      {
        key: "Admin panel",
        body: "CRUD on products, users, and orders. Inventory updates flow through to the storefront immediately.",
      },
      {
        key: "Schema",
        body: "Relational MySQL schema with products, categories, users, orders, and order lines. Foreign keys; soft delete on critical tables.",
      },
    ],
    stats: [
      { value: "FULL", label: "stack" },
      { value: "CRUD", label: "admin" },
      { value: "03", label: "cats" },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    links: [
      { label: "Source on GitHub", href: "https://github.com/ImamNazar/ElegantWardrobe_webApp" },
    ],
    featuredOnHome: true,
  },
  {
    slug: "qa-suite",
    number: "M_07",
    title: "Software Testing",
    titleItalic: "Suite",
    year: "2025",
    context: "RMIT — Software Testing",
    status: "archived",
    difficulty: 3,
    summary:
      "Three structured assignments covering the QA toolchain end-to-end: test case planning and execution, JUnit unit testing with static code analysis on a Java codebase via formal inspection checklists, and automated UI / load / BDD testing with Selenium, JMeter, and Cucumber.",
    problem:
      "Most developers can write tests; fewer can plan them, fewer still can read someone else's code and find the bugs systematically. The unit asked for all three.",
    approach:
      "Treat each assignment as a different angle on the same skill: writing tests, finding faults manually, and automating the whole thing.",
    steps: [
      {
        key: "Planning",
        body: "Wrote test plans and structured test cases against requirement specs, then executed them and logged outcomes.",
      },
      {
        key: "Unit + static",
        body: "JUnit unit tests on a Java codebase plus a formal code inspection using a checklist — caught defects the unit tests couldn't see.",
      },
      {
        key: "Automation",
        body: "Selenium for UI flows, JMeter for load profile, Cucumber for behaviour-driven tests written against acceptance criteria.",
      },
    ],
    stats: [
      { value: "03", label: "assignments" },
      { value: "04", label: "tools" },
      { value: "QA", label: "focus" },
    ],
    stack: ["JUnit", "Selenium", "JMeter", "Cucumber", "Static analysis"],
    featuredOnHome: false,
  },
];

export function getMission(slug: string): Mission | undefined {
  return missions.find((m) => m.slug === slug);
}

export function getHomeMissions(): Mission[] {
  return missions.filter((m) => m.featuredOnHome);
}
