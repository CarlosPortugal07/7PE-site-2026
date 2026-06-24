# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **7PE Portugal Engenharia Elétrica** — a solar energy company based in Valinhos, SP, Brazil. Single-page marketing site with no router. All sections are rendered in sequence in `src/App.tsx`.

## Commands

```bash
npm run build       # production build (Vite)
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit (type-check only, no emit)
```

The dev server runs automatically in Bolt — never start it manually.

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/main.yml`), which builds the project and deploys `./dist` to GitHub Pages via `peaceiris/actions-gh-pages`.

## Architecture

Single-page React 18 + TypeScript app built with Vite. No routing, no state management library, no tests.

**Section order** (defined in `src/App.tsx`):
`Header → Hero → PainPoints → Engineering → Services → Proof → Brands → Process → Calculator → FAQ → CTAStrip → Contact → Footer`

**Scroll animations** — every section uses the `useInView` hook (`src/hooks/useInView.ts`), which fires an `IntersectionObserver` once and sets `isInView = true`. Animated elements start as `opacity-0` and apply Tailwind animation classes (`animate-fade-up`, `animate-fade-in`, `animate-slide-right`) when in view. The `ref` must be attached to the section's wrapper div.

**CSS utilities** — shared component classes are defined in `src/index.css` under `@layer components`: `.btn`, `.btn-primary`, `.btn-dark`, `.btn-light`, `.card`, `.eyebrow`, `.section-title`, `.section-lead`, `.icon-box`. Prefer these over one-off Tailwind classes for consistency.

## Design Tokens

Defined in `tailwind.config.js`:

| Token | Value | Use |
|---|---|---|
| `navy` | `#10233f` | Primary brand / headings |
| `mint` | `#2fbbb1` | Accent / icons / CTAs |
| `gold` | `#f2aa2e` | Primary CTA button background |
| `ink` | `#172033` | Body text |
| `muted` | `#5e6a7d` | Secondary text |
| `line` | `#dce4ed` | Borders / dividers |
| `soft` | `#f4f8fb` | Section backgrounds |

Fonts: `font-sans` = Inter; `font-display` = Playfair Display (used for `.section-title` and `h1`).

## Business Details

- **Phone / WhatsApp:** (19) 99545-4370 — hardcoded in Hero, CTAStrip, Contact, Footer
- **Email:** vendas@portugalengenharia.com.br
- **CNPJ:** 53.142.037/0001-10
- **Service area:** Valinhos, Vinhedo, Campinas, Louveira, Itatiba e região
- **Analytics:** `window.gtag` is called conditionally (`if (typeof window.gtag === 'function')`) in CTAs — do not remove these calls

## Copy Guidelines

- The company is **formal and credible** — do not use language that implies a lack of track record, completed projects, or cases (e.g., "ainda não temos instalações").
- Tone is consultative and technically grounded, not salesy.
- All customer-facing copy is in Brazilian Portuguese.
