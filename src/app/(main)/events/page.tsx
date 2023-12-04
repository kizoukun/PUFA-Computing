
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
