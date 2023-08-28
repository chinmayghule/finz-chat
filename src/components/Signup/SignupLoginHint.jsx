import { Text } from "@chakra-ui/react";
import CustomChakraLink from "../shared/CustomChakraLink";

function SignupLoginHint() {
  return (
    <Text
      textAlign='center'
      marginBlockStart='1rem'
      fontSize='0.875rem'
    >
      Already have an account? <CustomChakraLink link='/login' linkContent='Log in' />
    </Text>
  );
}

export default SignupLoginHint;