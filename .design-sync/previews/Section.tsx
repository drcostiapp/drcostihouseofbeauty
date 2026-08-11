import * as React from "react";
import { Section, Heading, Text, Eyebrow, Button, Divider } from "@drcosti/brand-kit";

export const Hero = () => (
  <Section vignette center>
    <Eyebrow>House of Beauty</Eyebrow>
    <div style={{ height: 16 }} />
    <Heading level={1} center>
      Coming Soon
    </Heading>
    <div style={{ height: 20 }} />
    <Text tracked tone="muted" center>
      Relax the Mind · Renew the Body · Revive the Soul
    </Text>
    <div style={{ height: 32 }} />
    <Button variant="ghost">Book a Private Consultation</Button>
  </Section>
);

export const Navy = () => (
  <Section tone="navy" center>
    <Heading level={2} accent center gold>
      Our Philosophy
    </Heading>
    <div style={{ height: 24 }} />
    <div style={{ maxWidth: 520 }}>
      <Text tone="muted" center>
        Every detail is considered — the light, the scent, the touch — so that
        each visit is a moment of true restoration.
      </Text>
    </div>
  </Section>
);
