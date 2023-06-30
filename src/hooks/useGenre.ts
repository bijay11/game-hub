import { useGenres } from "./useGenres";

export const useGenre = (id?: number) => {
  const { data: genres } = useGenres();

  return genres?.results.find((p) => p.id === id);
};
