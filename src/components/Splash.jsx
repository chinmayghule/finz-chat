import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text
} from "@chakra-ui/react";

import CustomChakraLink from './CustomChakraLink';
import { ArrowRightIcon, WarningTwoIcon } from "@chakra-ui/icons";


function Splash() {
  return (
    <Grid
      w='100vw'
      templateColumns="repeat(4, 1fr)"
      alignItems='start'
      gap='1rem'
      p='1rem'
    >
      <GridItem
        as='nav'
        colSpan='4'
      >
        <SplashNavbar />
      </GridItem>

      <GridItem
        as='main'
        colSpan='3'
        alignSelf='stretch'
        minH='60dvh'
      >
        <SplashMainContent />
      </GridItem>

      <GridItem
        as='aside'
        colSpan='1'
        alignSelf='stretch'
        minH='60dvh'
      >
        <SplashSideContent />
      </GridItem>

      <GridItem
        as='section'
        colSpan='4'
      >
        <SplashTextInputContainer />
      </GridItem>

      <GridItem
        as='section'
        colSpan='4'
      >
        <SplashInstructionTextContent />
      </GridItem>

    </Grid>
  );
}


// local components.
function SplashNavbar() {

  return (
    <Flex
      gap='3rem'
      direction='row'
      alignItems='center'
      paddingBlock='1rem'
      paddingInline='2rem'
    >
      <SplashLogo />

      <Spacer />

      <CustomChakraLink
        link='#'
        linkContent={
          <Box as='div'>
            Home
          </Box>
        }
      />

      <CustomChakraLink
        link='#'
        linkContent={
          <Box as='div'>
            About
          </Box>
        }
      />

      <CustomChakraLink
        link='#'
        linkContent={
          <Box as='div'>
            API
          </Box>
        }
      />

      <CustomChakraLink
        link='#'
        linkContent={
          <Box as='div'>
            Contact
          </Box>
        }
      />

      <CustomChakraLink
        link='#'
        linkContent={
          <Box as='div'>
            Profile
          </Box>
        }
      />

      <CustomChakraLink
        link='#'
        linkContent={
          <Button>
            Send Feedback
          </Button>
        }
      />
    </Flex>
  );
}

function SplashMainContent() {

  return (
    <Box
      as='div'
      display='grid'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      h='100%'
      fontSize='4rem'
      fontWeight='590'
    >
      What will you discover today
    </Box>
  );
}

function SplashSideContent() {

  return (
    <Flex
      flexDirection='column'
      gap='1rem'
      justifyContent='center'
      alignItems='center'
      h='100%'
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='0.5rem'
      >
        <WarningTwoIcon />
        <div>How it works</div>
      </Box>
      <SplashSideContentCard
        textContent='Search what you need in the space box'
      />
      <SplashSideContentCard
        textContent='Limited knowledge of world and events after 2022'
      />
      <SplashSideContentCard
        textContent='Remembers what users said earlier in the conversation'
      />
    </Flex>
  );
}

function SplashTextInputContainer() {

  return (
    <InputGroup
      w='max(300px, 50vw)'
      m='auto'
    >
      <Input
        type='text'
      />
      <InputRightElement pointerEvents='none'>
        <ArrowRightIcon />
      </InputRightElement>
    </InputGroup>
  );
}

function SplashInstructionTextContent() {

  return (
    <Text
      w='max(300px, 50vw)'
      m='auto'
      textAlign='center'
      fontSize='0.75rem'
    >
      Splash Instruction Text Content
    </Text>
  );
}

function SplashLogo() {

  const logoStyle = {
    minWidth: '3rem',
    height: '3rem',
    backgroundColor: 'gray',
    borderRadius: '0.375rem'
  };

  return (
    <div style={logoStyle}></div>
  );
}

function SplashSideContentCard({ textContent }) {

  return (
    <Box
      p='1rem'
      textAlign='center'
      alignSelf='stretch'
      border='1px solid black'
    >
      {textContent}
    </Box>
  );
}

export default Splash;