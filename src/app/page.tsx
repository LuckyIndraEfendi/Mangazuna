import Footer from "@/components/Footer";
import Homepage from "./Homepage";
export async function generateMetadata() {
  return {
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.png",
      },
    ],
  };
}
export default function Home() {
  return (
    <>
      <Homepage />
      <Footer />
    </>
  );
}
