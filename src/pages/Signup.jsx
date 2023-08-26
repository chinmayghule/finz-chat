import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Divider, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import CustomChakraLink from "../components/CustomChakraLink";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { UserContext } from "../contexts/UserContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../utility/signInWithGoogle";
import { signUpWithPassword } from "../utility/signUpWithPassword";

function Signup() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (!user) {
        Cookies.remove('user');
      } else {
        navigate('/homepage');
      }
    });

  }, []);


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
      <SignupTitle />
      <SignupForm setUser={setUser} />
      <SignupLoginHint />
      <SignupOtherOptions />
    </Container>
  );
}

// local components.
function SignupTitle() {
  return (
    <Text
      fontSize='1.875rem'
      fontWeight='700'
    >
      Signup
    </Text>
  );
}

function SignupForm({ setUser }) {    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [
    showConfirmPassword,
    setShowConfirmPassword
  ] = useState(false);

  const handleTogglePasswordVisibility = (e) => {
    setShowPassword(prevVisibilityState => !prevVisibilityState);
  };

  const handleToggleConfirmPasswordVisibility = (e) => {
    setShowConfirmPassword(prevVisibilityState => !prevVisibilityState);
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      alert('Password and Confirm Password fields have different values.');
      return;
    }

    signUpWithPassword({ email, password, setUser });
  };

  return (
    <Box
      as='form'
      onSubmit={handleSignupFormSubmit}
      display='flex'
      flexDirection='column'
      gap='1rem'
      marginBlockStart='2rem'
    >
      <FormControl>
        <FormLabel fontSize='0.875rem'>Email</FormLabel>
        <Input
          type='email'
          placeholder='example@gmail.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize='0.875rem'>Create a password</FormLabel>
        <InputGroup>
          <Input
            type={(showPassword) ? 'text' : 'password'}
            placeholder="must be 8 characters"
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

      <FormControl>
        <FormLabel fontSize='0.875rem'>Confirm password</FormLabel>
        <InputGroup>
          <Input
            type={(showConfirmPassword) ? 'text' : 'password'}
            placeholder="repeat password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <InputRightElement>
            <Button onClick={handleToggleConfirmPasswordVisibility}>
              {(showConfirmPassword) ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        type="submit"
        marginBlockStart='1rem'
      >
        Sign up
      </Button>
    </Box>
  );
}

function SignupOtherOptions() {
  return (
    <Box marginBlockStart='2rem'>
      <SignupDivider />
      <SignupOtherOptionButtonContainer />
    </Box>

  );
}

function SignupLoginHint() {
  return (
    <Text
      textAlign='center'
      marginBlockStart='1rem'
      fontSize='0.875rem'
    >
      Already have an account? <CustomChakraLink link='/login' linkContent='Log in' />
    </Text>
  );
}

function SignupDivider() {
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

function SignupOtherOptionButtonContainer() {
  return (
    <Flex
      flexDirection='column'
      gap='1rem'
      marginBlockStart='1rem'
    >
      <Button onClick={signInWithGoogle}>
        Continue with Google
      </Button>
      <Button>Continue with Microsoft</Button>
    </Flex>
  );
}

export default Signup;