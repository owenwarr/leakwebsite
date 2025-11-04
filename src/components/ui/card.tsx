import * as React from "react";
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = "",
  ...props
}) => (
  <div
    className={"rounded-2xl border border-gray-200 bg-white shadow " + className}
    {...props}
  />
);
export default Card;
