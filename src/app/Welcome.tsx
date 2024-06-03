"use client";
import useAuth from "@/hooks/useAuth";
import { useSession } from "next-auth/react";
const Welcome = () => {
  const { data, isLoading } = useAuth();
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        ""
      ) : isLoading ? (
        <div className="w-1/2 sm:w-32 md:w-40 lg:w-52 h-10 rounded-md animate-pulse bg-[#bdb9b9]"></div>
      ) : (
        <h1 className="text-xl font-noto-sans sm:text-3xl text-white">{`Welcome, ${data?.username}`}</h1>
      )}
    </>
  );
};

export default Welcome;
