"use client"
import { useState } from "react";

export default function AspirationCard() {
   const [showAdminReply, setShowAdminReply] = useState(false);

   // Handler untuk menampilkan atau menyembunyikan balasan admin
   const toggleAdminReply = () => {
      setShowAdminReply(!showAdminReply);
   };

   return (
      <div className="flex flex-col gap-4 rounded-lg border-2 border-gray-300 px-4 py-6">
         <div className="flex justify-between">
            <h1 className="text-lg font-bold">Enrollment</h1>
            <button onClick={toggleAdminReply}>
               <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     id="Icon"
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M0.351472 0.390524C0.820101 -0.130175 1.5799 -0.130175 2.04853 0.390524L6 4.78105L9.95147 0.390524C10.4201 -0.130175 11.1799 -0.130175 11.6485 0.390524C12.1172 0.911223 12.1172 1.75544 11.6485 2.27614L6.84853 7.60948C6.3799 8.13017 5.6201 8.13017 5.15147 7.60948L0.351472 2.27614C-0.117157 1.75544 -0.117157 0.911223 0.351472 0.390524Z"
                     fill="#6B7280"
                  />
               </svg>
            </button>
         </div>
         <p className="text-sm">
            Testing testing testing testing testing testing testing testing
            testing testing testing testing testing.
         </p>
         {/* Tampilkan bagian balasan admin hanya jika showAdminReply true */}
         {showAdminReply && (
            <p className="text-sm">Admin: sorry ya, tidak akan dilayanin.</p>
         )}
         <div className="flex flex-col">
            <p className="text-sm font-bold">Anonymous</p>
            <div className="flex justify-between">
               <div className="flex gap-2 text-sm">
                  <p>To: Puma IT</p>
                  <p>Feb 14, 3099</p>
               </div>
               <div className="flex gap-2 text-sm">
                  <p>7</p>
                  {/* <div>logo heart</div> */}
               </div>
            </div>
         </div>
      </div>
   );
}
