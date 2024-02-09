"use server";
import { NEXT_MANGAZUNA_APIURL, NEXT_MANGAZUNA_APIKEY } from "@/lib/mangazuna";
export const fetchKomik = async (type: string, page: number) => {
  const response = await fetch(
    `${NEXT_MANGAZUNA_APIURL}/api/v1/komik/${type}?apiKey=${NEXT_MANGAZUNA_APIKEY}&page=${page}`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  if (data?.statusCode === 200) {
    return data;
  }
  throw new Error("Error");
};

export const fetchDetail = async (id: string) => {
  const response = await fetch(
    `${NEXT_MANGAZUNA_APIURL}/api/v1/komik/details/${id}?apiKey=${NEXT_MANGAZUNA_APIKEY}`,
    { cache: "no-cache" }
  );
  const data = await response.json();
  if (data?.statusCode === 200) {
    return data?.data;
  }
  throw new Error("Error");
};

export const fetchRead = async (id: string) => {
  const response = await fetch(
    `${NEXT_MANGAZUNA_APIURL}/api/v1/komik/chapter/${id}?apiKey=${NEXT_MANGAZUNA_APIKEY}`,
    { cache: "no-cache" }
  );
  const data = await response.json();
  if (data?.statusCode === 200) {
    return data;
  }
  throw new Error("Error");
};

export const fetchSearch = async (query: string) => {
  const response = await fetch(
    `${NEXT_MANGAZUNA_APIURL}/api/v1/komik/search?q=${query}&apiKey=${NEXT_MANGAZUNA_APIKEY}`,
    { cache: "no-cache" }
  );
  const data = await response.json();
  if (data?.statusCode === 200) {
    return data;
  }
  throw new Error("Error");
};
