import { Box } from "@chakra-ui/react";

function SplashMainContent() {

  return (
    <Box
      as='div'
      display='grid'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      h='100%'
      fontSize={{ base: '2.5rem', md: '3rem', lg: '4rem' }}
      fontWeight='590'
    >
      What will you discover today
    </Box>
  );
}


export default SplashMainContent;