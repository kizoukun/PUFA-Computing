// components/ScrollIndicator.tsx
import { useEffect, useState } from "react";

const ScrollIndicator: React.FC = () => {
   const [scrollPercentage, setScrollPercentage] = useState<number>(0);

   useEffect(() => {
      const onScroll = () => {
         const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
         const currentScroll = window.scrollY;
         const scrollPct = (currentScroll / scrollHeight) * 100;
         setScrollPercentage(scrollPct);
      };

      window.addEventListener("scroll", onScroll);
      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, []);

   return (
      <div className="fixed right-0 top-0 h-1 w-1/4 bg-blue-500">
         <div
            className="h-1 bg-blue-700"
            style={{ width: `${scrollPercentage}%` }}
         ></div>
      </div>
   );
};

export default ScrollIndicator;
