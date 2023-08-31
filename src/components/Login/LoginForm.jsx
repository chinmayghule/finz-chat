import {
  Alert,
  AlertIcon,
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
import ForgotPasswordLink from "./ForgotPasswordLink";
import { browserLocalPersistence, browserSessionPersistence } from "firebase/auth";


function LoginForm({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const persistence =
    (rememberMe) ? browserLocalPersistence : browserSessionPersistence;


  const handleTogglePasswordVisibility = (e) => {
    setShowPassword(prevVisibilityState => !prevVisibilityState);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();    

    signInWithPassword({
      email,
      password,
      setUser,
      setError,
      persistence
    });
  };

  const errorAlert = (error) => {
    if(error === null) return null;

    let errorMessage;

    if(error.code === 'auth/user-not-found') {
      errorMessage = 'Email or password is incorrect.';
    } else {
      errorMessage = 'Something went wrong. Please try again.';
    }

    return (
      <Alert status="error">
        <AlertIcon />
        {errorMessage}
      </Alert>
    );
  };
  
  
  // return statements.
  return (
    <Box
      as='form'
      onSubmit={handleLoginFormSubmit}
      display='flex'
      flexDirection='column'
      gap='1rem'
      marginBlockStart='2rem'
    >
      
      {errorAlert(error)}

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
        <ForgotPasswordLink />
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