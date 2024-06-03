import { fetchRead } from "@/action/fetchKomik";
import Chapter from "./Chapter";
import siteMetadata from "@/lib/seo/siteMetadata";

export async function generateMetadata({ params }: any) {
  const id = params?.id;
  const title = params?.id
    .replace(/-/g, " ")
    .replace(/\b\w/g, (firstChar: string) => firstChar.toUpperCase());
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
      description: siteMetadata.description,
      url: `${siteMetadata.siteUrl}/komik/read/chapter/${id}`,
      siteName: title,
      images: [siteMetadata.socialBanner],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: siteMetadata.description,
      images: [siteMetadata.socialBanner],
    },
  };
}

const page = async ({ params }: any) => {
  const getReadChapter = await fetchRead(params?.id);
  const id = params?.id;
  return <Chapter dataRead={getReadChapter} id={id} />;
};

export default page;
