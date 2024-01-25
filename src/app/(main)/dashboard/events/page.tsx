import EventStatusDashboard from "@/components/event/EventStatusDashboard";
import React from "react";

export default function Page() {
   return (
      <div className="container mx-auto px-4 ">
         <div className="mt-6 flex flex-col bg-white">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                     <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg:transparent dark:bg-gray-800">
                           <tr className="text-center font-[500] text-[#353535]">
                              <th scope="col" className="px-4 py-3.5 ">
                                 Events Name
                              </th>

                              <th scope="col" className="px-12 py-3.5">
                                 Organization
                              </th>

                              <th scope="col" className="py-3.5">
                                 Status
                              </th>

                              <th scope="col" className="py-3.5">
                                 Action
                              </th>
                           </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                           <tr>
                              <td className="whitespace-nowrap px-4 py-3.5 text-center">
                                 Compsphere
                              </td>
                              <td className="whitespace-nowrap py-3.5 text-center">
                                 PUFA Computing
                              </td>
                              <td className="whitespace-nowrap py-3.5 text-center">
                                 <EventStatusDashboard status="on progress" />
                              </td>
                              <td className="whitespace-nowrap py-3.5 text-center">
                                 <button className="text-[#02ABF3] font-normal">Edit</button>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
