import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticStore = ({ score }: Props) => {
  let color = "";
  if (score > 60) color = "yellow";
  if (score > 75) color = "green";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticStore;
