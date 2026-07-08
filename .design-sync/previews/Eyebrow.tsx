import * as React from "react";
import { Eyebrow, Heading } from "@drcosti/brand-kit";

export const Gold = () => <Eyebrow>House of Beauty</Eyebrow>;

export const Tones = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Eyebrow tone="gold">Gold</Eyebrow>
    <Eyebrow tone="cream">Cream</Eyebrow>
    <Eyebrow tone="muted">Muted</Eyebrow>
  </div>
);

export const OverHeading = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <Eyebrow>Established in Beirut</Eyebrow>
    <Heading level={2} accent>
      A Sanctuary for the Senses
    </Heading>
  </div>
);
