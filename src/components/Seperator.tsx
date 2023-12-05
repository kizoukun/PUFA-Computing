import { cn } from "@/lib/utils";
import React from "react";

export default function Seperator({
   className,
}: {
   className?: React.HTMLAttributes<HTMLHRElement>["className"];
}) {
   return <hr className={cn("my-2 border border-black", className)} />;
}
