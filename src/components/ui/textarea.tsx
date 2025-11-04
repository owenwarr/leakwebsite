import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={
        "block w-full min-h-[120px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm " +
        "text-gray-900 placeholder:text-gray-400 shadow-sm " +
        "focus:outline-none focus:ring-2 focus:ring-[#2CB1A1] focus:border-[#2CB1A1] " +
        "disabled:cursor-not-allowed disabled:opacity-60 " +
        className
      }
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
export default Textarea;
