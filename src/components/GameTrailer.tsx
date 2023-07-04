import { useTrailer } from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return (
    <video src={first.data[480]} poster={data.results[0].preview} controls />
  );
};
