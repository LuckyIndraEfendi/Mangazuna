"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { MotionDiv } from "../motion/MotionDiv";
import "swiper/css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavLink from "../navlink/NavLink";
const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
type DataFetch = {
  details_id: string;
  images: string;
  rating: string;
  title: string;
};
const CarouselDetails = ({
  komikLainnya,
  id,
}: {
  komikLainnya: any;
  id: string;
}) => {
  const path = usePathname();
  useEffect(() => {
    return () => localStorage.setItem("daftarChapter", path);
  }, [path]);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {komikLainnya?.map((item: DataFetch, i: number) => (
        <SwiperSlide key={i}>
          <NavLink href={`/komik${item?.details_id}`}>
            <MotionDiv
              className="item sm:px-1 group"
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
              <div className="images rounded-md overflow-hidden h-40 sm:h-60">
                <Image
                  src={item.images ? item.images.replace(/\?.*$/, "") : ""}
                  alt=""
                  priority={true}
                  width={300}
                  height={300}
                  referrerPolicy="no-referrer"
                  className="group-hover:scale-105 object-cover duration-200 cursor-pointer brightness-90 w-64 h-40 sm:h-60"
                />
              </div>
              <div className="title mt-2">
                <h1 className="font-karla font-medium flex gap-2 items-center text-xs sm:text-base  text-white">
                  <span className="dots bg-green-600 py-[4px] px-[4px] rounded-full block "></span>
                  {item.title.length > 10
                    ? item.title.substring(0, 15) + "..."
                    : item.title}
                </h1>
              </div>
            </MotionDiv>
          </NavLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselDetails;
