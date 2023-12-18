"use client";
import DialogAlert from "./ui/DialogAlert";
import useModal from "@/hooks/useModal";
import { usePathname } from "next/navigation";
import { navlink, navlinkMobile } from "./utils/NavLink";
import { useSession, signOut } from "next-auth/react";
import NavLink from "./navlink/NavLink";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const { handleOpen, open, setOpen } = useModal();
  const [openMenu, setOpenMenu] = useState(false);
  const path = usePathname();
  const { data: session }: any = useSession();
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <DialogAlert handler={handleOpen} open={open} setOpen={setOpen} />

      <div className="navbarMobile relative w-[90%] sm:hidden ">
        <div className=" fixed bottom-10 right-5 flex gap-3 z-20 items-center ">
          {openMenu ? (
            <div className="bg-[#272931] flex gap-3 px-3 rounded-md">
              {navlinkMobile.map((item, i) => (
                <NavLink
                  key={i}
                  href={item.path}
                  className={`px-2 py-3 ${
                    path === item.path ? "text-[#FF7F57]" : "text-gray-300"
                  }  font-karla font-medium text-sm`}
                >
                  {item.name}
                </NavLink>
              ))}
              {session ? (
                <NavLink
                  href="/auth/sign-in"
                  className={`px-2 py-3 text-white  font-karla font-medium text-sm`}
                  onClick={() => signOut()}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  href="/auth/sign-in"
                  className={`px-2 py-3 ${
                    path === "/auth/sign-in" || "/auth/sign-up"
                      ? "text-[#FF7F57]"
                      : "text-gray-300"
                  }  font-karla font-medium text-sm`}
                >
                  Sign-In
                </NavLink>
              )}
            </div>
          ) : (
            ""
          )}

          <div
            className="hamburger bg-[#272931] p-1 rounded-md hover:cursor-pointer"
            onClick={handleOpenMenu}
          >
            <IoMenu className="text-[#FF7F57] text-4xl" />
          </div>
        </div>
      </div>

      <header>
        <nav className="w-[90%] m-auto sm:py-5 flex gap-3 items-center justify-between mt-8 ">
          <div className="flex items-center gap-14 justify-between ">
            <div className="logo">
              <a href="/">
                <h1 className="font-passion-one text-3xl sm:text-4xl text-[#FF7F57]">
                  Manga<span className="text-[#FF7F57]">Zuna</span>
                </h1>
              </a>
            </div>
            <ul className=" md:flex md:gap-10 hidden items-center">
              {navlink.map((item, i) => (
                <NavLink href={item.path} key={i}>
                  <li
                    className={`opacity-90 font-karla dark:text-white  ${
                      path === item.path ? "text-orange-500" : "text-white"
                    } font-semibold`}
                  >
                    {item.name}
                  </li>
                </NavLink>
              ))}
              {session ? (
                <button
                  className="ring-1 ring-orange-500 px-3 py-1 rounded-md"
                  onClick={() => signOut()}
                >
                  <li
                    className={`opacity-90 font-karla dark:text-white  text-white font-semibold`}
                  >
                    Log out
                  </li>
                </button>
              ) : (
                <NavLink
                  href="/auth/sign-in"
                  className="ring-1 ring-orange-500 px-3 py-1 rounded-md"
                >
                  <li
                    className={`opacity-90 font-karla dark:text-white  text-white font-semibold`}
                  >
                    Sign In
                  </li>
                </NavLink>
              )}
            </ul>
          </div>

          <div className="flex gap-6 sm:gap-10">
            {path === "/search" ? (
              ""
            ) : (
              <button
                name="button"
                aria-label="search"
                className="search"
                onClick={handleOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-xl sm:text-2xl text-white font-medium hover:cursor-pointer"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            )}
            <NavLink href="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                name="button"
                aria-label="search"
                fill="currentColor"
                className="w-6 h-6 text-xl sm:text-2xl text-white font-medium hover:cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
