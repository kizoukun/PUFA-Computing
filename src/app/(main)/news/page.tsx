import React from 'react'

export default function NewsPage() {
  return (
    <div>

    {/* // title gray thingy */}
      <section className="p-10 px-[10rem] bg-gray-100">
        <div className="flex flex-col border-l-4 border-[#FF6F22] pl-5">
          <h1 className="text-[2rem] font-black">Computing News</h1>
          <p className="text-[0.8rem]">The latest news about research, technology, achievements, and campus life.</p>
        </div>
      </section>

    {/* // computing news content */}
      <section className="px-[10rem] py-[2.5rem]">
        <h1 className="font-black mb-5 tracking-wide text-[1.2rem]">Latest</h1>

        {/* the big news card */}
        <div className="rounded-lg border-2 h-[25rem] w-auto flex mb-10">
          <div className="bg-red-400 w-[50%]"></div>
          <div className="p-8 w-[50%] flex flex-col justify-between">
            <h1 className="text-[1.5rem] font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
            <p className="text-[1.2rem]">In the current era, it is important for us to learn a foreign language which will be useful in the future. Nowadays, learning a foreign language is not as difficult as it was in previous times.</p>
            <div className="flex justify-between">
              <p className="text-[0.8rem]">November 26, 2023</p>
              {/* the informatics tag */}
              <div className="border-[#FF6F22] border-2 rounded-xl text-[#FF6F22] px-2">
                Informatics
              </div>
            </div>
            
          </div>
        </div>

        {/* the smallies */}
        <div className="flex gap-10">

          <div className="border-2 rounded-lg h-[21rem] w-[50%] flex flex-col">
            <div className="bg-blue-400 h-[55%]"></div>
            <div className="h-[45%] flex flex-col justify-between px-2 py-2">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold text-[1.2rem]">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="font-light text-[0.9rem]">November 26, 2023</p>
            </div>
          </div>

          <div className="border-2 rounded-lg h-[21rem] w-[50%] flex flex-col">
            <div className="bg-blue-400 h-[55%]"></div>
            <div className="h-[45%] flex flex-col justify-between px-2 py-2">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold text-[1.2rem]">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="font-light text-[0.9rem]">November 26, 2023</p>
            </div>
          </div>

        </div>


      </section>

      {/* the 6 box news computing idk */}
      <section className="px-[10rem] py-[4rem]">
        <h1 className="font-bold text-[1.2rem] mb-5">All News</h1>

        <div className="flex gap-10 my-[3.5rem]">
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 my-[3.5rem]">
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 my-[3.5rem]">
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
          <div className="border-2 rounded-lg  w-[33%] h-[21rem] flex flex-col">
            <div className="bg-green-400 h-[60%]"></div>
            <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
              <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
                Informatics
              </div>
              <h1 className="font-bold">Implementation of Artificial Intelligence in Foreign Language Learning App Duolingo</h1>
              <p className="text-[0.8rem]">November 26, 2023</p>
            </div>
          </div>
        </div>

        {/* pagination thing */}
        <section>
          <div className="flex justify-between border-t-2 border-gray-100 py-2 text-gray-400">
            <div>
              <button>Previous</button>
            </div>
            <div className="flex gap-8">
              <button className="border-t-2 border-[#3C99DC] text-[#3C99DC] w-[1.5rem]">1</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>8</button>
              <button>9</button>
              <button>10</button>
            </div>
            <div>
              <button>Next</button>
            </div>
          </div>
        </section>
      </section>

    </div>

  )
}
