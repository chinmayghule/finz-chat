import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import SplashSideContentCard from "./SplashSideContentCard";

function SplashSideContent() {

  return (
    <Flex
      flexDirection='column'
      gap='1rem'
      justifyContent='center'
      alignItems='center'
      h='100%'
      p='2rem'
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


export default SplashSideContent;