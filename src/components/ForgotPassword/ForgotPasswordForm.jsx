import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import { sendPasswordResetEmail } from "firebase/auth";

import { useState } from "react";
import { auth } from "../../firebaseConfig";
import CustomChakraLink from "../shared/CustomChakraLink";


function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [
    isRecoveryEmailSent,
    setIsRecoveryEmailSent] = useState(false);
  const [
    recoveryEmailError,
    setRecoveryEmailError
  ] = useState(null);
  const [
    userRequestedEmailRecovery,
    setUserRequestedEmailRecovery
  ] = useState(false);


  const handleForgotPasswordFormSubmit = (e) => {
    e.preventDefault();

    
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setIsRecoveryEmailSent(true);
    })
    .catch((err) => {
      setRecoveryEmailError(err.message);
    })
    .finally(() => {
      setEmail('');
      setUserRequestedEmailRecovery(true);
      });
  };

  const recoveryEmailAlert = () => {
    let alertStatus;
    let message;

    if (isRecoveryEmailSent) {
      alertStatus = 'success';
      message = 'Recovery Email Send Successfully!';

    } else {
      alertStatus = 'error';
      message = recoveryEmailError;
    }

    setTimeout(() => setUserRequestedEmailRecovery(false), 10000);

    return (
      <Alert
        status={alertStatus}
        visibility={(userRequestedEmailRecovery) ? 'visible' : 'hidden'}
      >
        <AlertIcon />
        {message}
      </Alert>
    );
  };


  return (
    <Box
      as='form'
      onSubmit={handleForgotPasswordFormSubmit}
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

      <Button
        type="submit"
        marginBlockStart='1rem'
        isDisabled={(userRequestedEmailRecovery) ? true : false}
      >
        Recover Password
      </Button>

      <CustomChakraLink
        link='/login'
        linkContent={
          <Text textAlign='center'>
            Return to login
          </Text>
        }
      />

      {recoveryEmailAlert()}

    </Box>
  );
}

export default ForgotPasswordForm;