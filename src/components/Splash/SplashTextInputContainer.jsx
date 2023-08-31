import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import CustomSquareCaretRight from "../shared/CustomSquareCaretRight";

function SplashTextInputContainer() {

  return (
    <InputGroup
      w={{
        base: 'calc(100vw - 2rem)',
        sm: 'max(300px, 50vw)'
      }}
      m='auto'
    >
      <Input
        type='text'
      />
      <InputRightElement pointerEvents='none'>
        <CustomSquareCaretRight />
      </InputRightElement>
    </InputGroup>
  );
}


export default SplashTextInputContainer;