import * as React from "react";
import { cx } from "../cx";

export type ButtonVariant = "ghost" | "solid" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `ghost` is the brand's signature outline-that-fills-gold CTA. */
  variant?: ButtonVariant;
  /** Control size. */
  size?: ButtonSize;
  /** Render as an anchor instead of a button (pass with `href`). */
  href?: string;
  /** Target for the anchor form. */
  target?: string;
  /** Button label. */
  children?: React.ReactNode;
}

/**
 * Primary call-to-action for the Dr. Costi brand. Uppercase, wide-tracked, with a
 * gold gradient that sweeps in on hover for the `ghost` and `solid` variants.
 */
export function Button({
  variant = "ghost",
  size = "md",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cx(
    "dcb-btn",
    `dcb-btn--${variant}`,
    size !== "md" && `dcb-btn--${size}`,
    className
  );
  const label = <span className="dcb-btn__label">{children}</span>;

  if (href) {
    const { target, rel } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      >
        {label}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {label}
    </button>
  );
}

export default Button;
