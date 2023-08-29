import { Container } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

// components.
import ForgotPasswordTitle from "../components/ForgotPassword/ForgotPasswordTitle";
import ForgotPasswordForm from "../components/ForgotPassword/ForgotPasswordForm";


function ForgotPassword() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // effects.

  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
    if (user) {
      navigate('/homepage');
    }

  }, [user]);


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
      <ForgotPasswordTitle />
      <ForgotPasswordForm />
    </Container>
  );
}


export default ForgotPassword;