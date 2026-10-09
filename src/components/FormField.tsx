import { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required = false,
  ...props
}: FormFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`form-input ${error ? "form-input--error" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${name}-error`} className="form-error">
          {error}
        </span>
      )}
    </div>
  );
}

export function Textarea({
  label,
  name,
  placeholder,
  error,
  required = false,
  ...props
}: FormFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={`form-textarea ${error ? "form-textarea--error" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${name}-error`} className="form-error">
          {error}
        </span>
      )}
    </div>
  );
}

export function Select({
  label,
  name,
  error,
  required = false,
  children,
  ...props
}: FormFieldProps & SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        className={`form-select ${error ? "form-select--error" : ""}`}
        aria-invalid={!!error}
        {...props}
      >
        {children}
      </select>
      {error && (
        <span id={`${name}-error`} className="form-error">
          {error}
        </span>
      )}
    </div>
  );
}
