import { Checkbox, Text } from "@chakra-ui/react";

function RememberMe({ rememberMe, setRememberMe }) {
  return (
    <Checkbox
      alignItems='center'
      isChecked={rememberMe}
      onChange={e => setRememberMe(e.target.checked)}
    >
      <Text fontSize='0.875rem'>Remember Me</Text>
    </Checkbox>
  );
}

export default RememberMe;