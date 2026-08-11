import * as React from "react";
import { Input } from "@drcosti/brand-kit";

export const Default = () => (
  <div style={{ width: 340 }}>
    <Input label="Full Name" placeholder="Your name" />
  </div>
);

export const WithValue = () => (
  <div style={{ width: 340 }}>
    <Input label="Email" defaultValue="hello@drchob.com" />
  </div>
);

export const Error = () => (
  <div style={{ width: 340 }}>
    <Input label="Phone" defaultValue="123" error="Enter a valid phone number" />
  </div>
);

export const NoLabel = () => (
  <div style={{ width: 340 }}>
    <Input placeholder="Search treatments…" aria-label="Search treatments" />
  </div>
);
