import { Image, SimpleGrid } from "@chakra-ui/react";
import { useScreenshots } from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

export const GameScreenshot = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {screenshots?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};
