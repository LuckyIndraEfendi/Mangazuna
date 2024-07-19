"use client";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import useModal from "@/hooks/useModal";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { MotionDiv } from "../motion/MotionDiv";
import "./style.css";
import NavLink from "../navlink/NavLink";
type DataFetch = {
  title: string;
  banner: string;
  manga_slug: string;
  rating: string;
};
const DialogAlert = ({ handler, open, setOpen }: any) => {
  const { setSearch, search } = useModal();
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const handleSubmitSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get("/api/mangazuna/advsearch", {
        params: {
          title: search,
        },
      });
      const data = await response.data;
      if (data?.status == "success") {
        setData(data?.data);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <Dialog
        placeholder="Dialog"
        open={open}
        size="lg"
        handler={handler}
        className="bg-transparent shadow-sm "
      >
        <DialogHeader
          className="flex sm:items-center gap-2 justify-start sm:justify-between flex-wrap"
          placeholder="Dialog Header"
        >
          <h1 className="text-lg font-normal text-white font-karla flex items-center gap-2">
            For quick access:
            <div className="">
              <span className="px-2 py-1 rounded-lg text-xs uppercase bg-[#262931]  ">
                ctrl
              </span>
              &nbsp;&nbsp;+&nbsp;&nbsp;
              <span className="px-2 py-1 rounded-lg text-xs uppercase bg-[#262931]">
                s
              </span>
            </div>
          </h1>
        </DialogHeader>
        <DialogBody className="mt-2" placeholder="Dialog Body">
          <div className="inputSearch">
            <form action="" onSubmit={handleSubmitSearch}>
              <input
                type="text"
                className="bg-[#262931] outline-none border-none text-white py-4 px-6 font-karla w-full rounded-md placeholder:text-white"
                placeholder="Search anything..."
                required
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
          {loading ? (
            <div className="bg-[#262931] flex justify-center items-center h-16 w-full mt-3 rounded-md">
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#8E9C91"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            <div
              className={`content bg-[#262931] mt-3  ${
                data.length > 3
                  ? "h-[30vh]"
                  : data.length === 0
                  ? "h-0"
                  : "h-[40vh]"
              } overflow-y-scroll  `}
              id="customScrollThumb"
            >
              <ul className="listSearch py-2">
                {data?.map((item: DataFetch, i: number) => (
                  <NavLink href={`${item?.manga_slug}`} key={i}>
                    <MotionDiv
                      className="item group"
                      variants={variant}
                      animate="visible"
                      initial="hidden"
                      transition={{
                        delay: i * 0.15,
                        ease: "easeInOut",
                        duration: "0.5",
                      }}
                      viewport={{ amount: 0 }}
                    >
                      <li className="flex gap-2 hover:bg-[#3a3e4b] cursor-pointer">
                        <div className="logo px-2 py-1">
                          <Image
                            src={item?.banner.replace(/\?.*$/, "")}
                            alt={item?.title}
                            width={500}
                            loading="lazy"
                            height={500}
                            referrerPolicy="no-referrer"
                            className="overflow-hidden w-16 h-16 object-cover rounded-md"
                          />
                        </div>
                        <div className="py-1">
                          <h3 className="font-karla text-white text-lg">
                            {item.title.length > 10
                              ? item.title.substring(0, 20) + "..."
                              : item.title}
                          </h3>
                          <p className="font-karla text-gray-200">
                            Rating :{" "}
                            <span className="text-white">{item?.rating}</span>
                          </p>
                        </div>
                      </li>
                    </MotionDiv>
                  </NavLink>
                ))}
              </ul>
              {data?.length < 3 ? (
                ""
              ) : (
                <NavLink
                  href={`/search?q=${search.toLowerCase()}`}
                  className="w-full mt-5   bottom-0 flex justify-center text-white sm:text-lg font-semibold text-center py-3 font-karla bg-[#30333d] text-base hover:bg-[#3a3e4b]"
                >
                  View More
                </NavLink>
              )}
            </div>
          )}
        </DialogBody>
      </Dialog>
    </>
  );
};

export default DialogAlert;
