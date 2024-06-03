"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchMangaByAdvSearch } from "@/action/fetchKomik";
import AnotherCard from "./AnotherCard";
import { usePathname } from "next/navigation";
import Image from "next/image";
type DataFetch = {
  manga_slug: string;
  banner: string;
  rating: string;
  title: string;
  has_next: {
    has_next_link: string | null;
    is_next_link: boolean;
  };
  has_prev: { has_prev_link: string | null; is_prev_link: boolean };
  total_manga: number;
};
let page = 2;
const Loadmore = () => {
  const path = usePathname();
  const { ref, inView } = useInView();
  const [data, setData]: any = useState([]);
  const [hasNext, setHasNext] = useState(true);

  useEffect((): any => {
    if (inView) {
      fetchMangaByAdvSearch(path.replace("/", ""), page)
        .then((res: any) => {
          setData([...data, ...res?.data]);
          setHasNext(res?.has_next);
        })
        .catch((err) => {
          console.log(err);
        });
      page++;
    }

    return () => page;
  }, [inView, data, path]);
  return (
    <>
      <div
        className={`contentManga grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 mt-5`}
      >
        {data.map(
          (item: DataFetch, i: number) =>
            item?.banner && <AnotherCard data={item} index={i} key={i} />
        )}
      </div>
      {hasNext ? (
        <section className="flex justify-center items-center w-full mt-4">
          <div ref={ref}>
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Loadmore;
