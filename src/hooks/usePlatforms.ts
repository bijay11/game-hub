import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import platforms from "../data/platforms";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () => {
  const fetchGenres = () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms/lists/parents")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["platforms"],
    cacheTime: 5 * 1000,
    keepPreviousData: true,
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    // since genres dont have count and result properties.
    initialData: { count: platforms.length, results: platforms },
  });
};
