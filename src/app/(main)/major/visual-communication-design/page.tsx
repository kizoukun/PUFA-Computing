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
      `Becoming the leading Visual Communication Design program in Indonesia in 2022, being able to compete globally, to adapt to advancement in computer technology and the new media of visual communication in the preservation of the richness of “Nusantara’s visual culture”.`,
   ];

   const missionContent: string[] = [
      "Building the entrepreneurial and leadership spirit within the Visual and Communication Study Program especially in the field of creativepreneurship.",
      "Delivering outstanding teaching and learning activities in the field of visual communication design which can compete at national and international level.",
      "Conducting excellent research and development in the field of of visual communication design especially to excavate the potential wealth of the visual culture of nusantara.",
      "Conducting community service and empowerment in the field of visual communication design, especially to preserve the richness of “Nusantara’s visual culture”",
   ];

   // List of professions
   const professions: string[] = [
      "Web Designer",
      "Visual Designer",
      "Graphic Designer",
      "Illustrator",
      "Creative Director",
      "Art Director",
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
               Visual Communication Design (VCD) is a major of design study
               focused on how to reflect the concept of communication using
               visual design elements that deliver messages and impressions
               toward specific purposes. Some of the elements are creative
               expression, design techniques and media observation. The purpose
               is to deliver informative, communicative and persuasive messages
               which effectively affect the user’s behavior.
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
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
                  position="Head of Study Programme"
               />
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:py-2 lg:grid-cols-5">
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Prof. Dr. Ir. Wiranto Herry Utomo, M.Kom"
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Dr. Andreas Yumarma"
               />
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Ir. Rila Mandala, M.Eng., Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Ir. Rila Mandala, M.Eng., Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Ir. Rila Mandala, M.Eng., Ph.D..png"
                  name="Ir. Rila Mandala, M.Eng., Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
               />
               <LectureCard
                  image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
                  name="Cutifa Safitri, Ph.D."
               />
            </div>
         </div>
      </section>
   );
}
