import { Divider, Flex, Text } from "@chakra-ui/react";

function LoginDivider() {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      gap='0rem'
    >
      <Divider
        w='100%'
        border='1px solid black'
        flex='1'
      />
      <Text
        flex='auto'
        w='min-content'
        textAlign='center'
        fontSize='0.875rem'
      >
        or continue with
      </Text>
      <Divider
        w='100%'
        border='1px solid black'
        flex='1'
      />
    </Flex>
  );
}

export default LoginDivider;