import React from "react";

interface CompreciationCardProps {
    title: string;
    description: string;
    major: string,
    image?: string;
}

export default function CompreciationCard({
    title,
    description,
    image,
    major,
}: CompreciationCardProps) {

    const BGColor = major === 'IT' ? 'bg-[#F98866]' : major === 'IS' ? 'bg-[#336B87]' : major === 'ID' ? 'bg-[#80BD9E]' : major === "VCD" ? 'bg-[#89DA59]': 'bg-black';

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto relative">
            <div className="relative">
                <img
                    className="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                    src={image}
                />
                <div className={`absolute top-0 right-0 ${BGColor} text-white px-4 py-1 rounded-tr`}>
                    <span className="text-xs font-semibold">{major}</span>
                </div>
            </div>

            <div className="z-10 w-72 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    {title}
                </h3>
                <div className="font-bold text-gray-800 bg-gray-200 dark:bg-gray-800 py-2">
                    {description}
                </div>
            </div>
        </div>
    );
}
