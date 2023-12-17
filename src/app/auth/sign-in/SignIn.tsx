"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import useSignIn from "@/hooks/useSignIn";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { errors, handleSubmit, register, onSubmit, isSubmitting, isLoading } =
    useSignIn();
  return (
    <>
      <div className="mt-10 ">
        <h1 className="font-karla font-semibold text-white text-2xl text-center">
          Sign In to Mangazuna
        </h1>
        <center>
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center mt-10 gap-4  w-full sm:w-1/3 duration-200  "
            >
              <div className="email ">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="bg-transparent mt-2 w-full  outline-none focus:ring-2 focus:ring-gray-400 rounded-sm ring-1 ring-gray-400 py-2 px-4 text-white"
                />
                <span className="text-red-600 text-start block mt-2 text-xs ">
                  {errors?.email?.message}
                </span>
              </div>
              <div className="password relative ">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Password"
                  className="bg-transparent mt-2 w-full outline-none focus:ring-2 focus:ring-gray-400 rounded-sm ring-1 ring-gray-400 py-2 px-4 text-white"
                />
                <span className="text-red-600 text-start block mt-2 text-xs ">
                  {errors?.password?.message}
                </span>
                <label
                  htmlFor=""
                  className="absolute top-5 right-5 text-white hover:cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                </label>
              </div>
              {isLoading ? (
                <div id="submit">
                  <button className="w-full duration-200 hover:bg-[#f0673e] bg-[#df5f39] py-2 font-karla text-white font-semibold px-3 rounded-full">
                    Let&apos;s Sign In
                  </button>
                </div>
              ) : (
                <div id="submit">
                  <button
                    disabled={isSubmitting}
                    className="w-full duration-200 hover:bg-[#d3927e] bg-[#da7455] py-2 font-karla text-white font-semibold px-3 rounded-full"
                  >
                    Loading...
                  </button>
                </div>
              )}
            </form>
            <h5 className="text-[#d8d6d6] mt-3 text-sm">
              Don&apos;t have account?{" "}
              <Link href="/auth/sign-up" className="text-[#f0673e] font-medium">
                Sign up
              </Link>
            </h5>
          </div>
        </center>
      </div>
    </>
  );
};

export default SignIn;
