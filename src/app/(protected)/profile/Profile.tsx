"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import DeleteBookmark from "@/components/DeleteBookmark";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import moment from "moment";
import { MotionDiv } from "@/components/motion/MotionDiv";
import UpdateProfile from "@/components/UpdateProfile";
import NavLink from "@/components/navlink/NavLink";
type BookmarkType = {
  id: string;
  image: string;
  rating: string;
  title: string;
  total_chapters: number;
  url: string;
  userId: string;
};
const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const Profile = () => {
  const { data, isLoading } = useSWR("/api/current-user", fetcher, {
    refreshInterval: 1000,
  });
  return (
    <>
      <Navbar />
      <div className="w-[90%] m-auto mt-14 sm:mt-10">
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-2">
          <section id="profile" className="profile px-3 relative">
            <UpdateProfile />
            <div className="image sm:flex gap-2 text-center sm:gap-5 grid justify-center sm:justify-normal">
              {isLoading ? (
                <center>
                  <div className="w-28 h-28 animate-pulse bg-[#bdb9b9] rounded-full"></div>
                </center>
              ) : (
                <center>
                  <Image
                    src={data?.image}
                    width={500}
                    height={500}
                    alt=""
                    className="rounded-full w-36 sm:w-28 sm:h-28 ring-1 ring-white py-1 px-1  "
                  />
                </center>
              )}

              <div className="py-3">
                {isLoading ? (
                  <div className=" h-5 w-28 sm:w-28 animate-pulse bg-[#bdb9b9] rounded-md"></div>
                ) : (
                  <h1 className="text-white text-center sm:text-start  font-karla text-2xl font-semibold">
                    {data?.username
                      ? data?.username
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (firstChar: string) =>
                            firstChar.toUpperCase()
                          )
                      : ""}
                  </h1>
                )}
                {isLoading ? (
                  <div className=" h-5 w-28 sm:w-32 mt-2 animate-pulse bg-[#bdb9b9] rounded-md"></div>
                ) : (
                  <span className="mt-2 block text-white font-karla text-center sm:text-start">
                    {data?.email}
                  </span>
                )}
                {isLoading ? (
                  <div className=" h-5 w-28 sm:w-36 mt-2 animate-pulse bg-[#bdb9b9] rounded-md"></div>
                ) : (
                  <span className="mt-2 block text-white font-karla text-center sm:text-start">
                    <strong>
                      ROLE : <i>{data?.role}</i>
                    </strong>
                  </span>
                )}
              </div>
            </div>
            {isLoading ? (
              <div className=" h-5 w-56 mt-4  animate-pulse bg-[#bdb9b9] rounded-md"></div>
            ) : (
              <h1 className="text-white font-karla mt-4 sm:mt-5">
                Created At : {moment(data?.createdAt).format("MMMM Do YYYY")}
              </h1>
            )}

            <h1 className="mt-3 text-white font-karla mb-1 font-bold">Bio</h1>
            {isLoading ? (
              <div className=" h-20 w-full sm:w-56 mt-4  animate-pulse bg-[#bdb9b9] rounded-md"></div>
            ) : (
              <textarea
                value={data?.bio}
                disabled
                className="ring-1 w-full sm:w-1/2 pb-5  hover:cursor-text px-3  py-2 ring-gray-500 bg-transparent resize-none rounded-md outline-none text-gray-300 text-sm placeholder:text-white"
              ></textarea>
            )}
          </section>
          <section id="bookmark" className="bookmark">
            <h1 className="text-white font-karla  text-xl font-medium">
              <strong>Bookmark</strong>
            </h1>
            {isLoading ? (
              <div className=" h-52 w-full mt-4  animate-pulse bg-[#bdb9b9] rounded-md"></div>
            ) : (
              <div className="bookmarkItem grid gap-11  mt-4 py-3 px-3 rounded-md bg-[rgba(102,104,104,0.2)]">
                <table className="bg-secondary rounded-lg">
                  <thead>
                    <tr>
                      <th className="font-bold text-xs md:text-sm py-3 text-start pl-2 sm:pl-5 lg:w-[75%] w-[65%] text-white">
                        Title
                      </th>
                      <th className="font-bold text-xs px-1 sm:px-5 md:text-sm py-3   text-white">
                        Score
                      </th>
                      <th className="font-bold text-xs px-1 sm:px-5 md:text-sm py-3  text-white">
                        Chapters
                      </th>
                      <th className="font-bold text-xs px-1 sm:px-5 md:text-sm py-3  text-white">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {data?.bookmarks?.map((item: BookmarkType, i: number) => (
                      <tr
                        className="hover:bg-[rgba(255,255,255,.1)] duration-150 ease-in-out group relative"
                        key={item?.id}
                      >
                        <td className="font-medium py-2 pl-2 rounded-l-lg">
                          <MotionDiv
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
                            <NavLink href={item?.url}>
                              <div className="image cursor-pointer  flex items-center gap-3 font-karla">
                                <Image
                                  src={item?.image}
                                  alt=""
                                  height={500}
                                  width={500}
                                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-md object-cover"
                                />
                                <span className="text-white text-xs sm:text-sm">
                                  {item.title.length > 10
                                    ? item.title.substring(0, 15) + "..."
                                    : item.title}
                                </span>
                              </div>
                            </NavLink>
                          </MotionDiv>
                        </td>
                        <td className="text-center  text-sm text-white font-karla">
                          {item?.rating}
                        </td>
                        <td className="text-center text-sm text-white font-karla  ">
                          {item?.total_chapters}
                        </td>
                        <DeleteBookmark bookId={item?.id} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
