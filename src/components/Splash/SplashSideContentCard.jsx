import { Box } from "@chakra-ui/react";

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


export default SplashSideContentCard;