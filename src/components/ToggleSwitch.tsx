import React from "react";

interface ToggleSwitchProps {
   selectedContent: string;
   handleToggleChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
   selectedContent,
   handleToggleChange,
}) => {
   return (
      <div className="pb-2">
         <label  el
            htmlFor="switchOption"
            className="inline-flex cursor-pointer items-center rounded-full p-2 gap-1 px-4 text-gray-800"
         >
            <input
               id="switchOption"
               type="checkbox"
               className="peer hidden"
               onChange={handleToggleChange}
               checked={selectedContent === "mission"}
            />
            <span
               className={`flex h-full W-3/4 items-center justify-center text-lg rounded-xl font-medium ${
                  selectedContent === "vision"
                     ? "bg-blue-400 text-white px-5"
                     : "bg-gray-300 text-gray-600 px-5"
               }`}
            >
               Vision
            </span>
            <span
               className={`flex h-full w-3/4 items-center justify-center text-lg rounded-xl font-medium ${
                  selectedContent === "mission"
                     ? "bg-blue-400 text-white px-5"
                     : "bg-gray-300 text-gray-600 px-5"
               }`}
            >
               Mission
            </span>
         </label>
      </div>
   );
};

export default ToggleSwitch;
