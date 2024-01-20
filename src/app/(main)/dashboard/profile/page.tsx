import Input from "@/components/Input";
import Seperator from "@/components/Seperator";

export default async function DashboardProfilePage() {
   return (
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 p-4">
         <div>
            <div className="rounded-lg bg-white">
               <div className="p-3">
                  <p className="text-[16px] font-[500]">Personal Information</p>
               </div>
               <Seperator className="border-gray-100" />
               <div className="space-y-4 p-3">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                     <Input
                        type="text"
                        label="Full Name"
                        htmlFor="full_name"
                        placeholder="Nama mu"
                     />
                     <Input
                        type="text"
                        label="Full Name"
                        htmlFor="full_name"
                        placeholder="Nama mu"
                     />
                  </div>
                  <div>
                     <Input
                        type="text"
                        label="Full Name"
                        htmlFor="full_name"
                        placeholder="Nama mu"
                     />
                  </div>
                  <div>
                     <Input
                        type="text"
                        label="Full Name"
                        htmlFor="full_name"
                        placeholder="Nama mu"
                     />
                  </div>
                  <div>
                     <Input
                        type="text"
                        label="Full Name"
                        htmlFor="full_name"
                        placeholder="Nama mu"
                     />
                  </div>
                  <div>
                     <Input
                        type="text"
                        label="Full Name"
                        htmlFor="full_name"
                        placeholder="Nama mu"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div className="rounded-lg bg-white">
               <div className="p-3">
                  <p className="text-[16px] font-[500]">Profile Photos</p>
               </div>
               <Seperator className="border-gray-100" />
               <div className="space-y-4 p-3">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                     <Input
                        type="text"
                        label="Full Name"
                        htmlFor="full_name"
                        placeholder="Nama mu"
                     />
                     <Input
                        type="text"
                        label="Full Name"
                        htmlFor="full_name"
                        placeholder="Nama mu"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
