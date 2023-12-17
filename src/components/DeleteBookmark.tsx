"use client";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const DeleteBookmark = ({ bookId }: { bookId: string }) => {
  const handleDeleteBookmark = async () => {
    try {
      const response = await axios.delete(`/api/mangazuna/bookmark/${bookId}`);
      const bookmark = await response.data;
      toast.success(bookmark?.message);
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  return (
    <td
      className=" cursor-pointer  text-sm  text-end"
      onClick={handleDeleteBookmark}
    >
      <MdDelete className="text-red-500 text-base sm:text-lg -right-2 relative sm:-right-7" />
    </td>
  );
};

export default DeleteBookmark;
