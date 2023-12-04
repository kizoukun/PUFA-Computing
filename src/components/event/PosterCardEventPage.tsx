import Link from "next/link";

interface PosterCardEventPageProps{
  link: string;
  image: string;
  alt: string;
}

export default function PosterCardEventPage({
  link,
  image,
  alt
}:PosterCardEventPageProps) {
   return (
      <Link href={`${link}`}>
         <div className="h-[19rem] w-[15rem] rounded-xl hover:scale-105 hover:shadow-md transition duration-300">
            <img
               className="w-full h-full object-cover bg-center rounded-xl"
               src={image}
               alt={alt}
            />
         </div>
      </Link>
   );
}
