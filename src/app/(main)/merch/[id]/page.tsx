import Button from "@/components/Button";
import Seperator from "@/components/Seperator";

export default function MerchPage() {
   return (
      <div className="py-8">
         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="-mx-4 flex flex-col md:flex-row">
               <div className="px-4 md:flex-1">
                  <div className="mb-4 h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
                     <img
                        className="h-full w-full object-cover"
                        src="../aot.jpg"
                        alt="Product Image"
                     />
                  </div>
                  <div className="-mx-2 mb-4 flex">
                     <div className="w-1/2 px-2">
                        <Button className="border-[#705100] px-10 py-2 text-[#705100] hover:bg-[#705100] hover:text-white">
                           Add to cart
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-6 w-6"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                              />
                           </svg>
                        </Button>
                     </div>
                     <div className="flex w-1/2 items-center justify-center px-2">
                        <Button className="border-[#705100] px-10 py-2 text-[#705100] hover:bg-[#705100] hover:text-white">
                           add to cart
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-6 w-6"
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
               <div className="px-4 md:flex-1">
                  <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                     Product Name
                  </h2>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Sed sed ante justo. Integer euismod libero id mauris
                     malesuada tincidunt.
                  </p>
                  <div className="mb-4 flex">
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
                     <div className="mt-2 flex items-center">
                        <button className="mr-2 h-6 w-6 rounded-full bg-gray-800 dark:bg-gray-200"></button>
                        <button className="mr-2 h-6 w-6 rounded-full bg-red-500 dark:bg-red-700"></button>
                        <button className="mr-2 h-6 w-6 rounded-full bg-blue-500 dark:bg-blue-700"></button>
                        <button className="mr-2 h-6 w-6 rounded-full bg-yellow-500 dark:bg-yellow-700"></button>
                     </div>
                  </div>
                  <div className="mb-4">
                     <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Size:
                     </span>
                     <div className="mt-2 flex items-center">
                        <button className="hover-bg-gray-400 dark:hover-bg-gray-600 mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 dark:bg-gray-700 dark:text-white">
                           S
                        </button>
                        <button className="hover-bg-gray-400 dark:hover-bg-gray-600 mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 dark:bg-gray-700 dark:text-white">
                           M
                        </button>
                        <button className="hover-bg-gray-400 dark:hover-bg-gray-600 mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 dark:bg-gray-700 dark:text-white">
                           L
                        </button>
                        <button className="hover-bg-gray-400 dark:hover-bg-gray-600 mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 dark:bg-gray-700 dark:text-white">
                           XL
                        </button>
                        <button className="hover-bg-gray-400 dark:hover-bg-gray-600 mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 dark:bg-gray-700 dark:text-white">
                           XXL
                        </button>
                     </div>
                  </div>
                  <div>
                     <span className="font-bold text-gray-700 dark:text-gray-300">
                        Product Description:
                     </span>
                     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
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
