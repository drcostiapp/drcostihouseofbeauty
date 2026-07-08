import * as React from "react";
import { Textarea } from "@drcosti/brand-kit";

export const Default = () => (
  <div style={{ width: 380 }}>
    <Textarea
      label="How can we help?"
      placeholder="Tell us about the treatment you're interested in…"
    />
  </div>
);

export const WithValue = () => (
  <div style={{ width: 380 }}>
    <Textarea
      label="Consultation Notes"
      defaultValue={
        "I'd like to book a facial and a massage for a special occasion next month."
      }
    />
  </div>
);

export const Error = () => (
  <div style={{ width: 380 }}>
    <Textarea label="Message" error="Please add a short message before sending." />
  </div>
);
