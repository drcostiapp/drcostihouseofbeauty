import * as React from "react";
import { cx } from "../cx";

export type SectionTone = "deep" | "navy";

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Background tone — near-black `deep` or the slightly lighter `navy`. */
  tone?: SectionTone;
  /** Apply the radial vignette that darkens the edges (as on the site). */
  vignette?: boolean;
  /** Center the inner content column. */
  center?: boolean;
  children?: React.ReactNode;
}

/**
 * A full-width page section on the dark brand canvas, with an inner max-width
 * column. Optional edge vignette recreates the site's atmospheric backdrop.
 */
export function Section({
  tone = "deep",
  vignette,
  center,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cx(
        "dcb-section",
        tone === "navy" && "dcb-section--navy",
        vignette && "dcb-section--vignette",
        center && "dcb-section--center",
        className
      )}
      {...rest}
    >
      <div className="dcb-section__inner">{children}</div>
    </section>
  );
}

export default Section;
