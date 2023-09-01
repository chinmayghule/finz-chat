import { VStack } from "@chakra-ui/react";
import ActiveChatInsightsContainer from "./ActiveChatInsightsContainer";
import ActiveChatExplainContainer from "./ActiveChatExplainContainer";
import ActiveChatTrendingPromptsContainer from "./ActiveChatTrendingPromptsContainer";


function ActiveChatSideContainer() {
  return (
    <VStack
      w='100%'
      paddingInline='0.5rem'
      borderInlineStart='2px solid rgba(255, 255, 255, 0.36)'
    >
      <ActiveChatInsightsContainer />
      <ActiveChatExplainContainer />
      <ActiveChatTrendingPromptsContainer />
    </VStack>
  );
}

export default ActiveChatSideContainer;