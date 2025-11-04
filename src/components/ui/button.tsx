import * as React from "react";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "icon";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none";
    const sizes: Record<Size, string> = {
      default: "px-4 py-2 text-sm",
      icon: "h-10 w-10 p-0"
    };
    const variants: Record<Variant, string> = {
      default: "bg-[#0E3A5D] text-white hover:opacity-90",
      outline: "border border-white/20 text-white hover:bg-white/10",
      ghost: "text-gray-700 hover:bg-gray-100"
    };
    return (
      <button ref={ref} className={[base, sizes[size], variants[variant], className].join(" ")} {...props} />
    );
  }
);
Button.displayName = "Button";
export default Button;
