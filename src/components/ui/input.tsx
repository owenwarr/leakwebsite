import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={
        "block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm " +
        "text-gray-900 placeholder:text-gray-400 shadow-sm " +
        "focus:outline-none focus:ring-2 focus:ring-[#2CB1A1] focus:border-[#2CB1A1] " +
        "disabled:cursor-not-allowed disabled:opacity-60 " +
        className
      }
      {...props}
    />
  )
);
Input.displayName = "Input";
export default Input;
