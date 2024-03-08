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
import ListCard from "@/components/major/ListCard";
import ListVisionAndMissionCard from "@/components/major/ListVisionAndMissionCard";
import LectureCard from "@/components/major/LectureCard";
import ToggleSwitch from "@/components/ToggleSwitch";

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
   const visionContent: string[] = [
      "In the year 2022 to become the center of education and development of science and technology of information systems that excel in Indonesia, able to compete globally, and play an active role in supporting the industry.",
   ];

   const missionContent: string[] = [
      "Organizing education and teaching in the field of science and technology of information systems, especially in enterprise-level, which are of high quality.",
      "Conducting research and development in the field of science and technology of information systems, especially in the level of the enterprise, that supports the needs of the industry with high quality",
      "Carrying out community service and empowerment activities related to the field of information systems, especially at the enterprise level.",
      "Cooperating with industries, companies, government, and other institutions in the field of information systems, especially at the enterprise level.",
   ];

   // List of professions
   const professions: string[] = [
      "CIO (Chief Information Officer)",
      "Database Administrator",
      "System Analyst",
      "Information System Project Manager",
      "Information System Auditor",
      "Network Designer",
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
            <p className="px-10 py-2 text-justify text-[16px] font-[400] text-[#6B7280] md:px-0 md:text-[20px]">
               Information System Study Program has strong connections with
               information science, computer science, business, and technology
               as well as with project management. Bachelor in Information
               Systems cover topics such as: programming, databases, computer
               network, business process analysis, information system project
               management, accounting, enterprise resource planning, enterprise
               system, information system analysis and design, testing and
               implementation, e-commerce, e-business software technologies,
               web, and interactive media design.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
               <p className="px-10 py-2 text-[20px] font-[600] text-[#2F2F2F] md:px-0">
                  Future Field and Career
               </p>
               {/* List of professions */}
               <ListCard content={professions} />
            </div>
            <div>
               {/* Toggle switch for Vision and Mission */}
               <ToggleSwitch
                  selectedContent={selectedContent}
                  handleToggleChange={handleToggleChange}
               />

               {/* Content based on the selected toggle */}
               <ListVisionAndMissionCard
                  selectedContent={selectedContent}
                  visionContent={visionContent}
                  missionContent={missionContent}
               />
            </div>
         </div>

         {/* lecture */}
         <div>
            <h1 className="px-10 py-2 text-[20px] font-[600] text-[#2F2F2F] md:px-0">
               Lecturer
            </h1>
            {/* dean and head of study program */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Ir. Rila Mandala, M.Eng., Ph.D."
                  position="Dean School of Computing"
               />
               <LectureCard
                  image="/lecture/information system/Rikip Ginanjar, M.Sc..png"
                  name="Rikip Ginanjar, M.Sc."
                  position="Head of Study Programme"
               />
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:py-2 lg:grid-cols-5">
               <LectureCard
                  image="/lecture/information system/Sandy Darmowinoto, B.Sc.(Hons), M.IT..png"
                  name="Sandy Darmowinoto, B.Sc.(Hons), M.IT."
               />
            </div>
         </div>
      </section>
   );
}
