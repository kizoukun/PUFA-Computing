import Button from "@/components/Button";
import { Input } from "@/components/ui/input";

export default function Images({
   images,
   setImages,
}: {
   images: File[];
   setImages: (images: File[]) => void;
}) {
   function addImage() {
      setImages([...images, new File([], "")]);
   }

   function onChange(index: number, files: FileList | null) {
      if (!files) return;
      const newImages = [...images];
      newImages[index] = files[0];
      setImages(newImages);
   }

   function removeImage() {
      const newImages = [...images];
      newImages.pop();
      setImages(newImages);
   }

   return (
      <div>
         <div className="flex items-center justify-between">
            <p>Images</p>
            <div className="space-x-2">
               {images.length > 1 && (
                  <Button
                     type="button"
                     className="text-sm"
                     onClick={removeImage}
                  >
                     Remove
                  </Button>
               )}
               <Button type="button" className="text-sm" onClick={addImage}>
                  Add
               </Button>
            </div>
         </div>
         <div>
            {images.map((image, index) => (
               <div key={index} className="flex ">
                  <Input
                     type="file"
                     onChange={(e) => onChange(index, e.target.files)}
                     accept="image/png, image/jpg, image/jpeg"
                     placeholder="Member Name"
                     className="mt-2"
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
