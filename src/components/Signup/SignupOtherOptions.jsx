import { Box } from "@chakra-ui/react";
import SignupDivider from "./SignupDivider";
import SignupOtherOptionButtonContainer from "./SignupOtherOptionButtonContainer";


function SignupOtherOptions() {
  return (
    <Box marginBlockStart='2rem'>
      <SignupDivider />
      <SignupOtherOptionButtonContainer />
    </Box>

  );
}

export default SignupOtherOptions;