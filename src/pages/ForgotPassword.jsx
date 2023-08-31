import { Container } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

// components.
import ForgotPasswordTitle from "../components/ForgotPassword/ForgotPasswordTitle";
import ForgotPasswordForm from "../components/ForgotPassword/ForgotPasswordForm";
import LoadingGeneral from "../components/shared/LoadingGeneral";


function ForgotPassword() {

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { user, setUser, isAuthStateLoading } = useContext(UserContext);

  // effects.

  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
    if (!isAuthStateLoading && user) {
      navigate('/homepage');
    }

    if (isLoading) {
      setIsLoading(false);
    }

  }, [user]);


  // return statements.
  if (isLoading) {
    return <LoadingGeneral />;
  }


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