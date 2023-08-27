import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, VStack, useDisclosure } from "@chakra-ui/react";
import googleSignOutUser from "../utility/googleSignOutUser";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Cookies from "js-cookie";
import { ArrowRightIcon, ChatIcon, CloseIcon, DeleteIcon, EditIcon, HamburgerIcon, InfoOutlineIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";

function Homepage() {

  // chakra-ui states for drawer.
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const { user } = useContext(UserContext);


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
      >
        <DrawerOpenButton onOpen={onOpen} />

        <ChatInitialContent />
        <ChatInput />


        <DrawerContainer
          isOpen={isOpen}
          onClose={onClose}
        />
      </Container>
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

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    googleSignOutUser(setUser);
    navigate('/login');
  };


  return (
    <Menu
      flexGrow='1'
      alignSelf='stretch'
    >
      <MenuButton as={Button}>
        <VerticalEllipsisIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>Dark Mode</MenuItem>
        <MenuItem onClick={handleSignOut}>Log out</MenuItem>
      </MenuList>
    </Menu>
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
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minH='100dvh'
      w='max(320px - 2rem, 75vw)'
      m='auto'
      paddingBlockStart='2rem'
      paddingBlockEnd='5rem'
      gap='1rem'
    >
      <FinzLogo />
      <InitialChatHeadingContainer />
      <InitialChatPromptsContainer />
    </Flex>
  );
}

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

function FinzLogo() {

  const finzLogoStyle = {
    display: 'grid',
    justifyContent: 'center',
    placeItems: 'center',
    padding: '1rem',
    aspectRatio: '1 / 1',
    border: '2px solid black',
    borderRadius: '50%',
    fontWeight: 'bold'
  };

  return (
    <div style={finzLogoStyle}>FINZ</div>
  );
}

function InitialChatHeadingContainer() {
  return (
    <VStack>
      <Heading as='h1' fontSize='1.875rem'>Start Somewhere</Heading>
      <Text
        as='p'
        fontSize='0.75rem'
        textAlign='center'
      >
        Don't know where to start from? Here are some preset prompts to help.
      </Text>
    </VStack>
  );
}

function InitialChatPromptsContainer() {
  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      gap='1rem'
      fontSize='0.75rem'
    >
      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>
    </Grid>
  );
}

function PromptCard({ iconElement, textContent }) {
  return (
    <VStack
      gap='1rem'
      border='1px solid black'
      p='0.5rem'
    >
      {iconElement}
      <Text>{textContent}</Text>
    </VStack>
  );
}

function VerticalEllipsisIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 128 512"
    >
      <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
    </svg>
  );
}

export default Homepage;