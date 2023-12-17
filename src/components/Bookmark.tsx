"use client";
import toast from "react-hot-toast";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import axios from "axios";
const Bookmark = ({
  image,
  rating,
  title,
  totalChapter,
  session,
}: {
  image: string;
  rating: string;
  totalChapter: number;
  title: string;
  session: any;
}) => {
  const { data } = useSWR("/api/current-user", fetcher);
  const pathname = usePathname();
  const handleAddBookmark = async () => {
    try {
      await axios.post("/api/mangazuna/bookmark", {
        image,
        rating,
        title,
        total_chapters: totalChapter,
        url: pathname,
        userId: data?.id,
      });
      toast.success("Success to add bookmark");
    } catch (err: any) {
      toast.error(`${err?.response?.data}`);
    }
  };
  const handleAddBookmarkWithOutSignIn = () => {
    toast.error(`You need to login before adding bookmark`);
  };
  return (
    <>
      {session ? (
        <div
          className="  bg-[#212127] py-3 px-3 rounded-full"
          id="bookmark"
          onClick={handleAddBookmark}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      ) : (
        <div
          className="  bg-[#212127] py-3 px-3 rounded-full"
          id="bookmark"
          onClick={handleAddBookmarkWithOutSignIn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Bookmark;
