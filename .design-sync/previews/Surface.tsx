import * as React from "react";
import { Surface, Eyebrow, Heading, Text, Divider, Button } from "@drcosti/brand-kit";

export const Canvas = () => (
  <Surface>
    <Eyebrow>House of Beauty</Eyebrow>
    <div style={{ height: 12 }} />
    <Heading level={2} accent>
      A Sanctuary for the Senses
    </Heading>
    <div style={{ height: 16 }} />
    <Text tone="muted">
      Wrap any composition in a Surface to place it on the dark brand canvas.
    </Text>
    <Divider variant="gradient" />
    <Button variant="ghost" size="sm">
      Discover More
    </Button>
  </Surface>
);

export const Padding = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Surface padding="sm">
      <Text size="sm" tracked tone="gold">
        Compact canvas
      </Text>
    </Surface>
    <Surface padding="lg">
      <Text size="sm" tracked tone="gold">
        Spacious canvas
      </Text>
    </Surface>
  </div>
);
