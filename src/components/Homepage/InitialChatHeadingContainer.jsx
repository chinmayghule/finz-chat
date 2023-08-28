import { Heading, Text, VStack } from "@chakra-ui/react";

function InitialChatHeadingContainer() {
  return (
    <VStack>
      <Heading as='h1' fontSize='1.875rem'>
        Start Somewhere
      </Heading>
      <Text
        as='p'
        fontSize='0.75rem'
        textAlign='center'
      >
        Don't know where to start from? Here are some preset prompts to help.
      </Text>
    </VStack>
  );
}

export default InitialChatHeadingContainer;