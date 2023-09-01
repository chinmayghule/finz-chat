import { Box } from "@chakra-ui/react";

function SplashSideContentCard({ textContent }) {

  return (
    <Box
      p='1rem'
      textAlign='center'
      alignSelf='stretch'
      backgroundColor='#2D3748'
      borderRadius='0.5rem'
    >
      {textContent}
    </Box>
  );
}


export default SplashSideContentCard;