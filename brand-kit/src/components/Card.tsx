import * as React from "react";
import { cx } from "../cx";

export type CardPadding = "sm" | "md" | "lg";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inner padding step. */
  padding?: CardPadding;
  /** Add the soft radial gold glow behind the content. */
  glow?: boolean;
  /** Lift + gold border on hover (for clickable cards). */
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * A dark surface panel with a hairline gold border and rounded corners — the
 * container for services, testimonials, and feature blocks. Optional gold glow.
 */
export function Card({
  padding = "md",
  glow,
  interactive,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        "dcb-card",
        padding !== "md" && `dcb-card--pad-${padding}`,
        glow && "dcb-card--glow",
        interactive && "dcb-card--interactive",
        className
      )}
      {...rest}
    >
      <div className="dcb-card__body">{children}</div>
    </div>
  );
}

export default Card;
