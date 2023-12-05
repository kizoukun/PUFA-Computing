import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
   return (
      <footer className="mx-auto max-w-7xl bg-white dark:bg-gray-900">
         <div className="container mx-auto px-6 py-12">
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            <div className="md:-mx-3 md:flex md:items-center md:justify-between">
               <div className="dark:text-white md:mx-3 xl:text-sm">
                  <div className="text-sm font-semibold tracking-widest text-[#0C8CE9]">
                     SUBSCRIBE TO OUR NEWSLETTER
                  </div>
                  <div className="mt-2 text-sm font-normal tracking-widest text-[#6B7280]">
                     The latest news, information, and updates, sent to your
                     inbox directly.
                  </div>
               </div>

               <div className="mt-6 flex flex-col justify-center space-y-3 md:ml-auto md:flex-row md:space-y-0">
                  <input
                     id="email"
                     type="text"
                     className="rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                     placeholder="Email Address"
                  />

                  <button className="w-full transform rounded-lg bg-[#0C8CE9] px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-[#0C8CE9] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80 md:mx-4 md:w-auto">
                     Subscribe
                  </button>
               </div>
            </div>
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            <div className="md:-mx-3 md:flex md:items-center md:justify-between">
               <div className="dark:text-white md:mx-3 xl:text-sm">
                  <div className="text-sm font-normal tracking-widest text-[#9CA3AF]">
                     © 2023 PUMA Computing. All rights reserved.
                     <br />
                     Made by Webdev Team Paling Ganteng-Ganteng, Research and
                     Technology.
                  </div>
               </div>

               <div className="mt-6 flex flex-col justify-center space-x-5 space-y-3 md:ml-auto md:flex-row md:space-y-0">
                  <Link href="https://www.linkedin.com/company/pumacomputing/">
                     <FaLinkedin
                        size={25}
                        className="text-[#DADADA] transition-colors duration-300 hover:text-gray-500"
                     />
                  </Link>
                  <Link href="https://www.instagram.com/pufacomputing">
                     <FaInstagram
                        size={25}
                        className="text-[#DADADA] transition-colors duration-300 hover:text-gray-500"
                     />
                  </Link>
                  <FaGithub
                     size={25}
                     className="text-[#DADADA] transition-colors duration-300 hover:text-gray-500"
                  />
               </div>
            </div>
         </div>
      </footer>
   );
}
