"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useAuth = () => {
  const { data, isLoading, error } = useSWR("/api/current-user", fetcher);
  return { data, isLoading, error };
};

export default useAuth;
