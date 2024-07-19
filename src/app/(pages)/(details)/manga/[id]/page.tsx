import { fetchDetail } from "@/action/fetchKomik";
import Details from "./Details";
import { detailsDataProps } from "./dataType";

import siteMetadata from "@/lib/seo/siteMetadata";

export async function generateMetadata({ params }: any) {
  const { id } = params;
  const getData = await fetchDetail(id);
  const title = id
    ? id
        .replace(/-/g, " ")
        .replace(/\b\w/g, (firstChar: string) => firstChar.toUpperCase())
    : "";
  return {
    title: getData?.data?.title,
    description: getData?.data?.description,
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.png",
      },
    ],
    openGraph: {
      title: getData?.data?.title,
      description: getData?.data?.description?.slice(0, 300),
      url: `${siteMetadata.siteUrl}/manga/${id}`,
      siteName: getData?.data?.title,
      images: [getData?.data?.banner],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: getData?.data?.description?.slice(0, 300),
      images: [getData?.data?.banner],
    },
  };
}

const page = async ({ params }: any) => {
  const { id } = params;
  const getData = await fetchDetail(id);
  return <Details dataDetails={getData} id={id} />;
};

export default page;
