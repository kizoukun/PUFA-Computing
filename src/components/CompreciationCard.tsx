import Link from "next/link";
import React from "react";

interface CompreciationCardProps {
  title: string;
  name: string;
  description: string;
  date: string;
  major: string;
}

export default function CompreciationCard({
  title,
  name,
  description,
  date,
  major
}: CompreciationCardProps) {
  return (
    <Link href="#">
      <article className="hover:animate-background rounded-xl border-2 border-[#AF95FF] p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4 sm:p-6">
          <h3 className="mt-0.5 text-justify text-[23px] sm:text-[20px] font-semibold text-[#353535]">
            {title}
          </h3>
          <h3 className="mt-0.5 text-justify text-[16px] sm:text-[14px] font-semibold text-[#AF95FF]">
            {name}
          </h3>
          <div className="text-justify py-2 text-[14px] sm:text-[12px]">
            {description}
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full border border-[#AF95FF] px-2.5 py-0.5 text-xs sm:text-sm text-[#AF95FF]">
              {major}
            </span>
          </div>
          <time className="mt-2 block text-left text-xs sm:text-sm text-[#A5B0BB]">
            {" "}
            {date}{" "}
          </time>
        </div>
      </article>
    </Link>
  );
}
