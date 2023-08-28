import { Flex, Text } from "@chakra-ui/react";

function BasicUserInfo() {

  return (
    <Flex
      flexDirection='column'
      flexGrow='auto'
      justifyContent='center'
    >
      <Text>John Doe</Text>
      <Text>johndoe@gmail.com</Text>
    </Flex>
  );
}


export default BasicUserInfo;