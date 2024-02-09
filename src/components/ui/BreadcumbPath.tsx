"use client";
import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { usePathname, useSearchParams } from "next/navigation";
const BreadcumbPath = () => {
  const params = useSearchParams();
  const path = usePathname();
  console.log(params?.get("q"));
  return (
    <Breadcrumbs className="bg-transparent text-lg" placeholder="">
      <a href="/" className="text-white font-karla opacity-75">
        Mangazuna
      </a>
      <a
        href="#"
        className={` font-karla text-orange-500 ${
          path !== "/search" ? "" : "opacity-75"
        }`}
      >
        {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
      </a>
      {params?.get("q") ? (
        <a href="#" className="text-white font-karla ">
          {params?.get("q")}
        </a>
      ) : (
        ""
      )}
    </Breadcrumbs>
  );
};

export default BreadcumbPath;
