import * as React from "react";
import { Divider } from "@drcosti/brand-kit";

export const Line = () => (
  <div style={{ width: 320 }}>
    <Divider />
  </div>
);

export const Gradient = () => (
  <div style={{ width: 320 }}>
    <Divider variant="gradient" />
  </div>
);

export const Dot = () => (
  <div style={{ width: 320 }}>
    <Divider variant="dot" />
  </div>
);

export const Variants = () => (
  <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 8 }}>
    <Divider variant="line" />
    <Divider variant="gradient" />
    <Divider variant="dot" />
  </div>
);
