"use client";
import { useState } from "react";
import Select from "react-select";

export default function MerchPage() {
   const [selectedImage, setSelectedImage] = useState<string>("../aot.jpg");
   const [selectedSize, setSelectedSize] = useState<string | null>(null);

   const [isClearable, setIsClearable] = useState(true);

   const options = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
   ];

   const sizeOptions = [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" },
   ];

   const colorOptions = [
      { value: "blackGrey", label: "Black n Grey" },
      { value: "blackWhite", label: "Black n White" },
      { value: "blackYellow", label: "Black n Yelow" },  
   ];

   const [selectedColor, setSelectedColor] = useState<string | null>(null);

   const handleColorChange = (selectedOption: any) => {
      setSelectedColor(selectedOption?.value || null);
   };

   const handleSizeChange = (selectedOption: any) => {
      const selectedSizeLabel = selectedOption?.label || null;
      setSelectedSize(selectedSizeLabel);
   };
   const handleImageClick = (chooseImage: string) => {
      setSelectedImage(chooseImage);
   };

   return (
      <div>
         {/* header title  */}
         <div className=" bg-[#F2F2F2] p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#BA704F] pl-5">
               <div className="flex items-center">
                  <p className="text-[35px] font-bold text-[#353535]">
                     Computing Store
                  </p>
               </div>
               <p className="text-[12px] font-[400] text-[#353535]">
                  Special merchandise for all Computizens
               </p>
            </div>
         </div>

         <div className="py-8">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
               <div className="-mx-4 flex flex-col md:flex-row">
                  <div className="px-4 md:flex-1">
                     <div className="mb-4 h-[400px]">
                        <img
                           className="h-full w-full rounded-xl object-cover"
                           src={selectedImage}
                           alt="Product Image"
                        />
                     </div>
                     <div className="grid grid-cols-3">
                        <img
                           className="h-48 w-36 rounded-xl object-cover"
                           src="../aot.jpg"
                           alt="Product Image"
                           onClick={() => handleImageClick("../aot.jpg")}
                        />
                        <img
                           className="h-48 w-36 rounded-xl object-cover"
                           src="../another-aot.jpg"
                           alt="Product Image"
                           onClick={() =>
                              handleImageClick("../another-aot.jpg")
                           }
                        />
                     </div>
                  </div>
                  <div className="px-4 md:flex-1">
                     <h2 className="mb-2 text-[2rem] font-bold text-gray-800">
                        Computing Varsity
                     </h2>
                     <div className="flex gap-2">
                        <label className="justitfy-center flex items-center rounded-2xl border border-[#BA704F] px-6 py-1 text-[14px] font-[400] text-[#BA704F]">
                           PUFA Computing
                        </label>
                        <label className="justitfy-center flex items-center rounded-2xl border border-[#1FA820] px-6 py-1 text-[14px] font-[400] text-[#1FA820]">
                           Ready Stock
                        </label>
                     </div>
                     {/* price  */}

                     <p className="mt-4 text-[32px] font-[600] text-[#353535]">
                        Rp. 250.000
                     </p>
                     {/* Description  */}
                     <p className="my-6 text-justify text-[15px] font-[500] text-[#353535]">
                        It is long setablished sleeves with an ordinary pattern
                        and has three color on it, it deserve to make a
                        computizen proud of their faculty
                     </p>

                     <div className="flex flex-col gap-4">
                        {/* colour  */}
                        <div className="flex items-center gap-x-4">
                           <p className="text-[16px] font-[600] text-[#353535] ">
                              Choose Color :
                           </p>
                           <div className="grid grid-cols-3 gap-x-3">
                              {colorOptions.map((color) => (
                                 <button
                                    key={color.value}
                                    className={`justitfy-center flex items-center rounded-2xl border ${
                                       selectedColor === color.value
                                          ? "border-black text-black shadow-lg"
                                          : "border-[#9DA2A7] text-[#9DA2A7]"
                                    } px-3 py-1 text-[14px] font-[400] transition-all duration-300 hover:border-black hover:text-black hover:shadow-lg`}
                                    onClick={() => handleColorChange(color)}
                                 >
                                    {color.label}
                                 </button>
                              ))}
                           </div>
                        </div>
                        {/* size  */}
                        <div className="p flex items-center gap-x-2">
                           <p className="text-[16px] font-[600] text-[#353535] ">
                              Choose Size :
                           </p>
                           <div className="grid grid-cols-3 gap-x-2 pl-5 md:grid-cols-5">
                              {sizeOptions.map((size) => (
                                 <button
                                    key={size.value}
                                    className={`justitfy-center flex flex-col items-center rounded-2xl border ${
                                       selectedSize === size.value
                                          ? "border-black text-black shadow-lg"
                                          : "border-[#9DA2A7] text-[#9DA2A7]"
                                    } px-3 py-1 text-center text-[14px] font-[400] transition-all duration-300 hover:border-black hover:text-black hover:shadow-lg`}
                                    onClick={() => handleSizeChange(size)}
                                 >
                                    {size.label}
                                 </button>
                              ))}
                           </div>
                        </div>
                           <p className="text-[#353535] font-[300] text-[11px]">
                           *for size xxl will be charged an additional fee of Rp. 10,000
                           </p>
                     </div>

                     <div className="flex gap-x-5 pt-8">
                        <Select
                           isClearable={isClearable}
                           options={options}
                           placeholder="QTY"
                        />
                        <button className="rounded-lg bg-[#BA704F] px-20 py-1 text-white">
                           Purchase
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
