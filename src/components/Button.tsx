import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    disabled?: boolean;
}

export default function Button({
    children,
    className,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                `rounded-lg border-2 border-[#0C8CE9] bg-white px-4 py-2 text-black duration-300 hover:bg-[#0C8CE9] hover:text-white`,
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
