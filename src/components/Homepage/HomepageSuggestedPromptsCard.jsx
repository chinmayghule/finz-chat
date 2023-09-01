import { Text, VStack } from "@chakra-ui/react";

function HomepageSuggestedPromptsCard({ iconElement, textContent }) {

  return (
    <VStack
      gap='1rem'
      border='1px solid black'
      paddingInline={{
        base: '0.5rem',
        md: '1rem'
      }}
      paddingBlock={{
        base: '0.5rem',
        md: '1rem'
      }}
    >
      {iconElement}
      <Text fontSize='0.75rem'>{textContent}</Text>
    </VStack>
  );
}


export default HomepageSuggestedPromptsCard;