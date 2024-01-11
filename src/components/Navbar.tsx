"use client"

import Link from "next/link";
import { useState } from 'react';
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar() {

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

   const NavbarDropdownItems = [
      {
         title: "Information",
         items: [
            {
               title: "About Us",
               href: "/about",
            },
            {
               title: "Our Team",
               href: "/team",
            },
            {
               title: "Our Partners",
               href: "/partners",
            },
         ],
      },
   ];
   return (
      <header className="sticky top-0 z-50 bg-white shadow-md">
         <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center justify-between">
               <div className="flex items-center gap-12 lg:divide-x-2 lg:divide-black">
                  <Link className="inline text-teal-600" href="/">
                     <img src="../logo.png" width="130" height="80" />
                  </Link>
                  <div className="hidden px-7 font-bold lg:block">
                     <div className="flex flex-col items-center">
                        <div className="flex-grow text-sm font-normal tracking-widest">
                           President University
                           <div className="flex-grow text-sm font-normal tracking-widest">
                              Faculty Association
                           </div>
                        </div>
                        <div className="mt-1 font-semibold">COMPUTING</div>
                     </div>
                  </div>
               </div>

               <div className="hidden md:block">
                  <nav aria-label="Global">
                     <ul className="text-md flex items-center gap-6 font-medium text-black ">
                        <li >
                           <Link href="/" className="">Home</Link>
                        </li>

                        <li>
                           <Link href="/events">Events</Link>
                        </li>

                        <li>
                           <Link href="/news">News</Link>
                        </li>

                        <li>
                           <Link href="/merch">Merch</Link>
                        </li>
                        {NavbarDropdownItems.map((item) => (
                           <NavbarDropdown
                              title={item.title}
                              items={item.items}
                              key={item.title}
                           />
                        ))}

                        <li>
                           <Link href="/contact">Contact</Link>
                        </li>
                     </ul>
                  </nav>
               </div>

               <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                     <Link
                        className="block rounded-md border-2 border-[#0C8CE9] bg-white px-2 py-2.5 text-sm font-medium text-black duration-300 hover:bg-[#0C8CE9] hover:text-white md:px-5"
                        href="/auth/signin"
                     >
                        Sign in
                     </Link>

                     <div className="hidden sm:flex">
                        <Link
                           className={`block rounded-md border-2 border-[#0C8CE9] bg-[#0C8CE9] px-5 py-2.5 text-sm font-medium text-white duration-300 hover:bg-white hover:text-black`}
                           href="/auth/signup"
                        >
                           Sign up
                        </Link>
                     </div>
                  </div>

                  <div className="block md:hidden">
                     <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>

      </header>
   );
}
