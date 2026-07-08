import * as React from "react";
import { Card, Heading, Text, Eyebrow, Divider, Button } from "@drcosti/brand-kit";

export const Service = () => (
  <div style={{ width: 340 }}>
    <Card glow>
      <Eyebrow>Signature</Eyebrow>
      <div style={{ height: 12 }} />
      <Heading level={3}>Gold Radiance Facial</Heading>
      <div style={{ height: 16 }} />
      <Text size="sm" tone="muted">
        A 60-minute ritual with 24k gold-infused serums to restore luminosity and
        firm the skin.
      </Text>
      <Divider variant="gradient" />
      <Text tone="gold" tracked>
        From $180
      </Text>
    </Card>
  </div>
);

export const Interactive = () => (
  <div style={{ width: 340 }}>
    <Card interactive>
      <Heading level={3}>Book a Consultation</Heading>
      <div style={{ height: 14 }} />
      <Text size="sm" tone="muted">
        Meet our specialists for a private, personalized skincare assessment.
      </Text>
      <div style={{ height: 20 }} />
      <Button variant="text">Learn more</Button>
    </Card>
  </div>
);

export const Padding = () => (
  <div style={{ display: "flex", gap: 16 }}>
    <Card padding="sm">
      <Text size="sm">Compact</Text>
    </Card>
    <Card padding="lg" glow>
      <Text size="sm">Spacious</Text>
    </Card>
  </div>
);
