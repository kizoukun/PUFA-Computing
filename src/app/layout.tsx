import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
   title: {
      template: "%s | PUMA Computing",
      default: "PUMA Computing",
   },
   description: "PUMA Computing is a organization in President University",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            <NextTopLoader height={3} showSpinner={false} />
            {children}
         </body>
      </html>
   );
}
