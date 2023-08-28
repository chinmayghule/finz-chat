import { Text } from "@chakra-ui/react";
import CustomChakraLink from "../shared/CustomChakraLink";

function ForgotPassword() {
  return (
    <CustomChakraLink
      link='#'
      linkContent={
        <Text fontSize='0.875rem'>Forgot Password?</Text>
      }
    />
  );
}


export default ForgotPassword;