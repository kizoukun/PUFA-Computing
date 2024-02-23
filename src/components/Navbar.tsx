"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NavbarDropdown from "./NavbarDropdown";
import { access } from "fs";

export default function Navbar() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isLoggedIn, setIsLogggedIn] = useState(false);

   const NavbarOthers = [
      {
         title: "Others",
         items: [
            {
               title: "Aspirations",
               href: "/aspiration",
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

   const NavbarOrganizations = [
      {
         title: "Organizations",
         items: [
            {
               title: "PUFA Computing",
               href: "/organizations/pufa-computing",
            },
            {
               title: "PUMA Informatics",
               href: "/organizations/puma-informatics",
            },
            {
               title: "PUMA IS",
               href: "/organizations/puma-is",
            },
            {
               title: "PUMA ID",
               href: "/organizations/puma-id",
            },
            {
               title: "PUMA VCD",
               href: "/organizations/puma-vcd",
            },
         ],
      },
   ];

   useEffect(() => {
      const userToken = localStorage.getItem("access_token");
      setIsLogggedIn(!!userToken);
   }, []);

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

                        {NavbarOrganizations.map((item) => (
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
                        {isLoggedIn ? (
                           <li>
                              <button className="hover:scale-125 duration-300">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="23"
                                    viewBox="0 0 26 25"
                                    fill="none"
                                 >
                                    <path
                                       d="M11.3964 22.7885C11.3993 23.2238 11.265 23.65 11.0104 24.0132C10.7559 24.3765 10.3926 24.6603 9.96663 24.8287C9.54067 24.9972 9.07121 25.0427 8.61778 24.9594C8.16435 24.8762 7.74736 24.668 7.41969 24.3612C7.09201 24.0543 6.8684 23.6628 6.77721 23.2361C6.68602 22.8094 6.73135 22.3668 6.90746 21.9644C7.08357 21.562 7.38253 21.218 7.76643 20.9759C8.15033 20.7338 8.60188 20.6045 9.06384 20.6045C9.67996 20.6045 10.2711 20.8341 10.7081 21.2433C11.1451 21.6525 11.3926 22.208 11.3964 22.7885ZM21.0037 20.6045C20.5424 20.6045 20.0914 20.7334 19.7078 20.9749C19.3242 21.2164 19.0252 21.5596 18.8487 21.9612C18.6722 22.3628 18.626 22.8047 18.716 23.231C18.806 23.6573 19.0281 24.0489 19.3543 24.3563C19.6806 24.6637 20.0962 24.873 20.5487 24.9578C21.0011 25.0426 21.4701 24.999 21.8964 24.8327C22.3226 24.6664 22.6869 24.3847 22.9432 24.0233C23.1995 23.6618 23.3363 23.2369 23.3363 22.8022C23.3363 22.2194 23.0906 21.6604 22.6531 21.2482C22.2157 20.836 21.6224 20.6045 21.0037 20.6045ZM25.9459 7.21195L23.5841 16.1266C23.3442 17.0149 22.7967 17.8024 22.0283 18.3647C21.26 18.9269 20.3146 19.2317 19.3418 19.2309H10.7258C9.751 19.231 8.80412 18.9242 8.03551 18.3593C7.26691 17.7943 6.72063 17.0037 6.48343 16.1128L3.22745 4.375L2.55766 3.125C2.17102 3.125 1.06456 2.98028 0.791161 2.72268C0.517759 2.46508 0.121379 2.46198 0.121379 2.09768C0.121379 1.73338 -0.151843 1.10528 0.121558 0.847683C0.39496 0.590084 1.07447 0.222683 1.46112 0.222683L4.1217 0.000582969C4.45472 -0.00855882 4.78102 0.0900494 5.04628 0.279991C5.31153 0.469932 5.49974 0.739747 5.57956 1.04451L6.71669 5.49496H24.3568H24.488C24.6232 5.47467 24.761 5.47467 24.8962 5.49496C25.0853 5.53956 25.2629 5.61941 25.4186 5.72981C25.5744 5.84021 25.705 5.9789 25.8029 6.13769C25.9007 6.29649 25.9638 6.47215 25.9884 6.65431C26.0129 6.83647 25.9985 7.02141 25.9459 7.19822V7.21195ZM22.6657 8.24215H7.44562L9.35542 15.4398C9.43163 15.7309 9.60682 15.9904 9.85425 16.1789C10.1017 16.3674 10.4078 16.4745 10.7258 16.4837H19.298C19.6311 16.4929 19.9574 16.3942 20.2226 16.2043C20.4879 16.0144 20.6761 15.7445 20.7559 15.4398L22.6657 8.24215Z"
                                       fill="#2F2F2F"
                                       fillOpacity="0.85"
                                    />
                                 </svg>
                              </button>
                           </li>
                        ) : null}
                     </ul>
                  </nav>
               </div>

               <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                     {/* Conditionally render "Sign in" and "Sign up" buttons or user icon */}
                     {isLoggedIn ? (
                        <div className="flex items-center gap-4">
                           <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src="https://source.unsplash.com/40x40/?portrait?1" />
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
                              Sign in
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

                  {/* Mobile view  */}
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
