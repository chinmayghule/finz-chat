import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

function ChatInput() {
  
  const [chatInput, setChatInput] = useState('');
  
  const handleChatInputSubmit = (e) => {
    e.preventDefault();

    alert(chatInput);
    setChatInput('');
  };
  
  return (
    <Box
      as='form'
      onSubmit={handleChatInputSubmit}
      w='calc(100vw - 2rem)'
      position='fixed'
      bottom={{ base: '1rem', md: '2rem' }}
    >
      <InputGroup
        w='max(320px - 2rem, 75vw)'
        maxW='600px'
        m='auto'
      >
        <Input
          type='text'
          variant='filled'
          placeholder="Message..."
          w='max(320px - 2rem, 75vw)'
          maxW='600px'
          m='auto'
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}
        />
        <InputRightElement
          pointerEvents='none'
        >
          <ArrowRightIcon />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}


export default ChatInput;