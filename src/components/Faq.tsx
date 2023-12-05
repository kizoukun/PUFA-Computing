/**
 * Faq component represents a frequently asked question with a toggleable answer.
 *
 * @component
 * @example
 * // Example usage of Faq component
 * <Faq
 *    title="How to use this feature?"
 *    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 *    status="open"
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the frequently asked question.
 * @param {string} props.content - The content or answer to the frequently asked question.
 * @param {string} [props.status] - The optional status indicating whether the answer is open or closed.
 * @returns {JSX.Element} React component
 */

interface FaqProps {
   title: string;
   content: string;
   status?: string;
}

export default function Faq({ title, content, status }: FaqProps) {
   return (
      <details open={status === "open"} className="group">
         <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-black">
            <h2 className="font-medium">{title}</h2>

            <svg
               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
               />
            </svg>
         </summary>

         <p className="mt-4 px-4 leading-relaxed text-[#6B7280] ">{content}</p>
      </details>
   );
}
