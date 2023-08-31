import { Box, Heading } from "@chakra-ui/react";
import SplashBackgroundBlob from "./SplashBackgroundBlob";

function SplashMainContent() {

  return (
    <Box
      as='div'
      display='grid'
      justifyContent='center'
      alignItems='center'
      h='100%'

      position='relative'
    >

      <SplashBackgroundBlob />

      <Heading
        as='h1'
        fontSize={{ base: '2.5rem', md: '3rem', lg: '4rem' }}
        fontWeight='590'
        textAlign='center'
        position='absolute'
        zIndex='10'
      >
        What will you discover today
      </Heading>
    </Box>
  );
}


export default SplashMainContent;