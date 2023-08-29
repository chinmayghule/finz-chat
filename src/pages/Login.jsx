import { Container } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

// components.
import LoginTitle from "../components/Login/LoginTitle";
import LoginForm from "../components/Login/LoginForm";
import LoginHint from "../components/Login/LoginHint";
import SignInOtherOptions from "../components/shared/SignInOtherOptions";


function Login() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // effects.

  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
      if (user) {
        navigate('/homepage');
      }

  }, [user]);

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