import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

function ChatInput() {

  const [chatInput, setChatInput] = useState('');
  const { colorMode } = useColorMode();

  let bgColor;

  if (colorMode === 'dark') {
    // bgColor = 'rgba(255, 255, 255, 0.18)';
    bgColor = '#718096';
  } else {
    bgColor = 'rgba(226, 232, 240, 1)';
  }

  // functions.
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
        m='auto'
        w={{
          base: 'max(320px - 2rem, 100vw - 2rem)'
        }}
        maxW='600px'
        bg={bgColor}
        borderRadius='0.5rem'
      >
        <Input
          type='text'
          variant='filled'
          placeholder="Message..."
          w={{
            base: 'max(320px - 2rem, 100vw - 2rem)'
          }}
          maxW='600px'
          m='auto'
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}

          bg={bgColor}
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