import { Button, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import CustomTrashCanIcon from "../shared/CustomTrashCanIcon";
import CustomHeartIcon from "../shared/CustomHeartIcon";
import { HamburgerIcon } from "@chakra-ui/icons";

function ActiveChatHeading({ onOpen, activeChatId }) {
  const [isSmallerThan1280] = useMediaQuery('(max-width: 1280px)');
  
  return (
    <Flex
      gap='0rem'
      position='sticky'
      top='0'
      border='1px solid black'
      bg='white'
      w='100%'
      paddingBlock='0rem'
      zIndex='1'
      alignItems='center'
    >

      {(activeChatId && isSmallerThan1280) ? (
        <Button variant='ghost' onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      ) : (
        null
      )}

      <Heading
        as='h1'
        fontSize='1.125rem'
        fontWeight='inherit'
        marginInlineStart='1.5rem'
      >
        Title
      </Heading>
      <Spacer />
      <Button variant='ghost'
      >
        <CustomTrashCanIcon />
      </Button>
      <Button variant='ghost'
      >
        <CustomHeartIcon />
      </Button>
    </Flex>
  );
}

export default ActiveChatHeading;