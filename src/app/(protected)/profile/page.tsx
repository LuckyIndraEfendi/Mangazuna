import { Metadata } from "next";
import Profile from "./Profile";

export const metadata: Metadata = {
  title: "Profile page",
  robots: {
    follow: true,
    index: false,
  },
};
const page = () => {
  return <Profile />;
};

export default page;
