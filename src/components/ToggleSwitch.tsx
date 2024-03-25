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
         <label
            htmlFor="switchOption"
            className="inline-flex cursor-pointer items-center gap-1 rounded-full text-gray-800"
         >
            <input
               id="switchOption"
               type="checkbox"
               className="peer hidden"
               onChange={handleToggleChange}
               checked={selectedContent === "mission"}
            />
            <span
               className={`W-3/4 flex h-full items-center justify-center rounded-xl text-lg font-medium ${
                  selectedContent === "vision"
                     ? "bg-blue-400 px-5 text-white"
                     : "bg-gray-300 px-5 text-gray-600"
               }`}
            >
               Vision
            </span>
            <span
               className={`flex h-full w-3/4 items-center justify-center rounded-xl text-lg font-medium ${
                  selectedContent === "mission"
                     ? "bg-blue-400 px-5 text-white"
                     : "bg-gray-300 px-5 text-gray-600"
               }`}
            >
               Mission
            </span>
         </label>
      </div>
   );
};

export default ToggleSwitch;
