import { Text, useColorMode } from "@chakra-ui/react";

function CustomPill({ pillText, isPillSelected = false }) {
  const { colorMode } = useColorMode();

  const textColor =
    (isPillSelected || colorMode === 'light') ? 'black' : 'white';
  let bgColor;

  if (isPillSelected) {
    bgColor = 'lightgreen';

  } else if (colorMode === 'dark') {
    bgColor = 'rgba(255, 255, 255, 0.08)';
  
  } else {
    bgColor = 'rgba(226, 232, 240, 1)'
  }

  return (
    <Text
      w='fit-content'
      bg={bgColor}
      color={textColor}
      paddingBlock='0.25rem'
      paddingInline='0.75rem'
      borderRadius='0.5rem'
      data-testid='custom-pill'
    >
      {pillText}
    </Text>
  );
}

export default CustomPill;