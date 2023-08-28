import { ArrowRightIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function SplashTextInputContainer() {

  return (
    <InputGroup
      w='max(300px, 50vw)'
      m='auto'
    >
      <Input
        type='text'
      />
      <InputRightElement pointerEvents='none'>
        <ArrowRightIcon />
      </InputRightElement>
    </InputGroup>
  );
}


export default SplashTextInputContainer;