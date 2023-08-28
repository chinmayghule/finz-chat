import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import SplashLogo from "../Splash/SplashLogo";
import CustomChakraLink from "../shared/CustomChakraLink";

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
        link='/homepage'
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


export default SplashNavbar;