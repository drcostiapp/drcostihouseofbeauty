import * as React from "react";
import { cx } from "../cx";

export type SurfacePadding = "flush" | "sm" | "md" | "lg";

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inner padding step. `flush` removes padding. */
  padding?: SurfacePadding;
  children?: React.ReactNode;
}

/**
 * The brand canvas — a dark navy surface that applies the Raleway font and
 * light text. Wrap any composition in it so gold accents, hairlines, and white
 * headings read correctly; it is the component form of the `.dcb-root` canvas.
 */
export function Surface({
  padding = "md",
  className,
  children,
  ...rest
}: SurfaceProps) {
  return (
    <div
      className={cx(
        "dcb-root",
        "dcb-surface-canvas",
        padding !== "md" && `dcb-surface-canvas--${padding}`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Surface;
