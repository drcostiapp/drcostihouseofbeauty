# design-sync notes — Dr. Costi House of Beauty brand kit

## What this is
- The design system was **authored from the brand site** (`index.html`), which is a static
  "coming soon" page — there was no pre-existing component library. The kit lives in
  `brand-kit/` as a real, buildable React package (`@drcosti/brand-kit`).
- Tokens (palette, type, spacing) and the aesthetic come directly from the site's inline CSS:
  gold `#D1B17C` / navy `#1E2A37` / cream `#D8CCB8`, Raleway, wide uppercase tracking, gold
  hairlines, ghost buttons that fill with a gold gradient on hover.

## Build / re-sync
- Build command: `npm --prefix brand-kit run build` (esbuild bundle → `dist/index.es.js`,
  `tsc --emitDeclarationOnly` → `.d.ts` tree, `build.mjs` copies `src/styles.css` →
  `dist/brand-kit.css`). Run `npm --prefix brand-kit ci` (or `install`) first on a fresh clone.
- Converter invocation (from repo root):
  `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./brand-kit/node_modules --entry ./brand-kit/dist/index.es.js --out ./ds-bundle`
- `cssEntry: dist/brand-kit.css` carries both the tokens (`:root`) and the component CSS, so
  there is no separate tokens file — do not add `tokensGlob`.

## Fonts
- Raleway is loaded via a **remote Google Fonts `@import`** inside `brand-kit.css` (same as the
  live site). Validate reports `[FONT_REMOTE]` — this is expected and intentional; the font is
  served at runtime, nothing to ship in `fonts/`. Do not "fix" it by vendoring a font.

## Playwright / render check
- Environment ships chromium at `/opt/pw-browsers` (build **1194**) with
  `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`. Build 1194 is pinned by **playwright 1.56.0** —
  install that exact version into `.ds-sync/` (`npm i -D playwright@1.56.0`). A different
  version fails with "Executable doesn't exist".
- Render/capture is slow (~2 min for 11 cards) because each page waits on the remote font
  fetch. Run validate/capture in the background, not a 2-min foreground call.

## Known render warns
- `[FONT_REMOTE] "Raleway"` — expected (see Fonts above).

## Re-sync risks
- The whole DS is hand-authored from the brand site. If the brand palette/fonts change on the
  site, update `brand-kit/src/styles.css` tokens to match — nothing syncs those automatically.
- Previews use inline `style` spacers/wrappers for layout glue around real components; that is
  composition only, not part of the shipped API.
