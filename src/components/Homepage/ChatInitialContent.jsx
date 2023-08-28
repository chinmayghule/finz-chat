import { Flex } from "@chakra-ui/react";
import FinzLogo from "./FinzLogo";
import InitialChatHeadingContainer from "./InitialChatHeadingContainer";
import InitialChatPromptsContainer from "./InitialChatPromptsContainer";

function ChatInitialContent() {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minH='100dvh'
      w='max(320px - 2rem, 75vw)'
      m='auto'
      paddingBlockStart='2rem'
      paddingBlockEnd='5rem'
      gap='1rem'
    >
      <FinzLogo />
      <InitialChatHeadingContainer />
      <InitialChatPromptsContainer />
    </Flex>
  );
}


export default ChatInitialContent;