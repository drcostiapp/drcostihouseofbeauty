import * as React from "react";
import { Heading } from "@drcosti/brand-kit";

export const Display = () => <Heading level={1}>House of Beauty</Heading>;

export const Levels = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
    <Heading level={1}>Coming Soon</Heading>
    <Heading level={2}>Our Treatments</Heading>
    <Heading level={3}>Signature Facials</Heading>
  </div>
);

export const Accent = () => (
  <Heading level={2} accent>
    The Experience
  </Heading>
);

export const Gold = () => (
  <Heading level={2} gold center accent>
    Relax · Renew · Revive
  </Heading>
);
