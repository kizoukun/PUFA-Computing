"use client";
import Button from "@/components/Button";
import { useState } from "react";

export default function UploadFile() {
   const [uploading, setUploading] = useState(false);
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      setUploading(true);
      event.preventDefault();
      const response = await fetch(
         "http://localhost:4000/files/upload/profile-picture",
         {
            method: "PUT",
            body: new FormData(event.target as HTMLFormElement),
         }
      );
      setUploading(false);
      console.log(response);
   };
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div>
               <label>Upload File Test</label>
               <input type="file" name="file" accept="image/jpeg, image/png" />
            </div>
            <Button type="submit" disabled={uploading}>
               Submit
            </Button>
         </form>
      </div>
   );
}
