import Navbar from "@/components/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
   //navbar
   
  <div className=" font-inter">
   <Navbar/>
      {children}
  </div>
  );
}
