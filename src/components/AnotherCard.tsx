import Image from "next/image";
import { MotionDiv } from "./motion/MotionDiv";
import NavLink from "./navlink/NavLink";

type DataFetch = {
  title: string;
  image: string;
  details_id: string;
  rating: string;
};
const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const AnotherCard = ({ data, index }: { data: DataFetch; index: number }) => {
  const title =
    data.title.length > 10 ? data.title.substring(0, 15) + "..." : data.title;
  return (
    <NavLink href={`/komik${data?.details_id}`}>
      <MotionDiv
        className="item group"
        variants={variant}
        animate="visible"
        initial="hidden"
        transition={{
          delay: index * 0.15,
          ease: "easeInOut",
          duration: "0.5",
        }}
        viewport={{ amount: 0 }}
      >
        <div className="images rounded-md overflow-hidden  ">
          <Image
            src={data?.image ? data?.image.replace(/\?.*$/, "") : ""}
            loading="lazy"
            alt={title}
            width={300}
            height={500}
            referrerPolicy="no-referrer"
            className="group-hover:scale-[1.01] object-cover rounded-md duration-200 cursor-pointer brightness-90 w-full h-36 sm:h-60"
          />
        </div>
        <div className="title mt-2">
          <h1 className="font-karla font-medium flex gap-1 items-center text-xs sm:text-base  text-white">
            <span className="dots bg-green-600 py-[4px] px-[4px] rounded-full block "></span>
            {title}
          </h1>
        </div>
      </MotionDiv>
    </NavLink>
  );
};

export default AnotherCard;
