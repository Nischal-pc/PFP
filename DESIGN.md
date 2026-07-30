---
name: PFP Canada
description: Fire protection you can trust, across Western Canada.
colors:
  background: "oklch(0.985 0.004 250)"
  foreground: "oklch(0.2 0.025 260)"
  primary: "oklch(0.5 0.205 27)"
  primary-foreground: "oklch(0.99 0.01 90)"
  secondary: "oklch(0.18 0.03 260)"
  secondary-foreground: "oklch(0.97 0.01 250)"
  muted: "oklch(0.945 0.008 250)"
  muted-foreground: "oklch(0.42 0.025 260)"
  accent: "oklch(0.55 0.09 230)"
  accent-foreground: "oklch(0.99 0.01 250)"
  card: "oklch(0.995 0.002 250)"
  card-foreground: "oklch(0.2 0.025 260)"
  border: "oklch(0.82 0.02 260)"
  ring: "oklch(0.5 0.205 27)"
  destructive: "oklch(0.5 0.205 27)"
  stamp: "oklch(0.5 0.205 27)"
  rule: "oklch(0.55 0.09 230)"
typography:
  display:
    fontFamily: "Oswald, Impact, Haettenschweiler, sans-serif"
    fontWeight: 600
    letterSpacing: "0.02em"
    lineHeight: 1.02
    textTransform: "uppercase"
  body:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.55
  meta:
    fontFamily: "Oswald, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.14em"
    textTransform: "uppercase"
rounded:
  none: "0"
  sm: "1px"
  md: "2px"
  lg: "2px"
spacing:
  section: "5rem"
  gutter: "1.25rem"
  measure: "40rem"
  rule: "1px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.75rem"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.75rem"
  dossier-panel:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
---

<!-- impeccable:design-schema 1 -->

# Design

## Overview

PFP Canada’s marketing surfaces borrow the visual grammar of an **AHJ compliance dossier**: stamped inspection records, code binders, and blueprint-ruled margins. Facility managers already trust that paperwork — the site should feel like the same instrument, not a generic contractor brochure. Mode is Persuade: prove certified competence, then drive a quote or emergency call.

## Colors

- **Background**: cool paper white — reading field for reports.
- **Foreground**: charcoal ink.
- **Primary / stamp**: fire-red — seals, CTAs, alarm-level emphasis (committed color on action bands).
- **Secondary**: near-black dossier cover — utility chrome, footers, authority fields.
- **Accent / rule**: blueprint cyan — technical hairlines, meta labels, grid rules. Never decorative purple.
- Marketing stays light; dark appears only as cover/authority bands, not as a default theme.

## Typography

- **Display**: Oswald, uppercase, wide tracking — stamped headers and brand wordmark.
- **Body**: Source Sans 3 — dense but readable report prose.
- **Meta**: Oswald uppercase micro-labels for form fields, section stamps, and wayfinding chips.
- Brand wordmark in the first viewport must outrank the headline.

## Layout

- Content width `max-w-6xl` / `max-w-7xl` with ruled gutters.
- First viewport: letterhead brand, one claim, one CTA group, one full-bleed evidence plane (technician photo as dossier plate — edge to edge, no floating cards or overlays).
- Sections separated by hairline rules or muted paper bands; avoid identical icon-card grids as the page spine.
- Stats and trust proof live below the fold as stamped metrics, not hero clutter.

## Elevation & Depth

- Almost flat: paper on paper. Depth comes from overlapping stamp marks, ruled frames, and sharp red action fields.
- No glow shadows. Soft offset shadow only on sticky chrome if needed for legibility.

## Shapes

- Near-zero radius (1–2px). Forms and seals are cut square like tags and binders.
- Avoid pill clusters; use ruled lists and tabular rows.

## Components

- **Buttons**: square red stamp (primary) or charcoal cover (secondary); large marketing padding.
- **Header**: charcoal utility strip + paper nav with ruled bottom edge; brand as Oswald letterhead.
- **Service entries**: dossier rows or ruled panels with meta stamp — not soft rounded marketing cards.
- **CtaBand**: full-bleed primary red seal band.
- **PageHero**: charcoal cover plate with paper title block.

## Do's and Don'ts

**Do**
- Lead with PFP Canada as letterhead.
- Use meta stamps (NFPA, ULC, 24/7) sparingly as evidence.
- Keep one decisive red action per section.
- Prefer lists, tables, and ruled rows over card grids.

**Don't**
- Ship generic navy-hero + three-icon-card contractor layout.
- Float badges on hero imagery.
- Use Inter/Barlow, cream+terracotta editorial, or purple gradients.
- Soften corners into consumer-app pills.
