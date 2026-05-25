# Mohamed Imam — Portfolio v4

Next.js 15 + TypeScript + React Three Fiber + GSAP + Lenis · modern HUD / sci-fi aesthetic
inspired by Cyberpunk 2077 and Death Stranding. Deploys as a static export to GitHub Pages.

Live at **[imamnazar.github.io](https://imamnazar.github.io/)**.

---

## Quick start

```bash
# 1. Install dependencies (Node 18.18+ required)
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To build a production static export:

```bash
npm run build
# Output goes to ./out — that's what GitHub Pages serves
```

## Project structure

```
.
├── .github/workflows/
│   └── deploy.yml           ← auto-deploy to GitHub Pages on push to main
├── public/
│   └── .nojekyll            ← disables Jekyll so Next.js _next/ folder serves
├── src/
│   ├── app/                 ← Next.js App Router pages
│   │   ├── layout.tsx       ← root layout, fonts, persistent HUD
│   │   ├── page.tsx         ← / — main menu (hero + 3D + missions)
│   │   ├── globals.css      ← Tailwind + atmosphere layers
│   │   ├── dossier/         ← /dossier — about + education
│   │   ├── missions/        ← /missions — archive + [slug] briefings
│   │   ├── loadout/         ← /loadout — stack
│   │   └── comms/           ← /comms — contact
│   ├── components/
│   │   ├── hud/             ← persistent overlay, nav menu, boot sequence
│   │   ├── home/            ← hero, mission cards, diagnostic log
│   │   ├── three/           ← R3F centerpiece + holographic icosahedron
│   │   ├── ui/              ← CTA buttons, scanline/grain layer
│   │   └── providers/       ← Lenis smooth scroll
│   ├── lib/
│   │   ├── missions.ts      ← all project data, typed
│   │   └── cn.ts
│   └── types/
│       └── mission.ts       ← Mission type
├── next.config.mjs          ← static export config (output: "export")
├── tailwind.config.ts       ← design tokens (chartreuse + cyan signal + warm dark)
└── package.json
```

## Hosting on GitHub Pages

This repo is configured to deploy automatically. Once-only setup:

1. **Push this repo to `github.com/<your-username>/<your-username>.github.io`**
   (so for Mohamed, that's `github.com/ImamNazar/ImamNazar.github.io`)
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Push a commit to `main`. The workflow at `.github/workflows/deploy.yml` will:
   - Install dependencies
   - Run `npm run build` (produces `./out`)
   - Upload `./out` as a Pages artifact
   - Deploy it to your site

The first deployment can take 1–3 minutes. Subsequent deployments are faster.

### Custom domain

If you have a custom domain, add a `CNAME` file inside `public/` with the domain
on a single line (e.g. `imam.dev`). It'll be copied into `out/` on build.

## Editing content

Almost everything you need to update lives in two files:

- `src/lib/missions.ts` — every project, case study, stack, link, stat
- `src/app/dossier/page.tsx` — the about-me copy, vital stats, education record

For visual tweaks, `tailwind.config.ts` is the single source of truth for colors
(the chartreuse `#d4ff3a`, cyan signal `#5fffea`, warm dark `#0a0907`).

## Stack

| Layer            | Choice                                                    |
| ---------------- | --------------------------------------------------------- |
| Framework        | Next.js 15 · App Router · static export                   |
| Language         | TypeScript (strict mode)                                  |
| Styles           | Tailwind CSS v3 with custom design tokens                 |
| 3D               | three.js · @react-three/fiber · @react-three/drei         |
| Postprocessing   | @react-three/postprocessing (Bloom + ChromaticAberration) |
| Animation        | GSAP (boot sequence, hero reveal) · Framer Motion         |
| Smooth scroll    | Lenis                                                     |
| Fonts            | Fraunces (display) · Newsreader (body) · JetBrains Mono   |
| Hosting          | GitHub Pages (static export)                              |
| CI/CD            | GitHub Actions                                            |

## Features

- **Boot sequence** — runs once per session via `sessionStorage`, GSAP fade-out
- **Persistent HUD** — corner brackets, location, status, page identifier, audio toggle
- **3D holographic centerpiece** — distorted icosahedron with bloom and chromatic aberration; lazy-loaded, mobile fallback
- **Smooth scroll** — Lenis with reduced-motion guard
- **Mission briefings** — each project gets a `/missions/[slug]` route with a classified-style page
- **Loadout view** — stack organised by category
- **Comms terminal** — contact channels in a CRT-style list
- **Full `prefers-reduced-motion` support** throughout

## Development tips

- `npm run typecheck` to verify types without building
- `npm run lint` for ESLint
- The 3D scene is excluded from server render via `next/dynamic({ ssr: false })`
  — touching it won't break static export
- Adding a new mission: edit `src/lib/missions.ts`, add an entry, push.
  The static export rebuilds and a new `/missions/<slug>/` page appears.

---

© 2026 Mohamed Imam Mohamed Nazar. Personal portfolio — code is not licensed for reuse.
