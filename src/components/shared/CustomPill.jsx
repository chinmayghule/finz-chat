import { Text } from "@chakra-ui/react";

function CustomPill({ pillText }) {
  return (
    <Text
      w='fit-content'
      bg='lightskyblue'
      paddingBlock='0.25rem'
      paddingInline='0.75rem'
      borderRadius='0.5rem'
    >
      {pillText}
    </Text>
  );
}

export default CustomPill;