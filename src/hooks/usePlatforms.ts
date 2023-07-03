import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { APIClient } from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    cacheTime: 5 * 1000,
    keepPreviousData: true,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
