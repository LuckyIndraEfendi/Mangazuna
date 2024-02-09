import BreadcumbPath from "@/components/ui/BreadcumbPath";
import AnotherCard from "@/components/AnotherCard";
import { fetchKomik } from "@/action/fetchKomik";
import Loadmore from "@/components/Loadmore";
import Navbar from "@/components/Navbar";
import siteMetadata from "@/lib/seo/siteMetadata";
type DataFetch = {
  title: string;
  image: string;
  details_id: string;
  rating: string;
};

export async function generateMetadata() {
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
      images: [siteMetadata.socialBanner],
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

const page = async () => {
  const getData = await fetchKomik("manhwa", 1);
  return (
    <>
      <Navbar />
      <div className="w-[90%] m-auto mb-32">
        <BreadcumbPath />
        <div className="">
          <div className="title mt-5">
            <h1 className="text-white text-2xl sm:text-3xl">Manhwa</h1>
          </div>
        </div>
        <div
          className={`contentManhwa grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 mt-5`}
        >
          {getData?.data?.map((item: DataFetch, i: number) => (
            <AnotherCard index={i} data={item} key={i} />
          ))}
        </div>
        <Loadmore />
      </div>
    </>
  );
};

export default page;
