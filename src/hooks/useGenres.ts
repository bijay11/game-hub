import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { APIClient } from "../services/api-client";
import genres from "../data/genres";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    cacheTime: 5 * 1000,
    keepPreviousData: true,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
