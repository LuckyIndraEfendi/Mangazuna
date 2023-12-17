"use client";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { QRCodeSVG } from "qrcode.react";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
export default function PopoverCustomAnimation() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.href);
  }, []);
  const handleShare = () => {
    navigator.clipboard
      .writeText(path)
      .then(() => {
        toast.success("Copied to Clipboard");
        setIsSuccess(true);
      })
      .catch((err) => {
        toast.error("Failed to copy");
        setIsSuccess(false);
      });
  };

  return (
    <Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
      placement="right-end"
    >
      <PopoverHandler>
        <div className="  bg-[#212127] py-3 px-3 rounded-full " id="share">
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
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </div>
      </PopoverHandler>
      <PopoverContent
        placeholder=""
        className="bg-[#212127] border-none flex flex-col justify-center  ring-1 ring-gray-600"
      >
        <QRCodeSVG value={path} className="w-full" />
        {isSuccess ? (
          <button className="text-white bg-green-600 font-semibold outline-none px-3 py-1 font-karla rounded-md mt-3">
            Success
          </button>
        ) : (
          <button
            className="text-white bg-orange-500 font-semibold outline-none px-3 py-1 font-karla rounded-md mt-3"
            onClick={handleShare}
          >
            Copy to Clipboard
          </button>
        )}
      </PopoverContent>
    </Popover>
  );
}
