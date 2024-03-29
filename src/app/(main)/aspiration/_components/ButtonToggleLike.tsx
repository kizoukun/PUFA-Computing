"use client";

import { Toast } from "@/lib/Toast";
import { AspirationLike } from "@/server/aspiration";
import { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

type ButtonToggleLikeProps = {
   aspirationLike: number;
   isLiked: boolean;
   aspirationId: string;
};

export default function ButtonToggleLike({
   aspirationLike,
   isLiked,
   aspirationId,
}: ButtonToggleLikeProps) {
   const [liked, setLiked] = useState(isLiked);
   const [likedLength, setLikedLength] = useState(aspirationLike);
   const [loading, setLoading] = useState(false);

   const toggleLike = async () => {
      setLoading(true);
      const result = await AspirationLike({ id: aspirationId });
      setLoading(false);
      if (result.error) {
         Toast.fire({
            icon: "error",
            title: result.error,
         });
         return;
      }

      const isLikedResult = result.isLiked;
      setLiked(isLikedResult as boolean);
      if (isLikedResult) {
         setLikedLength(likedLength + 1);
      } else {
         setLikedLength(likedLength - 1);
      }
   };
   return (
      <button
         onClick={toggleLike}
         className="flex items-center gap-1 text-2xl text-[#6B7280] hover:text-[#E50D0D]"
         disabled={loading}
      >
         {liked ? (
            <IoIosHeart className="text-3xl" />
         ) : (
            <IoIosHeartEmpty className="text-3xl" />
         )}
         <span className="text-xl">{likedLength}</span>
      </button>
   );
}
