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
<label
   htmlFor="switchOption"
   className="inline-flex cursor-pointer items-center rounded-full border  border-gray-300 p-2 text-gray-800 transition-all dark:border-gray-700 dark:text-gray-800"
>
   <input
      id="switchOption"
      type="checkbox"
      className="peer hidden"
      onChange={handleToggleChange}
      checked={selectedContent === "mission"}
   />
   <span
      className={`flex h-full w-3/4 items-center justify-center rounded-full text-lg font-medium ${
         selectedContent === "vision"
            ? "bg-blue-400 text-white"
            : "bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
      }`}
   >
      Vision
   </span>
   <span
      className={`flex h-full w-3/4 items-center justify-center rounded-full text-lg font-medium ${
         selectedContent === "mission"
            ? "bg-blue-400 text-white dark:bg-gray-300"
            : "bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
      }`}
   >
      Mission
   </span>
</label>
   );
};

export default ToggleSwitch;
