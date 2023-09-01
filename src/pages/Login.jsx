import { Container } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

// components.
import LoginTitle from "../components/Login/LoginTitle";
import LoginForm from "../components/Login/LoginForm";
import LoginHint from "../components/Login/LoginHint";
import SignInOtherOptions from "../components/shared/SignInOtherOptions";
import LoadingGeneral from "../components/shared/LoadingGeneral";


function Login() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser, isAuthStateLoading } = useContext(UserContext);

  // effects.

  // set observer on user state.
  useEffect(() => {
    if (!isAuthStateLoading && user) {
      navigate('/homepage');
    }

    if(!isAuthStateLoading && !user) {
      setIsLoading(false);
    }

  }, [user, isAuthStateLoading]);

  // check redirected result after trying to log in.
  useEffect(() => {
    async function checkRedirectResult() {
      try {
        const result = await getRedirectResult(auth);

        if (result) {
          navigate('/homepage');
        }
      } catch (err) {
        console.error(err);
      }
    }

    checkRedirectResult();

  }, []);


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
      paddingBlock='1rem'
    >
      <LoginTitle />
      <LoginForm setUser={setUser} />
      <LoginHint />
      <SignInOtherOptions />
    </Container>
  );
}


export default Login;