"use server";
import { NEXT_MANGAZUNA_APIURL, NEXT_MANGAZUNA_APIKEY } from "@/lib/mangazuna";
export const fetchLastUpdated = async (page: number) => {
  const response = await fetch(
    `${NEXT_MANGAZUNA_APIURL}/api/v1/manga/lastupdated?page=${page || 1}`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  if (data?.status === "success") {
    return data;
  }
  throw new Error("Error");
};

export const fetchMangaByAdvSearch = async (type: string, page: number) => {
  const response = await fetch(
    `${NEXT_MANGAZUNA_APIURL}/api/v1/manga/advsearch?page=${
      page || 1
    }&type=${type}`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  if (data?.status === "success") {
    return data;
  }
  throw new Error("Error");
};

export const fetchDetail = async (id: string) => {
  const response = await fetch(`${NEXT_MANGAZUNA_APIURL}/api/v1/manga/${id}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  if (data?.status === "success") {
    return data;
  }
  throw new Error("Error");
};

export const fetchRead = async (id: string) => {
  const response = await fetch(
    `${NEXT_MANGAZUNA_APIURL}/api/v1/manga/chapter/${id}`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  if (data?.status === "success") {
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
