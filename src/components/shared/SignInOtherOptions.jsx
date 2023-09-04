import { Box } from "@chakra-ui/react";
import SignInOtherOptionButtonContainer from "./SignInOtherOptionButtonContainer";
import SignInDivider from "../shared/SignInDivider";


function SignInOtherOptions() {
  return (
    <Box
      marginBlockStart='2rem'
      data-testid='signin-other-options'
    >
      <SignInDivider />
      <SignInOtherOptionButtonContainer />
    </Box>

  );
}

export default SignInOtherOptions;