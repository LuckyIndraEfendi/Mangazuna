import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/profile"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
  };
}
