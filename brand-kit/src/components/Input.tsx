import * as React from "react";
import { cx } from "../cx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional field label rendered above the control. */
  label?: string;
  /** Error message; also switches the border to the alert tone. */
  error?: string;
}

/**
 * A single-line text field styled for the dark brand canvas — hairline gold
 * border that warms to solid gold on focus.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, className, id, ...rest }, ref) {
    const fieldId = id ?? (label ? `dcb-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
    return (
      <label className="dcb-field" htmlFor={fieldId}>
        {label && <span className="dcb-field__label">{label}</span>}
        <input
          ref={ref}
          id={fieldId}
          className={cx("dcb-input", error && "dcb-input--error", className)}
          aria-invalid={error ? true : undefined}
          {...rest}
        />
        {error && <span className="dcb-field__error">{error}</span>}
      </label>
    );
  }
);

export default Input;
