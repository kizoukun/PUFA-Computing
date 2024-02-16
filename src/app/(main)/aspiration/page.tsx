import React from "react";

export default function page() {
   return (
      <div>
         {/* // title */}
         <section className="bg-[#F2F2F2] p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#E50D0D] pl-5 ">
               <h1 className="text-[2rem] font-[700] text-[#353535]">
                  Aspirations
               </h1>
               <p className="text-[0.8rem] font-[400] ">
                  A place for computizens to share their aspirations, ideas, and
                  suggestions with us.
               </p>
            </div>
         </section>

         {/* aspirations box  */}
         <section className="px-[10rem] py-16 mb-10">

            <div className="border shadow-lg rounded-lg px-8 py-4 flex flex-col">

               <h1 className=" text-[#656565] text-[1.4rem]">Share Your Aspirations for Better Computing</h1>
               <hr className="my-8 border"/>
               <div>
                  <h1 className="text-[1.3rem] ">Hello, Alden Sayidina!</h1>
                  <h1 className="text-[1.3rem] font-bold">Let's fill in this box!</h1>
               </div>
               <hr className="my-8 border"/>

               <div className="flex flex-col gap-2 mb-6">
                  <h1 className="text-[1.1rem] font-bold">To:</h1>
                  <p className="text-[0.9rem]">Ex: Organizations (PUFA COMPUTING, etc.), lecturers, or any person in our faculty.</p>
                  <input type="text" className="rounded-lg border-2 p-2 w-[100%]"/>
               </div>

               <div className="flex flex-col gap-2 mb-6">
                  <h1 className="text-[1.1rem] font-bold">From:</h1>
                  <p className="text-[0.9rem]">Share it anonymously (insert toggle button here)</p>
                  <input type="text" className="rounded-lg border-2 p-2 w-[100%]"/>
               </div>

               <div className="flex flex-col gap-2 mb-6">
                  <h1 className="text-[1.1rem] font-bold">Subject:</h1>
                  <p className="text-[0.9rem]">Your email etc.</p>
                  <input type="text" className="rounded-lg border-2 p-2 w-[100%]"/>
               </div>

               <div className="flex flex-col gap-2 mb-6">
                  <h1 className="text-[1.1rem] font-bold">Message:</h1>
                  <p className="text-[0.9rem]">Anything else you want to let us know:</p>
                  <textarea name="" id="" cols="30" rows="10" noresize className="rounded-lg border-2 p-2 resize-none"></textarea>
               </div>

               <button className="flex self-center rounded-lg py-6 px-[16rem] border-2 border-gray-300 shadow-sm hover:bg-[#0C8CE9] hover:text-white transition-all duration-300 hover:border-white">Submit</button>
            </div>
         </section>

         {/* aspirations library */}
         <section className="py-16 mb-10 flex flex-col items-center gap-10">
            <h1 className="text-[1.8rem] font-bold">Aspirations Library</h1>
            <input type="text" className="p-4 border-2 rounded-lg w-[60%] scale-110 border-gray-300 absolute translate-y-14" placeholder="Search Aspirations"/>
            <div className="flex flex-col justify-center items-center border-2 shadow-lg rounded-3xl px-[10rem] py-16 w-[100%]">

               <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                  <div className="border-2 border-gray-300 flex flex-col gap-8 px-4 py-8 rounded-lg">
                     <h1 className="text-[1.2rem] font-bold">Enrollment</h1>
                     <p>testing testing testing testing testing testing testing testing testing testing testing testing.</p>
                     <p>Admin: sorry ya, tidak akan dilayanin.</p>
                     <div className="flex flex-col">
                        <p className="font-bold">Anonymous</p>
                        <div className="flex justify-between">
                           <div className="flex gap-2">
                              <p>To: Puma IT</p>
                              <p>Feb 14, 3099</p>
                           </div>
                           <div className="flex gap-2">
                              <p>7</p>
                              <div>logo heart</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="border-2 border-gray-300 flex flex-col gap-8 px-4 py-8 rounded-lg">
                     <h1 className="text-[1.2rem] font-bold">Enrollment</h1>
                     <p>testing testing testing testing testing testing testing testing testing testing testing testing.</p>
                     <p>Admin: sorry ya, tidak akan dilayanin.</p>
                     <div className="flex flex-col">
                        <p className="font-bold">Anonymous</p>
                        <div className="flex justify-between">
                           <div className="flex gap-2">
                              <p>To: Puma IT</p>
                              <p>Feb 14, 3099</p>
                           </div>
                           <div className="flex gap-2">
                              <p>7</p>
                              <div>logo heart</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="border-2 border-gray-300 flex flex-col gap-8 px-4 py-8 rounded-lg">
                     <h1 className="text-[1.2rem] font-bold">Enrollment</h1>
                     <p>testing testing testing testing testing testing testing testing testing testing testing testing.</p>
                     <p>Admin: sorry ya, tidak akan dilayanin.</p>
                     <div className="flex flex-col">
                        <p className="font-bold">Anonymous</p>
                        <div className="flex justify-between">
                           <div className="flex gap-2">
                              <p>To: Puma IT</p>
                              <p>Feb 14, 3099</p>
                           </div>
                           <div className="flex gap-2">
                              <p>7</p>
                              <div>logo heart</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="border-2 border-gray-300 flex flex-col gap-8 px-4 py-8 rounded-lg">
                     <h1 className="text-[1.2rem] font-bold">Enrollment</h1>
                     <p>testing testing testing testing testing testing testing testing testing testing testing testing.</p>
                     <p>Admin: sorry ya, tidak akan dilayanin.</p>
                     <div className="flex flex-col">
                        <p className="font-bold">Anonymous</p>
                        <div className="flex justify-between">
                           <div className="flex gap-2">
                              <p>To: Puma IT</p>
                              <p>Feb 14, 3099</p>
                           </div>
                           <div className="flex gap-2">
                              <p>7</p>
                              <div>logo heart</div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
