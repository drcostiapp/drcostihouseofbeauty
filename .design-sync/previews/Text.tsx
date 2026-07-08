import * as React from "react";
import { Text } from "@drcosti/brand-kit";

export const Body = () => (
  <div style={{ maxWidth: 460 }}>
    <Text>
      Step into a private world of calm. Our therapists tailor every treatment to
      you — from restorative facials to full-body rituals designed to relax the
      mind, renew the body, and revive the soul.
    </Text>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 460 }}>
    <Text size="lg">Large — an airy lead paragraph for opening statements.</Text>
    <Text size="md">Medium — the default body size for descriptive copy.</Text>
    <Text size="sm">Small — fine print, captions, and supporting detail.</Text>
  </div>
);

export const Tones = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 460 }}>
    <Text tone="default">Default cream-white body copy.</Text>
    <Text tone="muted">Muted supporting copy for secondary detail.</Text>
    <Text tone="gold">Gold copy for emphasis and accents.</Text>
  </div>
);

export const Tagline = () => (
  <Text tracked tone="muted" center>
    Relax the Mind · Renew the Body · Revive the Soul
  </Text>
);
