import { Box } from "@chakra-ui/react";
import LoginDivider from "./LoginDivider";
import LoginOtherOptionButtonContainer from "./LoginOtherOptionButtonContainer";


function LoginOtherOptions() {
  return (
    <Box marginBlockStart='2rem'>
      <LoginDivider />
      <LoginOtherOptionButtonContainer />
    </Box>

  );
}

export default LoginOtherOptions;