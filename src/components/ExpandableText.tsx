import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const limit = 300;

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  const buttonText = expanded ? "Show Less" : "Show More";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {buttonText}
      </Button>
    </Text>
  );
};
