import { Box } from "@chakra-ui/react";
import FinzLogo from "./FinzLogo";

function LoadingGeneral() {
  return (
    <Box
      minH='100dvh'
      display='grid'
      justifyContent='center'
      placeItems='center'
      bg='lightgray'
    >
      <Box animation='finzLogoLoadingAnimation 3s infinite linear'>
        <FinzLogo />
      </Box>
    </Box>
  );
}

export default LoadingGeneral;