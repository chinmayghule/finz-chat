import { Text, VStack, useColorMode } from "@chakra-ui/react";

function HomepageSuggestedPromptsCard({ iconElement, textContent }) {
  const { colorMode } = useColorMode();

  let bgColor;

  if (colorMode === 'dark') {
    bgColor = 'rgba(255, 255, 255, 0.18)';
  } else {
    bgColor = 'rgba(226, 232, 240, 1)';
  }

  return (
    <VStack
      gap='1rem'
      paddingInline={{
        base: '0.5rem',
        md: '1rem'
      }}
      paddingBlock={{
        base: '0.5rem',
        md: '1rem'
      }}
      backgroundColor={bgColor}
      borderRadius='0.5rem'
    >
      {iconElement}

      <Text fontSize={{ base: '0.75rem', md: '0.875rem' }}>
        {textContent}
      </Text>
    </VStack>
  );
}


export default HomepageSuggestedPromptsCard;