import Link from "next/link";
import Image from "next/image";
import Synopsis from "@/components/Synopsis";
import Bookmark from "@/components/Bookmark";
import CarouselDetails from "@/components/swiper/CarouselDetails";
import PopoverCustomAnimation from "@/components/ui/PopOver";
import { getServerSession } from "next-auth";
import "./style.css";
import NavLink from "@/components/navlink/NavLink";
import { detailsDataProps } from "./dataType";
const Details = async ({
  dataDetails,
  id,
}: {
  dataDetails: detailsDataProps;
  id: string;
}) => {
  const session = await getServerSession();
  const images = dataDetails?.data?.banner
    ? dataDetails?.data?.banner.replace(/\?.*$/, "")
    : "";
  const title = dataDetails?.data?.title;
  return (
    <div className="">
      <NavLink href="/">
        <div className="arrowBack absolute top-2 left-2 z-10 px-3 py-3 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
      </NavLink>
      <div className="">
        <div className="relative">
          <Image
            className="banner h-[40vh] object-cover w-full bg-no-repeat bg-cover bg-center bg-blend-darken brightness-75"
            src={dataDetails?.data?.banner}
            alt={"test"}
            referrerPolicy="no-referrer"
            width={150}
            height={150}
            priority={true}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          ></div>
        </div>
        <div className="w-[95%] m-auto relative -top-32 ">
          <div className="mangaInfo">
            <div className="sm:grid flex gap-4 items-center flex-col  justify-center  sm:grid-cols-8">
              <div className="images flex justify-center sm:block sm:col-span-1">
                <Image
                  src={images}
                  alt={"test"}
                  className="sm:w-full w-44  rounded-md"
                  referrerPolicy="no-referrer"
                  width={150}
                  height={150}
                  priority={true}
                />
              </div>
              <div className="py-2  flex flex-col sm:col-span-7">
                <h5 className="font-karla text-white text-lg font-medium text-slate-200 text-center sm:text-start">
                  {title}
                </h5>

                <h1 className="font-outfit text-3xl text-center sm:text-start text-white">
                  {title}
                </h1>
                <h3 className="font-karla text-white text-xl text-slate-200 mt-2 text-center sm:text-start">
                  {title}
                </h3>
                <ul className="flex gap-3 mt-3 justify-center sm:justify-start flex-wrap">
                  <li className="bg-orange-400 text-white font-karla px-2 py-[2px] rounded-md font-semibold">
                    {dataDetails?.data?.chapter_list?.length} Chapter
                  </li>
                  <li className="bg-orange-400 text-white font-karla px-2 py-[2px] rounded-md font-semibold">
                    {dataDetails?.data?.rating}
                  </li>
                  <li className="bg-orange-400 text-white font-karla px-2 py-[2px] rounded-md font-semibold">
                    {dataDetails?.data?.type}
                  </li>
                  <li className="bg-orange-400 text-white font-karla px-2 py-[2px] rounded-md font-semibold">
                    {dataDetails?.data?.published}
                  </li>
                  <li className="bg-orange-400 text-white font-karla px-2 py-[2px] rounded-md font-semibold">
                    {dataDetails?.data?.bookmark_users} Bookmarked
                  </li>
                  <li className="bg-orange-400 text-white font-karla px-2 py-[2px] rounded-md font-semibold">
                    {dataDetails?.data?.author} Author
                  </li>
                  <li className="bg-orange-400 text-white font-karla px-2 py-[2px] rounded-md font-semibold">
                    {dataDetails?.data?.total_chapter}
                  </li>
                </ul>
                <Synopsis synopsis={dataDetails?.data?.description} />
              </div>
            </div>
            <div className="mt-4 flex gap-5 items-center flex-col sm:flex-row ">
              <NavLink
                href={`/read${
                  dataDetails?.data?.chapter_list?.[
                    dataDetails?.data?.chapter_list.length - 1
                  ]?.chapter_slug
                }`}
              >
                <div className="continue  bg-white py-2 px-3 rounded-full flex ">
                  <div className="flex items-center gap-2 justify-center w-44">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>

                    <span className="text-gray-800 font-medium">Read Now</span>
                  </div>
                </div>
              </NavLink>

              <div className="moreIcon flex gap-2  ">
                <Bookmark
                  image={images}
                  rating={dataDetails?.data?.rating}
                  title={title}
                  totalChapter={dataDetails?.data?.chapter_list.length}
                  session={session}
                />
                <PopoverCustomAnimation />
              </div>
            </div>
          </div>

          <div id="episode" className="mt-10">
            <div className="episodes flex gap-3 justify-between">
              <div className="title flex items-center gap-6">
                <h1 className="font-karla text-2xl font-semibold text-white">
                  Episodes
                </h1>
                <div className="reload mt-1 hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
              </div>
              <div className="server">
                <div className="select">{/*  */}</div>
              </div>
            </div>
          </div>

          <div id="episodeList" className="mt-6">
            <ul
              className={`${
                dataDetails?.data?.chapter_list?.length
                  ? "h-[50vh]"
                  : "h-[80vh]"
              } overflow-y-scroll `}
              id="customScrollThumb"
            >
              {dataDetails?.data?.chapter_list.map(
                (
                  item: {
                    chapter_title: string;
                    chapter_release: string;
                    chapter_slug: string;
                  },
                  i: number
                ) => (
                  <NavLink href={`/read${item.chapter_slug}`} key={i}>
                    <li className="flex justify-between px-5 py-3 font-karla text-lg bg-[#141519] text-white cursor-pointer hover:bg-[#17191d] visited:text-yellow-700">
                      <div className="flex gap-4">
                        <span>{item.chapter_title}</span>
                      </div>
                      <span className="text-base text-slate-200 hidden sm:block">
                        {item?.chapter_release}
                      </span>
                    </li>
                  </NavLink>
                )
              )}
            </ul>
          </div>

          <div id="recomendation" className="sm:mt-5 mt-10">
            <div className="title">
              <div className="title flex items-center gap-6">
                <h1 className="font-karla text-2xl font-semibold text-white">
                  Manhwa Lainnya
                </h1>
              </div>
            </div>
            <div className="mt-6">
              <CarouselDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
