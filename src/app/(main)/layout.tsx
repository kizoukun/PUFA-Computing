import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="scroll-smooth">
         <Navbar />
         <div className="bg-[#FBFBFB]">{children}</div>
         {/* <Footer /> */}
      </div>
   );
}
