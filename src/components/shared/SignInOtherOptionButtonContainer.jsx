import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import { signInWithGoogle } from "../../utility/signInWithGoogle";
import { signInWithTwitter } from "../../utility/signInWithTwitter";
import CustomGoogleIcon from "./CustomGoogleIcon";
import CustomTwitterIcon from "./CustomTwitterIcon";


function SignInOtherOptionButtonContainer() {

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
        <Button
          onClick={signInWithTwitter}
          p='2rem'
        >
          <CustomTwitterIcon />
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
      <Button
        onClick={signInWithGoogle}
        leftIcon={<CustomGoogleIcon />}
      >
        Continue with Google
      </Button>
      <Button
        onClick={signInWithTwitter}
        leftIcon={<CustomTwitterIcon />}
      >
        Continue with Twitter
      </Button>
    </Flex>
  );
}

export default SignInOtherOptionButtonContainer;