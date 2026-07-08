import * as React from "react";
import { Badge } from "@drcosti/brand-kit";

export const Solid = () => <Badge variant="solid">New</Badge>;

export const Variants = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Badge variant="solid">Signature</Badge>
    <Badge variant="outline">Members Only</Badge>
    <Badge variant="soft">Seasonal</Badge>
  </div>
);

export const InContext = () => (
  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
    <span style={{ color: "#fff", fontFamily: "Raleway", letterSpacing: 3, textTransform: "uppercase", fontSize: 14 }}>
      Gold Radiance Facial
    </span>
    <Badge variant="soft">Popular</Badge>
  </div>
);
