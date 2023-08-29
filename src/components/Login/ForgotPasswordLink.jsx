import { Text } from "@chakra-ui/react";
import CustomChakraLink from "../shared/CustomChakraLink";

function ForgotPasswordLink() {
  return (
    <CustomChakraLink
      link='/forgot-password'
      linkContent={
        <Text fontSize='0.875rem'>Forgot Password?</Text>
      }
    />
  );
}


export default ForgotPasswordLink;