export default function page() {
    return (
        <>
            {/* anagata cabinet header  */}
            <section className="flex px-20 py-10 justify-center items-center bg-[#e5e5e5]">
                <div className="flex gap-16 justify-center items-center">
                    <div className="w-[200px] h-[200px] bg-white flex justify-center items-center rounded-lg">
                        foto
                    </div>
                    <div className="border-l-4 pl-4 border-green-600 flex flex-col">
                        <h1 className="text-[3rem] font-bold">
                            ANAGATA CABINET
                        </h1>
                        <p className="text-[1.4rem]">"BE STRONG ONE DETERMINATION"</p>
                        <p className="text-[0.8rem]">PUFA COMPUTING PERIOD 2023/2024</p>
                    </div>
                </div>
            </section>

            {/* logo philosophy */}
            <section className="flex px-20 py-10 justify-center items-center border">
                <div className="bg-red-100 p-2 flex flex-col justify-center gap-16">

                    <div className="bg-blue-100">
                        <h1 className="font-bold text-[2rem] text-center">LOGO PHILOSOPHY</h1>
                    </div>

                    <div className="flex flex-col gap-16">
                        <div className="flex gap-4 relative left-[-2rem]">
                            <div className="w-[150px] h-[150px] bg-green-400 rounded-lg">

                            </div>

                            <h1 className="text-green-600 font-bold text-[1.2rem] self-center border-2 border-orange-400 px-4 py-2 rounded-lg">LETTER "A"</h1>

                            <h1 className="self-center font-bold text-[1.2rem] text-green-600">Our letter "A" that represents our cabinet name is "ANAGATA".</h1>
                        </div>
                        
                        <div className="flex gap-4 left-[2rem] relative">
                            <div className="w-[150px] h-[150px] bg-green-400 rounded-lg">

                            </div>

                            <h1 className="text-green-600 font-bold text-[1.2rem] self-center border-2 border-orange-400 px-4 py-2 rounded-lg">BRIDGES & 25 PILLARS</h1>

                            <h1 className="self-center font-bold text-[1.2rem] text-green-600">Our letter "A" that represents our cabinet name is "ANAGATA".</h1>
                        </div>

                        <div className="flex gap-4 relative left-[-2rem]">
                            <div className="w-[150px] h-[150px] bg-green-400 rounded-lg">

                            </div>

                            <h1 className="text-green-600 font-bold text-[1.2rem] self-center border-2 border-orange-400 px-4 py-2 rounded-lg">SUN</h1>

                            <h1 className="self-center font-bold text-[1.2rem] text-green-600">Our letter "A" that represents our cabinet name is "ANAGATA".</h1>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}