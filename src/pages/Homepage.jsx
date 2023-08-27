import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Spacer, Text, VStack, useDisclosure } from "@chakra-ui/react";
import googleSignOutUser from "../utility/googleSignOutUser";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../contexts/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Cookies from "js-cookie";
import { ArrowRightIcon, ChatIcon, CloseIcon, DeleteIcon, EditIcon, HamburgerIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";

function Homepage() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // chakra-ui states for drawer.
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSignOut = () => {
    googleSignOutUser(setUser);
    navigate('/login');
  };


  // effects.

  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        Cookies.remove('user');
        navigate('/login');
      }
    });

  }, []);


  return (
    <>
      <Container
        as='main'
        w='100vw'
        minW='100vw'
        minH='100dvh'
        backgroundColor='lightgray'
        display='flex'
        flexDirection='column'
      >
        <DrawerOpenButton onOpen={onOpen} />

        <ChatInitialContent />
        <ChatInput />


      </Container>
      <DrawerContainer
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

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

function UserInfoCard() {
  return (
    <Flex
      w='100%'
      alignItems='center'
      gap="1rem"
    >
      <UserIcon />
      <BasicUserInfo />
      <MoreOptions />
    </Flex>
  );
}

function UserIcon() {

  const iconStyle = {
    height: '3rem',
    maxWidth: '3rem',
    aspectRatio: '1 / 1',
    backgroundColor: 'lightgreen',
    flexGrow: '1'
  };

  return (
    <div style={iconStyle}></div>
  );
}

function BasicUserInfo() {

  return (
    <Flex
      flexDirection='column'
      flexGrow='auto'
      justifyContent='center'
    >
      <Text>John Doe</Text>
      <Text>johndoe@gmail.com</Text>
    </Flex>
  );
}

function MoreOptions() {
  return (
    <Button
      flexGrow='1'
      alignSelf='stretch'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 128 512"
      >
        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
      </svg>
    </Button>
  );
}

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

function ClearChatBtn() {
  return (
    <Button
      leftIcon={<CloseIcon w='0.75rem' h='0.75rem' marginInlineEnd='0.5rem' />}
      display='block'
      m='auto'
    >
      Clear all chats
    </Button>
  );
}

function DrawerOpenButton({ onOpen }) {
  return (
    <Button
      onClick={onOpen}
      position='fixed'
      display='grid'
      justifyContent='center'
      placeItems='center'
      marginBlockStart='1rem'
    >
      <HamburgerIcon />
    </Button>
  );
}

function ChatInitialContent() {
  return (
    <div>Chat Initial Content</div>
  );
}

function ChatInput() {
  return (
    <InputGroup>
      <InputRightElement pointerEvents='none'>
        <ArrowRightIcon />
      </InputRightElement>
      <Input
        type='text'
        variant='filled'
        placeholder="Message..."
        w='max(300px, 75vw)'
        maxW='600px'
        m='auto'
      />
    </InputGroup>
  );
}

export default Homepage;