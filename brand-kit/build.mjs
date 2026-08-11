// Builds the ESM JS bundle and the compiled stylesheet for @drcosti/brand-kit.
// JS: esbuild bundles src/index.ts -> dist/index.es.js (React kept external).
// CSS: src/styles.css is concatenated from tokens + fonts + component styles at
// author time; here we just copy it to dist/brand-kit.css so downstream tooling
// (and the design-sync converter's cssEntry) has a single compiled stylesheet.
import { build } from 'esbuild';
import { mkdirSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const dist = resolve(root, 'dist');
mkdirSync(dist, { recursive: true });

await build({
  entryPoints: [resolve(root, 'src/index.ts')],
  outfile: resolve(dist, 'index.es.js'),
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['es2020'],
  jsx: 'automatic',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  loader: { '.css': 'empty' },
});

copyFileSync(resolve(root, 'src/styles.css'), resolve(dist, 'brand-kit.css'));

console.log('build: dist/index.es.js + dist/brand-kit.css written');
