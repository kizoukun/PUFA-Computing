import Navbar from "@/components/Navbar";

export default async function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
<<<<<<< HEAD
  return(
   //navbar
   
  <div className=" font-inter">
   <Navbar/>
      {children}
  </div>
  );
=======
   return (
      //navbar

      <div className="bg-black font-inter">
         <Navbar />
         {children}
      </div>
   );
>>>>>>> d0600b905eb0bd81fd0f776e4c2a78ae7360209c
}
