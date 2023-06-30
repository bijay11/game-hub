import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    cacheTime: 5 * 1000,
    keepPreviousData: true,
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: genres,
  });
