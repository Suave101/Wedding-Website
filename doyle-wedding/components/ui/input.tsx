import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "block w-full rounded-md border border-puce bg-white px-3 py-2 text-lg text-black shadow-sm focus:border-scarlet focus:ring focus:ring-scarlet focus:ring-opacity-50",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
