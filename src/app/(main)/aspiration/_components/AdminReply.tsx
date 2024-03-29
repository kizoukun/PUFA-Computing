"use client";

import { useState } from "react";

type AdminReplyProps = {
   subject: string;
   adminResponse?: string;
   message: string;
};

export default function AdminReply({
   subject,
   adminResponse,
   message,
}: AdminReplyProps) {
   const [showAdminReply, setShowAdminReply] = useState(false);

   // Handler untuk menampilkan atau menyembunyikan balasan admin
   const toggleAdminReply = () => {
      setShowAdminReply(!showAdminReply);
   };
   return (
      <>
         <div className="flex flex-row justify-between">
            <h1 className="text-lg font-bold capitalize md:text-xl">
               {subject}
            </h1>
            {adminResponse && (
               <button
                  onClick={toggleAdminReply}
                  className={`md:ml-auto ${
                     showAdminReply ? "rotate-180 duration-300" : ""
                  }`}
               >
                  <svg
                     width="12"
                     height="8"
                     viewBox="0 0 12 8"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        id="Icon"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.351472 0.390524C0.820101 -0.130175 1.5799 -0.130175 2.04853 0.390524L6 4.78105L9.95147 0.390524C10.4201 -0.130175 11.1799 -0.130175 11.6485 0.390524C12.1172 0.911223 12.1172 1.75544 11.6485 2.27614L6.84853 7.60948C6.3799 8.13017 5.6201 8.13017 5.15147 7.60948L0.351472 2.27614C-0.117157 1.75544 -0.117157 0.911223 0.351472 0.390524Z"
                        fill="#6B7280"
                     />
                  </svg>
               </button>
            )}
         </div>
         <p className="text-[16px] font-[400] text-[#6B7280]">{message}</p>
         {showAdminReply && (
            <p className="text-[16px] font-[400] text-[#111827]">
               {" "}
               Admin :{" "}
               <span className="text-[16px] font-[400] text-[#6B7280]">
                  {" "}
                  {adminResponse}{" "}
               </span>
            </p>
         )}
      </>
   );
}
