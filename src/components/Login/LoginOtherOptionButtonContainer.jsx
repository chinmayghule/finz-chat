import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import { signInWithGoogle } from "../../utility/signInWithGoogle";
import CustomGoogleIcon from "../shared/CustomGoogleIcon";


function LoginOtherOptionButtonContainer() {

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
      <Button
        onClick={signInWithGoogle}
        leftIcon={<CustomGoogleIcon />}
      >
        Continue with Google
      </Button>
      <Button leftIcon={<CustomGoogleIcon />}>
        Continue with Microsoft
      </Button>
    </Flex>
  );
}

export default LoginOtherOptionButtonContainer;