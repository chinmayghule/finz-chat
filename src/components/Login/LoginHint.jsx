import { Text } from "@chakra-ui/react";
import CustomChakraLink from "../shared/CustomChakraLink";

function LoginHint() {
  return (
    <Text
      textAlign='center'
      marginBlockStart='1rem'
      fontSize='0.875rem'
    >
      Don't have an account? <CustomChakraLink link='/signup' linkContent='Sign up' />
    </Text>
  );
}

export default LoginHint;