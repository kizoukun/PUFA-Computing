import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
   return (
      <button
         className={cn(
            `bg-white hover:bg-[#0C8CE9] p-3 rounded-lg text-black hover:text-white duration-300 border-2 border-[#0C8CE9]`,
            className
         )}
         {...props}
      >
         {children}
      </button>
   );
}
