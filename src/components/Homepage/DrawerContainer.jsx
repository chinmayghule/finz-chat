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
  VStack
} from "@chakra-ui/react";
import { EditIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";
import ChatDrawerInfoCard from "./ChatDrawerInfoCard";
import UserInfoCard from "./UserInfoCard";
import ClearChatBtn from "./ClearChatBtn";


function DrawerContainer({ isOpen, onClose }) {

  return (
    <Drawer
      placement="left"
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />

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
              <StarIcon />
              <DrawerCloseButton position='static' />
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
        >
          <ChatDrawerInfoCard
            text="What are my spendings..."
          />
          <ChatDrawerInfoCard
            text="What are my spendings..."
          />
          <ChatDrawerInfoCard
            text="What are my spendings..."
          />

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