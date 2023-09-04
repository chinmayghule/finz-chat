import { Box, useColorMode } from "@chakra-ui/react";
import FinzLogo from "./FinzLogo";

function LoadingGeneral() {
  const { colorMode } = useColorMode();

  let bgColor;

  if (colorMode === 'dark') {
    bgColor = 'rgba(255, 255, 255, 0.18)';
  } else {
    bgColor = 'rgba(226, 232, 240, 1)';
  }

  return (
    <Box
      minH='100dvh'
      display='grid'
      justifyContent='center'
      placeItems='center'
      bg={bgColor}
      data-testid='loading-general'
    >
      <Box animation='finzLogoLoadingAnimation 3s infinite linear'>
        <FinzLogo />
      </Box>
    </Box>
  );
}

export default LoadingGeneral;