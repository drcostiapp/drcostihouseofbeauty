import * as React from "react";
import { cx } from "../cx";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Optional field label rendered above the control. */
  label?: string;
  /** Error message; also switches the border to the alert tone. */
  error?: string;
}

/**
 * A multi-line text field matching the Input styling — for consultation notes,
 * messages, and longer form entries on the dark brand canvas.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, error, className, id, rows = 4, ...rest }, ref) {
    const fieldId = id ?? (label ? `dcb-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
    return (
      <label className="dcb-field" htmlFor={fieldId}>
        {label && <span className="dcb-field__label">{label}</span>}
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          className={cx("dcb-textarea", error && "dcb-textarea--error", className)}
          aria-invalid={error ? true : undefined}
          {...rest}
        />
        {error && <span className="dcb-field__error">{error}</span>}
      </label>
    );
  }
);

export default Textarea;
