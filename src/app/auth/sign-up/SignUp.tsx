"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import useSignUp from "@/hooks/useSignUp";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, onSubmit, handleSubmit, errors, isSubmitting } =
    useSignUp();
  return (
    <>
      <div className="mt-10 ">
        <h1 className="font-karla font-semibold text-white text-2xl text-center">
          Sign up to Mangazuna
        </h1>
        <center>
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center mt-10 gap-4  w-full sm:w-1/3 duration-200  "
            >
              <div className="username ">
                <input
                  type="text"
                  {...register("username")}
                  placeholder="Username"
                  className="bg-transparent mt-2 w-full  outline-none focus:ring-2 focus:ring-gray-400 rounded-sm ring-1 ring-gray-400 py-2 px-4 text-white"
                />
                <span className="text-red-600 text-start block mt-2 text-xs ">
                  {errors?.username?.message}
                </span>
              </div>
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
              <div id="submit">
                <button
                  className="w-full duration-200 hover:bg-[#f0673e] bg-[#df5f39] py-2 font-karla text-white font-semibold px-3 rounded-full"
                  disabled={isSubmitting}
                >
                  Let&apos;s Sign Up
                </button>
              </div>
            </form>
            <h5 className="text-[#d8d6d6] mt-3 text-sm">
              Already have account?{" "}
              <Link href="/auth/sign-in" className="text-[#f0673e] font-medium">
                Sign in
              </Link>
            </h5>
          </div>
        </center>
      </div>
    </>
  );
};

export default SignUp;
