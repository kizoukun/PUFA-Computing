import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

const majorMap = {
   "001": "Informatics",
   "012": "Information System",
};

export function getMajor(studentId: string) {
   const id = studentId.slice(0, 3);
   return majorMap[id as keyof typeof majorMap];
}
