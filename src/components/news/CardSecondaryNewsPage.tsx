interface CardSecondaryNewsPageProps {
   major: string;
   image: string;
   title: string;
   date: string;
}

export default function CardSecondaryNewsPage({
   major,
   image,
   title,
   date,
}: CardSecondaryNewsPageProps) {
   return (
      <div className="border-2 rounded-lg h-[25rem] w-[50%] flex flex-col">
         <div className="bg-blue-400 h-[65%]">
            <img
               className="w-full h-full object-cover bg-center"
               src={image}
               alt={`${title}'s image`}
            />
         </div>
         <div className="h-[45%] flex flex-col justify-between px-2 py-2">
            <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
               {major}
            </div>
            <h1 className="font-bold text-[1.2rem]">{title}</h1>
            <p className="font-light text-[0.9rem]">{date}</p>
         </div>
      </div>
   );
}
