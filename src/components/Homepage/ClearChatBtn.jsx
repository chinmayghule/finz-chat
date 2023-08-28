import { CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

function ClearChatBtn() {
  return (
    <Button
      leftIcon={
        <CloseIcon
          w='0.75rem'
          h='0.75rem'
          marginInlineEnd='0.5rem'
        />
      }
      display='block'
      m='auto'
    >
      Clear all chats
    </Button>
  );
}


export default ClearChatBtn;