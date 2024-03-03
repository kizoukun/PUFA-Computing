"use client";
import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import { Input } from "@/components/ui/input";
import Input2 from "@/components/Input";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { CreateProject } from "@/server/projects";
import { z } from "zod";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export default function ProjectForm() {
   const majors = [
      {
         name: "Informatics",
         category: "Computing",
      },
      {
         name: "Information System",
         category: "Computing",
      },
      {
         name: "Visual Communication Design",
         category: "Computing",
      },
      {
         name: "Interior Design",
         category: "Computing",
      },
   ];

   const majorCategories = Array.from(
      new Set(majors.map((major) => major.category))
   );

   const FormDataSchema = z.object({
      title: z.string({ required_error: "Title is required" }).min(5, {
         message: "Title must be at least 5 characters",
      }),
      fullName: z.string({ required_error: "Full Name is required" }).min(1, {
         message: "Full Name is required",
      }),
      description: z
         .string({ required_error: "Description is required" })
         .min(10, { message: "Description must be at least 10 characters" }),
      major: z
         .string({ required_error: "Major is required" })
         .min(1, { message: "Major is required" }),
      image: z.any().refine(
         (value) => {
            const file = value as unknown as File;
            return (
               file.type === "image/png" ||
               file.type === "image/jpeg" ||
               file.type === "image/jpg"
            );
         },
         {
            message: "Image must be a png, jpeg, or jpg file",
         }
      ),
   });

   async function uploadImage(file: File) {
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch("/api/upload", {
         method: "POST",
         body: formData,
      });
      const data = await response.json();
      if (data.error) {
         alert(data.error);
         return;
      }
      return data.url;
   }

   async function handleAction(form: FormData) {
      const data = {
         title: form.get("title"),
         fullName: form.get("fullName"),
         description: form.get("description"),
         major: form.get("major"),
         image: form.get("image"),
      };

      const result = FormDataSchema.safeParse(data);
      if (!result.success) {
         let errorMessage = "";
         result.error.issues.forEach((issue) => {
            errorMessage += issue.message + ".\n";
         });
         Swal.fire({
            icon: "error",
            title: "Error",
            text: errorMessage,
         });
         return;
      }

      const image = result.data.image as unknown as File;
      const imageUrl = await uploadImage(image);
      if (!imageUrl) return;

      const serializedData = JSON.parse(JSON.stringify(result.data));
      serializedData.image = imageUrl;

      const response = await CreateProject(serializedData);
      if (response.error) {
         Swal.fire({
            icon: "error",
            title: "Error",
            text: response.error as string,
         });
         return;
      }
      Swal.fire({
         icon: "success",
         title: "Success",
         text: "Project created successfully",
      });
      redirect("/projects");
   }

   return (
      <form className="space-y-4" action={handleAction}>
         <Input2
            label="Full Name"
            placeholder="Your Full Name (And Team)"
            htmlFor="fullName"
            name="fullName"
            type="text"
         />
         <Input2
            label="Title"
            placeholder="Your Title Project"
            htmlFor="name"
            name="title"
            type="text"
         />
         <div className="space-y-2">
            <label htmlFor="description" className="block">
               Description
            </label>
            <Textarea
               id="description"
               name="description"
               placeholder="Project Description"
            ></Textarea>
         </div>
         <div className="space-y-2">
            <label htmlFor="major">Major</label>
            <Select name="major">
               <SelectTrigger id="major" className="w-full">
                  <SelectValue placeholder="Select Major" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup className="bg-white">
                     {majorCategories.map((category) => (
                        <SelectGroup key={category}>
                           <SelectLabel>{category}</SelectLabel>
                           {majors
                              .filter((major) => major.category === category)
                              .map((major) => (
                                 <SelectItem
                                    key={major.name}
                                    value={major.name}
                                 >
                                    {major.name}
                                 </SelectItem>
                              ))}
                        </SelectGroup>
                     ))}
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
         <div>
            <label htmlFor="image">Image</label>
            <Input
               type="file"
               name="image"
               id="image"
               accept="image/png, image/jpg, image/jpeg"
            />
         </div>
         <Button type="submit" className="w-full">
            Submit
         </Button>
      </form>
   );
}
