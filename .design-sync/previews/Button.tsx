import * as React from "react";
import { Button } from "@drcosti/brand-kit";

export const Ghost = () => (
  <Button variant="ghost">Book a Private Consultation</Button>
);

export const Solid = () => <Button variant="solid">Reserve Your Visit</Button>;

export const Text = () => <Button variant="text">View Our Services</Button>;

export const Sizes = () => (
  <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
    <Button variant="ghost" size="sm">
      Small
    </Button>
    <Button variant="ghost" size="md">
      Medium
    </Button>
    <Button variant="ghost" size="lg">
      Large
    </Button>
  </div>
);

export const Disabled = () => (
  <Button variant="solid" disabled>
    Fully Booked
  </Button>
);
