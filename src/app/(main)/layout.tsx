import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="flex min-h-screen flex-col scroll-smooth">
         <Navbar />
         <div className="flex-1 bg-[#FBFBFB]">{children}</div>
         <Footer />
      </div>
   );
}
