import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import CustomGoogleIcon from "../shared/CustomGoogleIcon";
import { signInWithGoogle } from "../../utility/signInWithGoogle";

function SignupOtherOptionButtonContainer() {

  const isMediumBreakpoint =
    useBreakpointValue({ base: false, md: true });

  if (!isMediumBreakpoint) {
    return (
      <Flex
        flexDirection='row'
        justifyContent='center'
        gap='2rem'
        marginBlockStart='1rem'
      >
        <Button
          onClick={signInWithGoogle}
          p='2rem'
        >
          <CustomGoogleIcon />
        </Button>
        <Button p='2rem'>
          <CustomGoogleIcon />
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      flexDirection='column'
      gap='1rem'
      marginBlockStart='1rem'
    >
      <Button onClick={signInWithGoogle}>
        Continue with Google
      </Button>
      <Button>Continue with Microsoft</Button>
    </Flex>
  );
}

export default SignupOtherOptionButtonContainer;