import CardNormalNewsPage from "@/components/news/CardNormalNewsPage";
import CardSecondaryNewsPage from "@/components/news/CardSecondaryNewsPage";
import React from "react";

export default function NewsPage() {
   return (
      <div>
         {/* // title gray thingy */}
         <section className="bg-[#F2F2F2] p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#FF6F22] pl-5 ">
               <h1 className="text-[35px] font-[700] text-[#353535]">
                  Computing News
               </h1>
               <p className="text-[#353535] text-sm font-[500]">
                  The latest news about research, technology, achievements, and
                  campus life.
               </p>
            </div>
         </section>

         {/* // computing news content */}
         <section className="mx-auto max-w-7xl p-5 py-[3rem] md:p-10">
            <h1 className="mb-5 text-[1.2rem] font-black tracking-wide">
               Latest
            </h1>

            {/* the big news card */}
            <div className="mb-10 flex w-full flex-col rounded-lg border-2 sm:flex-row">
               <div>
                  <img
                     src="../news/duolingo.png"
                     alt="duolingo"
                     className="h-full w-[64rem] rounded-l-lg object-cover"
                  />
               </div>
               <div className="flex flex-col justify-between space-y-4 p-3 md:p-8">
                  <h1 className="text-base font-bold md:text-lg lg:text-[1.5rem]">
                     Implementation of Artificial Intelligence in Foreign
                     Language Learning App Duolingo
                  </h1>
                  <p className="text-sm md:text-base lg:text-[1.2rem]">
                     In the current era, it is important for us to learn a
                     foreign language which will be useful in the future.
                     Nowadays, learning a foreign language is not as difficult
                     as it was in previous times.
                  </p>
                  <div className="flex justify-between">
                     <p className="text-[0.8rem]">November 26, 2023</p>
                     {/* the informatics tag */}
                     <div className="rounded-xl border-2 border-[#FF6F22] px-2 text-[#FF6F22]">
                        Informatics
                     </div>
                  </div>
               </div>
            </div>

            {/* the smallies */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
               <CardSecondaryNewsPage
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
                  date="November 26, 2023"
                  image="../news/duolingo.png"
               />

               <CardSecondaryNewsPage
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
                  date="November 26, 2023"
                  image="../news/AI.png"
               />
            </div>
         </section>

         {/* All news*/}
         <section className="mx-auto max-w-7xl p-5 py-[4rem] md:p-10">
            <h1 className="mb-5 text-[1.2rem] font-bold">All News</h1>

            {/* card  */}
            <div className="my-[3.5rem] grid grid-cols-1 gap-10 md:grid-cols-3">
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
               <CardNormalNewsPage
                  image="../news/duolingo.png"
                  date="November 26, 2023"
                  major="Informatics"
                  title="Implementation of Artificial Intelligence in Foreign
               Language Learning App Duolingo"
               />
            </div>
         </section>

         {/* pagination thing */}
         <section className="mx-auto max-w-7xl p-5 py-[4rem]  md:p-10">
            <div className="flex justify-between border-t-2 border-gray-100 py-2 text-gray-400">
               <div>
                  <button>Previous</button>
               </div>
               <div className="flex gap-3">
                  <button className="w-[1.5rem] border-t-2 border-[#3C99DC] text-[#3C99DC]">
                     1
                  </button>
                  <button>2</button>
                  <button>...</button>
                  <button>9</button>
                  <button>10</button>
               </div>
               <div>
                  <button>Next</button>
               </div>
            </div>
         </section>
      </div>
   );
}
