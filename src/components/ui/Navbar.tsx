/**
 * Navbar Component
 *
 * The Navbar component represents the navigation bar of the website, including links, dropdowns, and user authentication options.
 *
 * @component
 * @example
 * // Usage of the Navbar component in another React component or page
 * import Navbar from 'path/to/Navbar';
 * // Render the component
 * <Navbar />;
 */
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NavbarDropdown from "./NavbarDropdown";
import Logo from "@/assets/logo.png";
import Image from "next/image";

/**
 * Navbar Component
 *
 * @returns {JSX.Element} - React element representing the Navbar.
 */
export default function Navbar() {
   // State for mobile menu and user authentication
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isLoggedIn, setIsLogggedIn] = useState(false);

   // Navigation links for PUMA and Others sections
   const NavbarOthers = [
      {
         title: "Others",
         items: [
            {
               title: "Aspirations",
               href: "/aspiration",
            },
            {
               title: "Merch",
               href: "/merch",
            },
            {
               title: "Our Partners",
               href: "/partners",
            },
            {
               title: "Projects",
               href: "/projects",
            },
         ],
      },
   ];

   const NavbarPuma = [
      {
         title: "PUMA",
         items: [
            {
               title: "PUMA Informatics",
               href: "/puma/puma-informatics",
            },
            {
               title: "PUMA IS",
               href: "/puma/puma-is",
            },
            {
               title: "PUMA ID",
               href: "/puma/puma-id",
            },
            {
               title: "PUMA VCD",
               href: "/puma/puma-vcd",
            },
         ],
      },
   ];

   useEffect(() => {
      // Check user authentication on component mount
      const userToken = localStorage.getItem("access_token");
      setIsLogggedIn(!!userToken);
   }, []);

   /**
    * Handle Logout
    *
    * Function to handle user logout.
    */
   const handleLogout = () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("userId");
      window.location.href = "/";
      setIsLogggedIn(false);
   };

   return (
      <header className="sticky top-0 z-50 bg-white shadow-md">
         <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center justify-between">
               <div className="flex items-center gap-12 lg:divide-x-2 lg:divide-black">
                  {/* Logo and site title */}
                  <Link className="inline text-teal-600" href="/">
                     <Image alt="PU Computing" src={Logo} width="130" height="80" />
                  </Link>
                  <div className="hidden px-7 font-bold lg:block">
                     <div className="flex flex-col items-center">
                        <div className="flex-grow text-sm font-normal tracking-widest">
                           President University
                           <p
                              className=" text-sm font-normal"
                              style={{ letterSpacing: "0.11em" }}
                           >
                              Faculty Association
                           </p>
                           <div
                              className="text-center text-[19px] font-[700]"
                              style={{ letterSpacing: "0.33em" }}
                           >
                              COMPUTING
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Navigation links */}
               <div className="hidden md:block">
                  <nav aria-label="Global">
                     <ul className="text-md flex items-center gap-6 font-medium text-black ">
                        <li>
                           <Link href="/" className="">
                              Home
                           </Link>
                        </li>

                        <li>
                           <Link href="/events">Events</Link>
                        </li>

                        <li>
                           <Link href="/news">News</Link>
                        </li>

                        {/* Dropdowns for PUMA and Others sections */}
                        {NavbarPuma.map((item) => (
                           <NavbarDropdown
                              title={item.title}
                              items={item.items}
                              key={item.title}
                           />
                        ))}

                        {NavbarOthers.map((item) => (
                           <NavbarDropdown
                              title={item.title}
                              items={item.items}
                              key={item.title}
                           />
                        ))}
                     </ul>
                  </nav>
               </div>

               {/* User authentication and mobile view toggle */}
               <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                     {/* Conditionally render "Sign in" and "Sign up" buttons or user icon */}
                     {isLoggedIn ? (
                        <div className="flex items-center gap-4">
                           <img
                              alt=""
                              className="ri ri ri ri h-12 w-12 rounded-full dark:bg-gray-500"
                              src="https://source.unsplash.com/40x40/?portrait?1"
                           />
                           <button
                              onClick={handleLogout}
                              className="block rounded-md border-2 border-[#0C8CE9] bg-white px-2 py-2.5 text-sm font-medium text-black duration-300 hover:bg-[#0C8CE9] hover:text-white md:px-5"
                           >
                              Logout
                           </button>
                        </div>
                     ) : (
                        <div className="hidden gap-x-4 sm:flex">
                           <Link
                              className="block rounded-md border-2 border-[#0C8CE9] bg-white px-2 py-2.5 text-sm font-medium text-black duration-300 hover:bg-[#0C8CE9] hover:text-white md:px-5"
                              href="/auth/signin"
                           >
                              Log in
                           </Link>

                           <Link
                              className={`block rounded-md border-2 border-[#0C8CE9] bg-[#0C8CE9] px-5 py-2.5 text-sm font-medium text-white duration-300 hover:bg-white hover:text-black`}
                              href="/auth/signup"
                           >
                              Sign up
                           </Link>
                        </div>
                     )}
                  </div>

                  {/* Mobile view toggle button */}
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
