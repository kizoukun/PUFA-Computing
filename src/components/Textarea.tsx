import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes } from "react";

export default function Textarea({
   className,
   ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
   return (
      <textarea
         className={cn(
            "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-24 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
         )}
         {...props}
      ></textarea>
   );
}
