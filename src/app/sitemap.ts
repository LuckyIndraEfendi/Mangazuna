import { fetchLastUpdated } from "@/action/fetchKomik";
import { MetadataRoute } from "next";

const MAX_PAGES = 500;

const fetchAllLatestData = async (): Promise<any[]> => {
  let allData: any[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore && page <= MAX_PAGES) {
    try {
      const response = await fetchLastUpdated(page);
      const data = response.data;

      if (data.length > 0) {
        allData = [...allData, ...data];
        page++;
      } else {
        hasMore = false; // Tidak ada lagi data untuk diambil
      }
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      hasMore = false; // Hentikan fetching jika terjadi error
    }
  }

  return allData;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allLatestComics = await fetchAllLatestData();

  const lastgenEntries: MetadataRoute.Sitemap = allLatestComics?.map(
    (item: any) => ({
      url: `${process.env.NEXT_PUBLIC_DOMAIN}${item?.manga_slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/manga`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/manhua`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/manhwa`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/dmca`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...lastgenEntries,
  ];
}
