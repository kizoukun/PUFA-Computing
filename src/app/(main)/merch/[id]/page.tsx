import Button from "@/components/Button";
import Seperator from "@/components/Seperator";

export default function MerchPage() {
   return (
      <div className="py-8">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
               <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                     <img
                        className="w-full h-full object-cover"
                        src="../aot.jpg"
                        alt="Product Image"
                     />
                  </div>
                  <div className="flex -mx-2 mb-4">
                     <div className="w-1/2 px-2">
                        <Button className="border-[#705100] text-[#705100] hover:bg-[#705100] hover:text-white px-10 py-2">
                           Add to cart
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                              />
                           </svg>
                        </Button>
                     </div>
                     <div className="w-1/2 px-2 flex items-center justify-center">
                        <Button className="border-[#705100] text-[#705100] hover:bg-[#705100] hover:text-white px-10 py-2">
                           add to cart 
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                              />
                           </svg>
                        </Button>
                     </div>
                  </div>
               </div>
               <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                     Product Name
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Sed sed ante justo. Integer euismod libero id mauris
                     malesuada tincidunt.
                  </p>
                  <div className="flex mb-4">
                     <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                           Price:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                           $29.99
                        </span>
                     </div>
                     <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                           Availability:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                           In Stock
                        </span>
                     </div>
                  </div>
                  <div className="mb-4">
                     <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Color:
                     </span>
                     <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                     </div>
                  </div>
                  <div className="mb-4">
                     <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Size:
                     </span>
                     <div className="flex items-center mt-2">
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover-bg-gray-400 dark:hover-bg-gray-600">
                           S
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover-bg-gray-400 dark:hover-bg-gray-600">
                           M
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover-bg-gray-400 dark:hover-bg-gray-600">
                           L
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover-bg-gray-400 dark:hover-bg-gray-600">
                           XL
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover-bg-gray-400 dark:hover-bg-gray-600">
                           XXL
                        </button>
                     </div>
                  </div>
                  <div>
                     <span className="font-bold text-gray-700 dark:text-gray-300">
                        Product Description:
                     </span>
                     <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed ante justo. Integer euismod libero id mauris
                        malesuada tincidunt. Vivamus commodo nulla ut lorem
                        rhoncus aliquet. Duis dapibus augue vel ipsum pretium,
                        et venenatis sem blandit. Quisque ut erat vitae nisi
                        ultrices placerat non eget velit. Integer ornare mi sed
                        ipsum lacinia, non sagittis mauris blandit. Morbi
                        fermentum libero vel nisl suscipit, nec tincidunt mi
                        consectetur.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
