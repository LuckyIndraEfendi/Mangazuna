import Image from "next/image";
import { MotionDiv } from "./motion/MotionDiv";
import NavLink from "./navlink/NavLink";

type DataFetch = {
  manga_slug: string;
  banner: string;
  rating: string;
  title: string;
  has_next: {
    has_next_link: string | null;
    is_next_link: boolean;
  };
  has_prev: { has_prev_link: string | null; is_prev_link: boolean };
  total_manga: number;
};
const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const AnotherCard = ({ data, index }: { data: DataFetch; index: number }) => {
  const title =
    data.title.length > 10 ? data.title.substring(0, 15) + "..." : data.title;
  console.log(data);
  return (
    <NavLink href={`${data?.manga_slug}`}>
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
            src={data?.banner}
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
