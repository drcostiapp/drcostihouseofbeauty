import * as React from "react";
import { cx } from "../cx";

export type TextSize = "sm" | "md" | "lg";
export type TextTone = "default" | "muted" | "gold";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Font size step. */
  size?: TextSize;
  /** Color tone. */
  tone?: TextTone;
  /** Uppercase + letter-spaced treatment for label-like copy. */
  tracked?: boolean;
  /** Center the text. */
  center?: boolean;
  /** Element to render as. */
  as?: "p" | "span" | "div";
  children?: React.ReactNode;
}

/**
 * Body and supporting copy in Raleway. Light, airy line-height; optional
 * `tracked` treatment for uppercase spaced labels and taglines.
 */
export function Text({
  size = "md",
  tone = "default",
  tracked,
  center,
  as = "p",
  className,
  children,
  ...rest
}: TextProps) {
  const Tag = as;
  return (
    <Tag
      className={cx(
        "dcb-text",
        `dcb-text--${size}`,
        tone !== "default" && `dcb-text--${tone}`,
        tracked && "dcb-text--tracked",
        center && "dcb-text--center",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Text;
