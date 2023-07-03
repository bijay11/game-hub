import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText";

export const GameDetailsPage = () => {
  const [showLess, setShowLess] = useState(true);

  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};
