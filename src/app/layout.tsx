import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
import { HandleOnComplete } from "@/lib/router-events";
import siteMetadata from "@/lib/seo/siteMetadata";
export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  manifest: "/manifest.webmanifest",
  verification: {
    google: "szmpKHR7f-jtqxvxFdvK7ismjGCuN8yGnF9JoBy_SW0",
  },
  keywords:
    "Mangazuna,mangazuna, manga, mangakakalot,mangafire,manga plus,manga anime, manhwa app,manhwa,moopa,kiryu,manganato",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
  ],
  alternates: {
    canonical: siteMetadata.siteUrl,
    languages: {
      "id-ID": `${siteMetadata.siteUrl}/id-ID`,
      "en-US": `${siteMetadata.siteUrl}/en-US`,
    },
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <SessionProvider session={session}>
          {children}
          <Toaster />
        </SessionProvider>
        <HandleOnComplete />
      </body>
    </html>
  );
}
