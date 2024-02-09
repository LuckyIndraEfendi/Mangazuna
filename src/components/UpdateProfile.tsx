"use client";
import { FaPaintBrush } from "react-icons/fa";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
const UpdateProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const updateFeatured = () => {
    toast("This feature still under maintenance", {
      icon: "🛠️",
    });
  };
  return (
    <>
      <button
        onClick={updateFeatured}
        className="ring-1 flex items-center gap-2 ring-white px-3 py-1 rounded-md text-white absolute right-8"
      >
        <FaPaintBrush />
        <span>Edit</span>
      </button>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder=""
        className="bg-[#272525]"
      >
        <h1 className="text-white font-karla px-5 mt-5 text-2xl font-bold">
          <strong>Edit User Profile</strong>
        </h1>
        <DialogBody placeholder="">
          <form>
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent mt-5 w-full outline-none focus:ring-2 focus:ring-gray-400 rounded-sm ring-1 ring-gray-400 py-2 px-4 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent mt-5 w-full outline-none focus:ring-2 focus:ring-gray-400 rounded-sm ring-1 ring-gray-400 py-2 px-4 text-white"
            />
            <input
              type="text"
              placeholder="Bio"
              className="bg-transparent mt-5 w-full outline-none focus:ring-2 focus:ring-gray-400 rounded-sm ring-1 ring-gray-400 py-2 px-4 text-white"
            />
          </form>
          <div className="flex justify-end gap-4">
            <button
              className="bg-[#ee3f28] py-1 mt-5 px-3 font-karla text-white font-bold rounded-md"
              onClick={handleOpen}
            >
              Cancel
            </button>
            <button className="bg-[#22c922] py-1 mt-5 px-3 font-karla text-white font-bold rounded-md">
              Save
            </button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default UpdateProfile;
