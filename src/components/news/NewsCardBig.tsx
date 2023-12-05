import Link from "next/link";
import React from "react";

interface NewsCardBigProps {
  image: string;
  title: string;
  description: string;
  time: string;
}

export default function NewsCardBig({
  image,
  title,
  description,
  time,
}: NewsCardBigProps) {
  return (
    <Link href={"/"}>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg h-full">
        <img
          alt="Office"
          src={image}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <time className="block text-xs text-white/90">{time}</time>
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              {description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
