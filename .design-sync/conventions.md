# Dr. Costi House of Beauty — brand kit

A luxury spa / beauty design system. The look is **dark and atmospheric**: near-black navy
canvas, warm gold accents, the Raleway typeface, generous whitespace, and wide uppercase
letter-spacing. Build calm, editorial, high-end layouts — never bright or busy.

## Canvas & setup

Components are self-styled through the shipped `styles.css` (already loaded) — there is **no
provider to wrap**. But every component assumes a **dark background**; on a white page the gold
text and hairlines disappear. Put your design on the brand canvas one of two ways:

- Wrap the whole design in the root class: `<div className="dcb-root"> … </div>` (applies the
  navy background, Raleway font, and light text), **or**
- Use the `Section` component as the page/section container — it paints the navy background and
  centers an inner column, with an optional edge `vignette`.

```jsx
const { Section, Eyebrow, Heading, Text, Button } = window.DrCostiBrandKit;

<Section vignette center>
  <Eyebrow>House of Beauty</Eyebrow>
  <Heading level={1} center>Coming Soon</Heading>
  <Text tracked tone="muted" center>Relax the Mind · Renew the Body · Revive the Soul</Text>
  <Button variant="ghost">Book a Private Consultation</Button>
</Section>
```

## Styling idiom — props first, tokens for glue

Style through **component props**, not by inventing CSS classes. The `dcb-*` classes are the
library's internals; don't hand-write them. The design language is carried by these props:

- **`Button` / `IconButton`** — `variant` (`ghost` | `solid` | `text`), `size` (`sm` | `md` | `lg`).
  `ghost` is the signature CTA (gold outline that fills with a gold gradient on hover).
- **`Heading`** — `level` (1 | 2 | 3), `gold`, `center`, `accent` (short gold underline).
- **`Text`** — `size` (`sm` | `md` | `lg`), `tone` (`default` | `muted` | `gold`), `tracked`, `center`.
- **`Eyebrow`** — `tone` (`gold` | `muted` | `cream`) — the small tracked kicker above headings.
- **`Divider`** — `variant` (`line` | `gradient` | `dot`).
- **`Card`** — `padding` (`sm` | `md` | `lg`), `glow`, `interactive`.
- **`Badge`** — `variant` (`solid` | `outline` | `soft`).
- **`Input` / `Textarea`** — `label`, `error`, plus native input/textarea attributes.
- **`Section`** — `tone` (`deep` | `navy`), `vignette`, `center`.

For your **own layout glue** (wrappers, spacing, grids), use the design tokens as CSS variables
so custom bits stay on-brand. Real token names (defined in `styles.css` `:root`):

| Group | Tokens |
|---|---|
| Color | `--dcb-gold` `--dcb-gold-dark` `--dcb-gold-light` `--dcb-navy` `--dcb-navy-deep` `--dcb-cream` |
| Surfaces / text | `--dcb-bg` `--dcb-surface` `--dcb-border` `--dcb-border-strong` `--dcb-text` `--dcb-text-muted` |
| Accent fill | `--dcb-gold-gradient` (gold → gold-dark, used on hovers and solids) |
| Type | `--dcb-font` (Raleway) · weights `--dcb-weight-thin` (200) … `--dcb-weight-medium` (500) |
| Tracking | `--dcb-track-sm` `--dcb-track-md` `--dcb-track-lg` `--dcb-track-xl` (the wide uppercase spacing) |
| Spacing | `--dcb-space-1` … `--dcb-space-8` (4 → 64px) |
| Radii | `--dcb-radius-sm` `--dcb-radius-md` `--dcb-radius-lg` `--dcb-radius-pill` |

Typographic signatures to honor: headings and labels are **UPPERCASE with wide tracking** and
**light weight** (200–300); gold is an accent, not a fill for large areas; separate sections with
a gold `Divider` rather than a heavy border.

## Where the truth lives

- `styles.css` (and the `_ds_bundle.css` it imports) — the authoritative tokens and component
  styles. Read it before styling anything custom.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component props and real usage examples.
