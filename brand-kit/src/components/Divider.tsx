import * as React from "react";
import { cx } from "../cx";

export type DividerVariant = "line" | "gradient" | "dot";

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Style: flat hairline, fading gradient, or gradient with a centered gold dot. */
  variant?: DividerVariant;
}

/**
 * A thin gold rule — the brand's recurring separator. `gradient` fades at the
 * edges; `dot` centers a glowing gold node in the fading line.
 */
export function Divider({
  variant = "line",
  className,
  role,
  ...rest
}: DividerProps) {
  return (
    <div
      role={role ?? "separator"}
      className={cx(
        "dcb-divider",
        variant !== "line" && `dcb-divider--${variant}`,
        className
      )}
      {...rest}
    />
  );
}

export default Divider;
