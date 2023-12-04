
export default function EventsPage() {
  return (
    <div>
    
      {/* // title gray thingy */}
      <section className="p-10 px-[10rem] bg-gray-100">
        <div className="flex flex-col border-l-4 border-[#FF6F22] pl-5">
          <h1 className="text-[2rem] font-black">Computing Events</h1>
          <p className="text-[0.8rem]">The latest news about research, technology, achievements, and campus life.</p>
        </div>
      </section>

      {/* event highlights */}
      <section className="px-[10rem] py-[3rem]">
        <h1 className="font-bold text-[1.2rem] mb-5">Highlights</h1>
  
        <div className="h-auto flex w-auto items-center justify-between mt-16">
          <div className="inline-flex items-center mt-5">
            <div className="border-[#E50D0D] border rounded-lg w-[32rem] h-[17rem] relative flex">
              <div className="w-[50%]"></div>
              <div className="w-[50%]"></div>
            </div>
            <div className="bg-red-400 rounded-lg h-[19rem] w-[15rem] absolute"></div>
          </div>
          <div className="inline-flex items-center mt-5">
            <div className="border-[#E50D0D] border rounded-lg w-[32rem] h-[17rem] relative flex">
              <div className="w-[50%]"></div>
              <div className="w-[50%]"></div>
            </div>
            <div className="bg-red-400 rounded-lg h-[19rem] w-[15rem] absolute"></div>
          </div>
        </div>
  
        <div className="h-auto flex w-auto items-center justify-between mt-16">
          <div className="inline-flex items-center mt-5">
            <div className="border-[#E50D0D] border rounded-lg w-[32rem] h-[17rem] relative flex">
              <div className="w-[50%]"></div>
              <div className="w-[50%]"></div>
            </div>
            <div className="bg-red-400 rounded-lg h-[19rem] w-[15rem] absolute"></div>
          </div>
          <div className="inline-flex items-center mt-5">
            <div className="border-[#E50D0D] border rounded-lg w-[32rem] h-[17rem] relative flex">
              <div className="w-[50%]"></div>
              <div className="w-[50%]"></div>
            </div>
            <div className="bg-red-400 rounded-lg h-[19rem] w-[15rem] absolute"></div>
          </div>
        </div>
      </section>

      {/* event categories kkkkkkkkkkk */}
      <section className=" py-5 mt-[5rem]">
        <h1 className="font-bold text-[1.2rem] mb-10 px-[10rem]">Event Categories</h1>
        <div className="border-t-2 border-b-2 border-gray-200 h-[16rem] flex items-center justify-between px-[10rem]">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-[8rem]">
              <div className="flex flex-col gap-5 items-center justify-center">
                <div className="w-[100px] h-[100px] bg-black rounded-xl"></div>
                <div>logoText.xyz</div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center">
                <div className="w-[100px] h-[100px] bg-black rounded-xl"></div>
                <div>logoText.xyz</div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center">
                <div className="w-[100px] h-[100px] bg-black rounded-xl"></div>
                <div>logoText.xyz</div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center">
                <div className="w-[100px] h-[100px] bg-black rounded-xl"></div>
                <div>logoText.xyz</div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center">
                <div className="w-[100px] h-[100px] bg-black rounded-xl"></div>
                <div>logoText.xyz</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* all events part */}
      <section className="px-[10rem] py-[5rem]">
        <h1 className="text-[1.2rem] font-bold mb-[5rem]">All Events</h1>
        <div className="flex flex-col gap-10">
          {/* 1 */}
          <div className="flex justify-between items-center gap-[2.5rem] ">
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
          </div>
          {/* 2 */}
          <div className="flex justify-between items-center gap-[2.5rem] ">
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
          </div>
          {/* 3 */}
          <div className="flex justify-between items-center gap-[2.5rem] ">
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
            <div className="h-[19rem] w-[15rem] bg-red-400 rounded-xl"></div>
          </div>
        </div>

      </section>

      {/* pagination thing */}
      <section className="px-[10rem] py-[4rem]">
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
    
    </div>
  )
}
