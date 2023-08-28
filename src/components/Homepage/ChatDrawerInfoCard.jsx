import { ChatIcon, DeleteIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";

function ChatDrawerInfoCard({ text }) {
  return (
    <HStack
      p='0.5rem'
      gap='1rem'
    >
      <ChatIcon />
      <Text flexGrow='1'>{text}</Text>
      <DeleteIcon />
    </HStack>
  );
}


export default ChatDrawerInfoCard;