import { cn } from "@/lib/utils";
import React from "react";

export default function Seperator({
   className,
}: {
   className?: React.HTMLAttributes<HTMLHRElement>["className"];
}) {
   return <hr className={cn("border border-black my-2", className)} />;
}
