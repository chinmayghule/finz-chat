import { VStack } from "@chakra-ui/react";
import ActiveChatInsightsContainer from "./ActiveChatInsightsContainer";
import ActiveChatExplainContainer from "./ActiveChatExplainContainer";
import ActiveChatTrendingPromptsContainer from "./ActiveChatTrendingPromptsContainer";


function ActiveChatSideContainer() {
  return (
    <VStack
      w='100%'
      paddingInline='0.5rem'

      border='1px solid black'
    >
      <ActiveChatInsightsContainer />
      <ActiveChatExplainContainer />
      <ActiveChatTrendingPromptsContainer />
    </VStack>
  );
}

export default ActiveChatSideContainer;