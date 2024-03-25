import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
   return (
      <button
         className={cn(
            `rounded-lg border-2 border-[#0C8CE9] bg-white p-3 text-black duration-300 hover:bg-[#0C8CE9] hover:text-white`,
            className
         )}
         {...props}
      >
         {children}
      </button>
   );
}
