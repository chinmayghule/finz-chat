import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import CustomChakraLink from "../components/CustomChakraLink";
import { useState } from "react";

function Login() {

  return (
    <Container
      as='main'
      display='flex'
      flexDirection='column'
      minH='100dvh'
      justifyContent='center'
      w={{
        base: '100vw',          // mobile screens
        sm: 'max(300px, 50vw)'  // beyond mobile screens
      }}
    >
      <LoginTitle />
      <LoginForm />
      <LoginLoginHint />
      <LoginOtherOptions />
    </Container>
  );
}

// local components.
function LoginTitle() {
  return (
    <Text
      fontSize='1.875rem'
      fontWeight='700'
    >
      Welcome Back 👋
    </Text>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const handleTogglePasswordVisibility = (e) => {
    setShowPassword(prevVisibilityState => !prevVisibilityState);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    alert('login form submitted');
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
      <FormControl>
        <FormLabel fontSize='0.875rem'>Email address</FormLabel>
        <Input
          type='email'
          placeholder='Your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize='0.875rem'>Password</FormLabel>
        <InputGroup>
          <Input
            type={(showPassword) ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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

function LoginOtherOptions() {
  return (
    <Box marginBlockStart='2rem'>
      <LoginDivider />
      <LoginOtherOptionButtonContainer />
    </Box>

  );
}

function LoginLoginHint() {
  return (
    <Text
      textAlign='center'
      marginBlockStart='1rem'
      fontSize='0.875rem'
    >
      Don't have an account? <CustomChakraLink link='/signup' linkContent='Sign up' />
    </Text>
  );
}

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

function LoginOtherOptionButtonContainer() {
  return (
    <Flex
      flexDirection='column'
      gap='1rem'
      marginBlockStart='1rem'
    >
      <Button>Continue with Google</Button>
      <Button>Continue with Microsoft</Button>
    </Flex>
  );
}

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

function ForgotPassword() {
  return (
    <CustomChakraLink
      link='#'
      linkContent={
        <Text fontSize='0.875rem'>Forgot Password?</Text>
      }
    />
  );
}



export default Login;