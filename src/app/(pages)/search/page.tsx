import BreadcumbPath from "@/components/ui/BreadcumbPath";
import { fetchMangaByAdvSearch, fetchSearch } from "@/action/fetchKomik";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/motion/MotionDiv";
import siteMetadata from "@/lib/seo/siteMetadata";
type DataFetch = {
  title: string;
  banner: string;
  manga_slug: string;
  rating: string;
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: any;
}) {
  const query = searchParams?.q;
  const getData = await fetchMangaByAdvSearch("", 1, query);
  const ogImage = await getData?.data?.slice(0, 1).map((img: any) => {
    return img.banner ? img.banner : siteMetadata.socialBanner;
  });
  return {
    title: `${siteMetadata.title}`,
    description: siteMetadata.description,
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.png",
      },
    ],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      images: [ogImage[0]],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.title,
      description: siteMetadata.description,
      images: [siteMetadata.socialBanner],
    },
  };
}

const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const page = async ({ searchParams }: { searchParams: any }) => {
  const query = searchParams?.q;
  const getData = await fetchMangaByAdvSearch("", 1, query);
  return (
    <>
      <Navbar />
      <div className="w-[90%] m-auto mb-32">
        <BreadcumbPath />
        <div className="">
          <div className="title mt-5">
            <h1 className="text-white text-2xl sm:text-3xl font-karla">
              Search :{" "}
              <strong>
                <i>{query}</i>
              </strong>
            </h1>
          </div>
        </div>
        {getData?.data?.length === 0 ? (
          <h1 className="text-white font-karla text-2xl sm:text-3xl duration-200 text-center mt-10">
            Oops, Nothing was found 🧐
          </h1>
        ) : (
          <div
            className={`contentSearch grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 mt-10`}
          >
            {getData?.data?.map((item: DataFetch, i: number) => (
              <Link href={`${item?.manga_slug}`} key={i}>
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
                  <div className="images rounded-md overflow-hidden  ">
                    <Image
                      src={
                        item?.banner ? item?.banner?.replace(/\?.*$/, "") : ""
                      }
                      loading="lazy"
                      alt={item?.title}
                      width={300}
                      height={500}
                      referrerPolicy="no-referrer"
                      className="group-hover:scale-[1.01] object-cover rounded-md duration-200 cursor-pointer brightness-90 w-full h-36 sm:h-60"
                    />
                  </div>
                  <div className="title mt-2">
                    <h1 className="font-karla font-medium flex gap-1 items-center text-xs sm:text-base  text-white">
                      <span className="dots bg-green-600 py-[4px] px-[4px] rounded-full block "></span>
                      {item?.title.length > 10
                        ? item?.title.substring(0, 15) + "..."
                        : item?.title}
                    </h1>
                  </div>
                </MotionDiv>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
