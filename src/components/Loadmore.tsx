"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchKomik } from "@/action/fetchKomik";
import AnotherCard from "./AnotherCard";
import { usePathname } from "next/navigation";
import Image from "next/image";
type DataFetch = {
  title: string;
  image: string;
  details_id: string;
  rating: string;
};
let page = 2;
const Loadmore = () => {
  const path = usePathname();
  const { ref, inView } = useInView();
  const [data, setData]: any = useState([]);
  const [hasNext, setHasNext] = useState(true);

  useEffect((): any => {
    if (inView) {
      fetchKomik(path.replace("/", ""), page)
        .then((res) => {
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
            item?.image && <AnotherCard data={item} index={i} key={i} />
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
