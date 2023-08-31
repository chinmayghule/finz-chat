import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { signUpWithPassword } from "../../utility/signUpWithPassword";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";



function SignupForm({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [
    showConfirmPassword,
    setShowConfirmPassword
  ] = useState(false);
  const [error, setError] = useState(null);

  const handleTogglePasswordVisibility = (e) => {
    setShowPassword(prevVisibilityState => !prevVisibilityState);
  };

  const handleToggleConfirmPasswordVisibility = (e) => {
    setShowConfirmPassword(prevVisibilityState => !prevVisibilityState);
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and Confirm Password fields have different values.');
      return;
    }

    signUpWithPassword({ email, password, setUser, setError });
  };


  const errorAlert = (error) => {
    if (error === null) return null;
    
    return (
      <Alert status="error">
        <AlertIcon />
        Something went wrong. Please try again.
      </Alert>
    );
  };

  // return statements.
  return (
    <Box
      as='form'
      onSubmit={handleSignupFormSubmit}
      display='flex'
      flexDirection='column'
      gap='1rem'
      marginBlockStart='2rem'
    >
      
      {errorAlert(error)}

      <FormControl isRequired>
        <FormLabel fontSize='0.875rem'>Email</FormLabel>
        <Input
          type='email'
          placeholder='example@gmail.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel fontSize='0.875rem'>Create a password</FormLabel>
        <InputGroup>
          <Input
            type={(showPassword) ? 'text' : 'password'}
            placeholder="must be 8 characters"
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

      <FormControl isRequired>
        <FormLabel fontSize='0.875rem'>Confirm password</FormLabel>
        <InputGroup>
          <Input
            type={(showConfirmPassword) ? 'text' : 'password'}
            placeholder="repeat password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            minLength='8'
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

export default SignupForm;