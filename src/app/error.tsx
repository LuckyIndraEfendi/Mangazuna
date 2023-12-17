"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavLink from "@/components/navlink/NavLink";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
const error = () => {
  return (
    <>
      <Navbar />
      <section id="notfound" className="py-10 mt-10">
        <div className=" w-screen flex flex-col items-center justify-center ">
          <h1 className="text-2xl sm:text-4xl xl:text-6xl font-bold my-4 text-white">
            Oops! Something went wrong
          </h1>
          <div className="flex gap-5 font-karla">
            <NavLink
              href="/"
              className="flex items-center gap-2 py-2 px-4 ring-1 ring-action/70 ring-[#FF7F57] text-white font-medium rounded hover:text-white transition-all duration-200 ease-out"
            >
              <span>
                <IoArrowBackOutline className="w-5 h-5" />
              </span>
              Go back
            </NavLink>
            <NavLink
              href="/"
              className="bg-[#FF7F57] xl:text-xl text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 hover:text-white transition-all duration-200 ease-out"
            >
              Home Page
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default error;
