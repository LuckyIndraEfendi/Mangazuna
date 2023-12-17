import { fetchDetail } from "@/action/fetchKomik";
import Details from "./Details";
import { detailsDataProps } from "./dataType";

import siteMetadata from "@/lib/seo/siteMetadata";

export async function generateMetadata({ params }: any) {
  const { id } = params;
  const getData: detailsDataProps = await fetchDetail(id);
  const title = id
    ? id
        .replace(/-/g, " ")
        .replace(/\b\w/g, (firstChar: string) => firstChar.toUpperCase())
    : "";
  return {
    title: title,
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
      title: title,
      description: getData.synopsis.slice(0, 300),
      url: `${siteMetadata.siteUrl}/komik/details/${id}`,
      siteName: title,
      images: [getData.images],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: siteMetadata.description,
      images: [getData.images],
    },
  };
}

const page = async ({ params }: any) => {
  const { id } = params;
  const getData: detailsDataProps = await fetchDetail(id);
  return <Details dataDetails={getData} id={id} />;
};

export default page;
