import Seperator from "@/components/Seperator";

export default function MerchPage() {
   return (
      <main className="p-5 md:p-24 bg-gray-50">
         <div className="max-w-7xl mx-auto gap-8">
            <div className="bg-white rounded-lg shadow-lg p-3">
               <div>
                  <img
                     src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png"
                     alt="T-Shirt"
                     className="mx-auto h-96 rounded-lg"
                  />
               </div>
               <h1 className="text-2xl font-bold">About YOOOOOOO</h1>
               <Seperator className="my-4" />
               <p className="font-bold text-lg">Deskripsi</p>
               <div className="ml-2">
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
               </div>
               <Seperator className="my-4" />
               <p className="font-bold text-lg">Rp. 100,000</p>
               <Seperator className="my-4" />
               <Seperator className="my-4" />
               <button className="bg-blue-500 hover:bg-blue-600 p-3 text-white rounded-lg duration-200">
                  Add To Cart
               </button>
            </div>
         </div>
      </main>
   );
}
