import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { signInWithPassword } from "../../utility/signInWithPassword";
import RememberMe from "./RememberMe";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import ForgotPassword from "./ForgotPassword";


function LoginForm({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const handleTogglePasswordVisibility = (e) => {
    setShowPassword(prevVisibilityState => !prevVisibilityState);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    signInWithPassword({ email, password, setUser });
  };

  return (
    <Box
      as='form'
      onSubmit={handleLoginFormSubmit}
      display='flex'
      flexDirection='column'
      gap='1rem'
      marginBlockStart='2rem'
    >
      <FormControl isRequired>
        <FormLabel fontSize='0.875rem'>Email address</FormLabel>
        <Input
          type='email'
          placeholder='Your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel fontSize='0.875rem'>Password</FormLabel>
        <InputGroup>
          <Input
            type={(showPassword) ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            minLength='8'
          />
          <InputRightElement>
            <Button onClick={handleTogglePasswordVisibility}>
              {(showPassword) ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Flex
        flexDirection='row'
        justifyContent='space-between'
      >
        <RememberMe
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
        />
        <ForgotPassword />
      </Flex>

      <Button
        type="submit"
        marginBlockStart='1rem'
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;