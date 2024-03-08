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
import Banner from "@/assets/banner/visual-communication-design.svg";
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
      <section className="flex flex-col items-center space-y-12 p-[5rem] md:px-[10rem]">
         <Image
            width={1280}
            height={500}
            src={Banner}
            alt={""}
            className="rounded-lg bg-blue-400"
         />

         {/* study program description */}
         <div className="space-y-8">
            <h1 className="font-[600]">About Study Program</h1>

            <h1 className="leading-7">
               Visual Communication Design (VCD) is a major of design study
               focused on how to reflect the concept of communication using
               visual design elements that deliver messages and impressions
               toward specific purposes. Some of the elements are creative
               expression, design techniques and media observation. The purpose
               is to deliver informative, communicative and persuasive messages
               which effectively affect the user’s behavior.
            </h1>
         </div>

         {/* profession and future career part  */}
         <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
            <div className="space-y-4">
               <h1 className="font-[600]">Future Field and Career</h1>
               <ListCard content={professions} />
            </div>

            <div className="flex flex-col">
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

         {/* big lecturers */}
         <div className="flex flex-col gap-8">
            <h1 className="font-[600]">Lecturers</h1>
            <div className="">
               <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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
            </div>
         </div>

         <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
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
               image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
               name="Cutifa Safitri, Ph.D."
            />
            <LectureCard
               image="/lecture/informatics/Cutifa Safitri, Ph.D.png"
               name="Cutifa Safitri, Ph.D."
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
      </section>
   );
}
