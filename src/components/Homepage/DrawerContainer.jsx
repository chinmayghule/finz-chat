import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
  VStack,
  useMediaQuery
} from "@chakra-ui/react";
import { EditIcon, SearchIcon } from "@chakra-ui/icons";
import ChatDrawerInfoCard from "./ChatDrawerInfoCard";
import UserInfoCard from "./UserInfoCard";
import ClearChatBtn from "./ClearChatBtn";
import CustomHeartIcon from "../shared/CustomHeartIcon";
import CustomHeartSolidIcon from "../shared/CustomHeartSolidIcon";
import { useState } from "react";


function DrawerContainer({
  isOpen,
  onClose,
  activeChatId,
  setActiveChatId
}) {

  const [
    isHeartIconClicked,
    setIsHeartIconClicked
  ] = useState(false);

  const [isSmallerThan1280] = useMediaQuery('(max-width: 1280px)');


  // functions.
  const handleHeartIconClicked = () => {
    setIsHeartIconClicked(prevState => !prevState);
  };

  const heartIcon = () => {
    if (isHeartIconClicked) {
      return <CustomHeartSolidIcon />;
    } else {
      return <CustomHeartIcon />;
    }
  };

  // return statements.
  return (
    <Drawer
      placement="left"
      isOpen={(isSmallerThan1280 || !activeChatId) ? isOpen : true}
      onClose={onClose}
    >
      {(isSmallerThan1280) ? <DrawerOverlay /> : null}

      <DrawerContent>

        <DrawerHeader>
          <VStack gap='0.75rem'>
            <Flex
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              gap='0.5rem'
              w='100%'
            >
              <Text>FINZ</Text>

              <Spacer />

              <Button
                variant='ghost'
                onClick={handleHeartIconClicked}
              >
                {heartIcon()}
              </Button>

              {(isSmallerThan1280) ? (
                <DrawerCloseButton position='static' />
              ) : (
                null
              )}

            </Flex>

            <Flex gap='0.5rem'>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  type='text'
                  placeholder='Search...'
                  fontWeight='normal'
                />
              </InputGroup>
              <Button>
                <EditIcon />
              </Button>
            </Flex>
          </VStack>

        </DrawerHeader>

        <DrawerBody
          overflowY='scroll'
          display='flex'
          flexDirection='column'
          gap='0.5rem'
        >
          <Button
            onClick={() => setActiveChatId('demo')}
            variant='ghost'
          >
            <ChatDrawerInfoCard
              text="What are my spendings..."
            />
          </Button>
          <Button
            onClick={() => setActiveChatId('demo')}
            variant='ghost'
          >
            <ChatDrawerInfoCard
              text="What are my spendings..."
            />
          </Button>
          <Button
            onClick={() => setActiveChatId('demo')}
            variant='ghost'
          >
            <ChatDrawerInfoCard
              text="What are my spendings..."
            />
          </Button>

          <Spacer />

          <ClearChatBtn />
        </DrawerBody>

        <DrawerFooter>
          <UserInfoCard />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


export default DrawerContainer;