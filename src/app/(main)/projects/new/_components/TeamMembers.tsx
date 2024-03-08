import Button from "@/components/Button";
import { Input } from "@/components/ui/input";

export default function TeamMembers({
   members,
   setMembers,
}: {
   members: string[];
   setMembers: (members: string[]) => void;
}) {
   function addMember() {
      setMembers([...members, ""]);
   }

   function onChange(index: number, value: string) {
      const newMembers = [...members];
      newMembers[index] = value;
      setMembers(newMembers);
   }

   function removeMember() {
      const newMembers = [...members];
      newMembers.pop();
      setMembers(newMembers);
   }

   return (
      <div>
         <div className="flex items-center justify-between">
            <p>Team Members</p>
            <div className="space-x-2">
               {members.length > 1 && (
                  <Button
                     type="button"
                     className="text-sm"
                     onClick={removeMember}
                  >
                     Remove
                  </Button>
               )}
               <Button type="button" className="text-sm" onClick={addMember}>
                  Add
               </Button>
            </div>
         </div>
         <div>
            {members.map((member, index) => (
               <div key={index} className="flex ">
                  <Input
                     type="text"
                     defaultValue={member}
                     onChange={(e) => onChange(index, e.target.value)}
                     placeholder="Member Name"
                     className="mt-2"
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
