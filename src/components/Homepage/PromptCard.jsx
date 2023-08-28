import { Text, VStack } from "@chakra-ui/react";

function PromptCard({ iconElement, textContent }) {
  return (
    <VStack
      gap='1rem'
      border='1px solid black'
      p='0.5rem'
    >
      {iconElement}
      <Text>{textContent}</Text>
    </VStack>
  );
}


export default PromptCard;