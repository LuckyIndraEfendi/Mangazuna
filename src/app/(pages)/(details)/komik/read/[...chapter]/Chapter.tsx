"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import "./style.css";
import Disqus from "@/components/Disqus";
import Navbar from "@/components/Navbar";
import { useRouter } from "@/lib/router-events";
import NavLink from "@/components/navlink/NavLink";
const Chapter = ({
  dataRead,
  title,
  id,
}: {
  dataRead: any;
  title: string;
  id: string;
}) => {
  const router = useRouter();
  const [daftarChapter, setDaftarChapter] = useState<string>();
  const handleNext = useCallback(() => {
    if (dataRead?.has_next === true) {
      router.push(`/komik/read${dataRead?.has_next_chapterLink}`);
    }
  }, [dataRead?.has_next, dataRead?.has_next_chapterLink, router]);
  const handlePrevious = useCallback(() => {
    if (dataRead?.has_prev === true) {
      router.push(`/komik/read${dataRead?.has_prev_chapterLink}`);
    }
  }, [dataRead?.has_prev, dataRead?.has_prev_chapterLink, router]);
  const handleKeyDown = useCallback(
    (e: any) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        handlePrevious();
      }
    },
    [handleNext, handlePrevious]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    setDaftarChapter(localStorage.getItem("daftarChapter") ?? "daftarChapter");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <>
      <Navbar />
      <div className="w-[95%] sm:w-[90%] m-auto ">
        <div className="title mt-10">
          <h1 className="font-noto-sans text-xl sm:text-2xl text-center text-white">
            Komik {title}
          </h1>
          <hr className="mt-6" />
          <p className="text-center text-sm mt-2 text-white font-karla font-medium">
            Kamu sedang berada di halaman baca komik <strong>{title}</strong>
            bahasa Indonesia. Jika kamu ingin membaca manga{" "}
            <strong>{title}</strong>, pastikan Javascript kalian aktif . Untuk
            koleksi komik seru lainnya di <strong>Mangazuna</strong> ada di menu
            Daftar Komik.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="hasEpisode flex gap-2">
            {dataRead?.has_prev === true ? (
              <button
                className="rounded-full px-5 text-sm py-2 bg-[#24252e] hover:bg-[#23242c] text-white"
                onClick={handlePrevious}
              >
                « Chapter Sebelumnya
              </button>
            ) : (
              ""
            )}
            <NavLink href={`${daftarChapter}`}>
              <button className="rounded-full px-5 text-sm py-2 bg-[#22242c] hover:bg-[#23242c] text-white">
                Daftar Chapter
              </button>
            </NavLink>
          </div>
        </div>
        <div className="info mt-5">
          <button className="text-sm bg-blue-500 px-2 py-2 rounded-md font-medium font-karla text-white w-full ">
            PENTING!! DOMAIN BARU <strong>MANGAZUNA.ID</strong> MENJADI
            <strong>MANGAZUNA.XYZ</strong>, SEGERA BOOKMARK DAN HATI-HATI PADA
            SITUS PALSU <strong>MANGAZUNA</strong>.
          </button>
        </div>
      </div>
      <div className="mb-20 w-full sm:w-[60%] m-auto">
        <div className="flex justify-center">
          <div className="read grid justify-center mt-5  ">
            {dataRead?.data?.chapter?.chapter?.map((item: any, i: number) => (
              <Image
                src={item?.chapter_image}
                alt=""
                referrerPolicy="no-referrer"
                width={500}
                height={400}
                className="w-full"
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="justify-end mt-6 flex gap-3">
          {dataRead?.has_prev === true ? (
            <button
              className="rounded-md px-5 py-2 text-sm bg-[#282a33] hover:bg-[#23242c] text-white"
              onClick={handlePrevious}
            >
              Prev
            </button>
          ) : (
            ""
          )}
          {dataRead?.has_next === true ? (
            <button
              className="rounded-md px-5 py-2 text-sm bg-[#282a33] hover:bg-[#23242c] text-white"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-[90%] m-auto mb-2">
        <Disqus shortname="mangazunaxyz" title={title} chapter_id={id} />
      </div>
    </>
  );
};

export default Chapter;
