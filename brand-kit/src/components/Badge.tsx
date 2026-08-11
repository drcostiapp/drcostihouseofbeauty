import * as React from "react";
import { cx } from "../cx";

export type BadgeVariant = "solid" | "outline" | "soft";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Fill style: solid gold, gold outline, or soft gold tint. */
  variant?: BadgeVariant;
  children?: React.ReactNode;
}

/**
 * A small uppercase pill for status, category, or accent labels — rendered in
 * the brand gold in solid, outline, or soft-tint form.
 */
export function Badge({
  variant = "solid",
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cx("dcb-badge", `dcb-badge--${variant}`, className)}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Badge;
