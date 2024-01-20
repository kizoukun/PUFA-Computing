import Link from "next/link";

export default async function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const LINKS = [
      {
         name: "Profile",
         link: "/dashboard/profile",
         icon: "fas fa-user",
      },
      {
         name: "Settings",
         link: "/dashboard/settings",
         icon: "fas fa-cog",
      },
      {
         name: "Logout",
         link: "/dashboard/logout",
         icon: "fas fa-sign-out-alt",
      },
   ];
   return (
      <div>
         <aside className="fixed bottom-0 left-0 top-0 mt-[100px] h-screen min-w-[200px] overflow-y-auto bg-white">
            <div className="p-3">
               <p className="text-lg font-bold">Dashboard</p>
               <div className="mt-4 space-y-3">
                  {LINKS.map((link, index) => (
                     <Link key={index} className="block text-[14px]" href={link.link}>
                        {link.name}
                     </Link>
                  ))}
               </div>
            </div>
         </aside>
         <main className="ml-[200px] p-3">{children}</main>
      </div>
   );
}
