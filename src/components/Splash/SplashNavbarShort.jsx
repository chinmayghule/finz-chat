import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import SplashLogo from "../Splash/SplashLogo";
import CustomChakraLink from "../shared/CustomChakraLink";

function SplashNavbarShort() {

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

    </Flex>
  );
}


export default SplashNavbarShort;