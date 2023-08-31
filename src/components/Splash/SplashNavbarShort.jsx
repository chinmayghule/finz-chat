import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import CustomChakraLink from "../shared/CustomChakraLink";
import { HamburgerIcon } from "@chakra-ui/icons";

function SplashNavbarShort({ onOpen }) {

  return (
    <Flex
      gap='3rem'
      direction='row'
      alignItems='center'
      paddingBlock={{ base: '0rem', md: '1rem' }}
      paddingInline={{ base: '0rem', sm: '1rem', md: '2rem' }}
    >
      <Button onClick={onOpen}>
        <HamburgerIcon />
      </Button>

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