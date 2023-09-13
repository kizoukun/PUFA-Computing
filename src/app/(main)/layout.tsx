import Navbar from "@/components/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
   //navbar
   
  <div className="bg-black font-inter">
   <Navbar/>
      {children}
  </div>
  );
}
