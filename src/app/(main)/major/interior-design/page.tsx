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
import Banner from "@/assets/banner/interior-design.svg";
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
      "Becoming the leading Visual Communication Design program in Indonesia in 2022, being able to compete globally, to adapt to advancement in computer technology and the new media of visual communication in the preservation of the richness of 'Nusantara’s Visual culture'.",
   ];

   const missionContent: string[] = [
      "To perform high-quality education and teaching in informatics that focuses in the field of informatics or other relevant sectors",
      "To carry out research and improvement in science and in the development of science, tools, or technology related to the study of informatics.",
      "To carry out social service and empowerment in the field of informatics or other relevant sectors.",
      "To cooperate with industries, companies, government, and other institutions in the field of informatics or other relevant sectors.",
      "To promote the spirit of entrepreneurship for students focusing on Startup Business related to and supported by information technology.",
   ];

   // List of professions
   const professions: string[] = [
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
      <section className="flex flex-col items-center space-y-12 p-[5rem] md:px-[10rem]">
         <Image
            width={1280}
            height={500}
            src={"/"}
            alt={""}
            className="rounded-lg bg-blue-400"
         />

         {/* study program description */}
         <div className="space-y-8">
            <h1 className="font-[600]">About Study Program</h1>

            <h1 className="leading-7">
               The Interior Design Study Program aims to educate students to
               create a positive influence through both the creative process and
               the engineering process. On how to produce technical design in a
               space based on the principles of robustness, usability, and
               beauty. The scope of learning interior design science covers the
               scale of a single simple building to a high-complexity building.
               President University's Interior Design Study Program is designed
               to instill the values of global competitiveness,
               interdisciplinary thinking, entrepreneurial spirit, and to also
               impart information technology skills in its students.
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
