import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-scarlet px-4 py-2 text-white font-medium shadow transition-colors hover:bg-ruby focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scarlet",
      className
    )}
    {...props}
  />
));
Button.displayName = "Button";
