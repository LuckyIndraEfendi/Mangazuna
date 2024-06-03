"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchLastUpdated } from "@/action/fetchKomik";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LatestUpdateCard from "./LatestUpdateCard";
import { LatestUpdateType } from "@/types/latestUpdateType";

let page = 2;
const LoadmoreLatestUpdate = () => {
  const path = usePathname();
  const { ref, inView } = useInView();
  const [data, setData]: any = useState([]);
  const [hasNext, setHasNext] = useState(true);

  useEffect((): any => {
    if (inView) {
      fetchLastUpdated(page)
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
  console.log(data);
  return (
    <>
      <div
        className={`contentManga grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 mt-5`}
      >
        {data.map(
          (item: LatestUpdateType, i: number) =>
            item?.banner && <LatestUpdateCard data={item} index={i} key={i} />
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

export default LoadmoreLatestUpdate;
