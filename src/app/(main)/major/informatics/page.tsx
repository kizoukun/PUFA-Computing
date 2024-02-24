/**
 * Study Program Page Component
 *
 * This component represents the page for the study program, including information about the program,
 * future fields and careers, and details about the lecturers.
 *
 * @component
 * @example
 * // Usage of the StudyProgramPage component in another React component or page
 * import StudyProgramPage from 'path/to/StudyProgramPage';
 * // Render the component
 * <StudyProgramPage />;
 */
"use client";
import Image from "next/image";
import Banner from "@/assets/banner/banner-informatics.png";
import React, { useState } from "react";

/**
 * Study Program Page Component
 *
 * @returns {JSX.Element} - React element representing the Study Program Page.
 */
export default function StudyProgramPage() {
   // State for toggling between Vision and Mission content
   const [selectedContent, setSelectedContent] = useState("vision");

   /**
    * Handle Toggle Change
    *
    * Function to handle the toggle switch change between Vision and Mission content.
    */
   const handleToggleChange = () => {
      setSelectedContent((prevContent) =>
         prevContent === "vision" ? "mission" : "vision"
      );
   };

   // Vision and Mission content
   const visionContent = [
      "To perform high-quality education and teaching in informatics that focuses in the field of informatics or other relevant sectors",
      "To carry out research and improvement in science and in the development of science, tools, or technology related to the study of informatics.",
      "To carry out social service and empowerment in the field of informatics or other relevant sectors.",
      "To cooperate with industries, companies, government, and other institutions in the field of informatics or other relevant sectors.",
      "To promote the spirit of entrepreneurship for students focusing on Startup Business related to and supported by information technology.",
   ];

   const missionContent = ["ayam goreng sedap"];

   // List of professions
   const professions = [
      "Professional IT",
      "Professional Programmer",
      "Database Engineer",
      "Network and Security Specialist",
      "Multimedia Designer and Animator",
      "IT Manager",
      "Technopreneur",
      "Researcher and Scientist",
   ];

   return (
      <section className="mx-auto max-w-7xl ">
         {/* banner */}
         <Image
            src={Banner}
            alt="Banner Informatics"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
         />

         {/* about */}
         <div>
            <h1 className="px-10 py-2 text-[20px] font-[600] text-[#2F2F2F] md:px-0">
               About Study Program
            </h1>
            <p className="px-10 py-2 text-justify text-[20px] font-[400] text-[#6B7280] md:px-0">
               Informatics are concerned with issues related to advocating for
               users and meeting their needs within an organizational and
               societal context through the selection, creation, application,
               integration, and administration of computing technologies,
               including the installation of networks; network administration
               and security; the design of web pages; the development of
               multimedia resources; the installation of communication
               components; the oversight of e-mail systems; and the planning and
               management of the technology lifecycle by which an organization’s
               technology is maintained, upgraded, and replaced.
            </p>
         </div>

         <div className="grid grid-cols-2 py-10">
            <p className="px-10 py-2 text-[20px] font-[600] text-[#2F2F2F] md:px-0">
               Future Field and Career
            </p>

            {/* Toggle switch for Vision and Mission */}
            <label
               htmlFor="switchOption"
               className="inline-flex cursor-pointer items-center rounded-md p-2 text-gray-800 dark:text-gray-800"
            >
               <input
                  id="switchOption"
                  type="checkbox"
                  className="peer hidden"
                  onChange={handleToggleChange}
                  checked={selectedContent === "mission"}
               />
               <span
                  className={`px-4 py-2 ${
                     selectedContent === "vision"
                        ? "bg-blue-400"
                        : "bg-gray-300 dark:bg-blue-400"
                  }`}
               >
                  Vision
               </span>
               <span
                  className={`px-4 py-2 ${
                     selectedContent === "mission"
                        ? "bg-blue-400 dark:bg-gray-300"
                        : "bg-gray-300"
                  }`}
               >
                  Mission
               </span>
            </label>

            {/* List of professions */}
            <ul className="list-disc space-y-2 px-4 py-2 text-[#6B7280]">
               {professions.map((profession, index) => (
                  <li key={index}>{profession}</li>
               ))}
            </ul>

            {/* Content based on the selected toggle */}
            <div className="rounded-2xl border border-[#3C99DC] bg-white py-2">
               <ul className="list-disc space-y-2 px-10 py-2 text-justify text-[#6B7280]">
                  {selectedContent === "vision"
                     ? visionContent.map((item, index) => (
                          <li key={index}>{item}</li>
                       ))
                     : missionContent.map((item, index) => (
                          <li key={index}>{item}</li>
                       ))}
               </ul>
            </div>
         </div>

         {/* lecture */}
         <div>
            <h1 className="px-10 py-2 text-[20px] font-[600] text-[#2F2F2F] md:px-0">
               Lecturer
            </h1>
            {/* dean and head of study program */}
            <div className="grid grid-cols-2"></div>
         </div>
      </section>
   );
}
