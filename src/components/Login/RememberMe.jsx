import { Checkbox, Text } from "@chakra-ui/react";

function RememberMe({ rememberMe, setRememberMe }) {
  return (
    <Checkbox
      alignItems='center'
      isChecked={rememberMe}
      onChange={e => setRememberMe(e.target.checked)}
      onKeyDown={(e) => {
        if(e.key === ' ') {
          e.preventDefault
        }
      }}
    >
      <Text fontSize='0.875rem'>Remember Me</Text>
    </Checkbox>
  );
}

export default RememberMe;