import * as React from "react";
import { cx } from "../cx";

export type EyebrowTone = "gold" | "muted" | "cream";

export interface EyebrowProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Color tone. */
  tone?: EyebrowTone;
  children?: React.ReactNode;
}

/**
 * The small uppercase, wide-tracked kicker label that sits above headings —
 * a signature brand micro-element (e.g. "House of Beauty").
 */
export function Eyebrow({
  tone = "gold",
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <p
      className={cx(
        "dcb-eyebrow",
        tone !== "gold" && `dcb-eyebrow--${tone}`,
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

export default Eyebrow;
