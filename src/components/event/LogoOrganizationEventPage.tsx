import React from "react";

/**
 * LogoOrganizationEventPage component displays an organization's logo and title.
 *
 * @component
 * @example
 * // Example usage of LogoOrganizationEventPage component
 * <LogoOrganizationEventPage
 *    image="path/to/image.jpg"
 *    title="Event Organization Name"
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.image - The path to the organization's logo image.
 * @param {string} props.title - The title or name of the organization.
 * @returns {JSX.Element} React component
 */

interface LogoOrganizationEventPageProps{
    image: string;
    title: string; 
}

export default function LogoOrganizationEventPage({
    image,
    title
}:LogoOrganizationEventPageProps) {
   return (
         <div className="flex flex-col gap-5 items-center justify-center">
            <div className="w-[100px] h-[100px] bg-transparent rounded-xl">
               <img
                  className="w-full h-full object-cover rounded-lg"
                  src={image}
                  alt={`${title}'s image`}
               />
            </div>
            <div className="font-bold text-center text-sm">{title}</div>
         </div>
   );
}