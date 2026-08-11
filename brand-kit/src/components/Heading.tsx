import * as React from "react";
import { cx } from "../cx";

export type HeadingLevel = 1 | 2 | 3;

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic + visual level (h1–h3). */
  level?: HeadingLevel;
  /** Tint the heading gold instead of white. */
  gold?: boolean;
  /** Center the heading (and its accent rule). */
  center?: boolean;
  /** Show the short gold underline accent beneath the heading. */
  accent?: boolean;
  children?: React.ReactNode;
}

/**
 * Display heading in the brand's uppercase, wide-tracked, light-weight style.
 * Optionally rendered with the signature short gold underline (`accent`).
 */
export function Heading({
  level = 2,
  gold,
  center,
  accent,
  className,
  children,
  ...rest
}: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  return (
    <Tag
      className={cx(
        "dcb-heading",
        `dcb-heading--${level}`,
        gold && "dcb-heading--gold",
        center && "dcb-heading--center",
        accent && "dcb-heading--accent",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Heading;
