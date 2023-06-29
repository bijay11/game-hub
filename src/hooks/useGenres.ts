import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () => {
  const fetchGenres = () =>
    apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

  return useQuery({
    queryKey: ["genres"],
    cacheTime: 5 * 1000,
    keepPreviousData: true,
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    // since genres dont have count and result properties.
    initialData: { count: genres.length, results: genres },
  });
};
