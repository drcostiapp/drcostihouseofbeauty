import * as React from "react";
import { cx } from "../cx";

export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible label — required, since the button shows only an icon. */
  label: string;
  /** Control size. */
  size?: IconButtonSize;
  /** The icon (an SVG element). */
  children: React.ReactNode;
}

/**
 * Circular gold ghost button for icons — the frosted, glowing action used for
 * social links and the floating WhatsApp control. Fills solid gold on hover.
 */
export function IconButton({
  label,
  size = "md",
  className,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cx(
        "dcb-icon-btn",
        size !== "md" && `dcb-icon-btn--${size}`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;
