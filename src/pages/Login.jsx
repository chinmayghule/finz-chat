import { Container } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../contexts/UserContext";

import LoginTitle from "../components/Login/LoginTitle";
import LoginForm from "../components/Login/LoginForm";
import LoginHint from "../components/Login/LoginHint";
import LoginOtherOptions from "../components/Login/LoginOtherOptions";


function Login() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // effects.

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

  // check redirected result after trying to log in.
  useEffect(() => {
    async function checkRedirectResult() {
      try {
        const result = await getRedirectResult(auth);

        if (result) {
          console.log(result);
          setUser(result.user);
          Cookies.set('user', JSON.stringify(result.user));
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
    >
      <LoginTitle />
      <LoginForm setUser={setUser} />
      <LoginHint />
      <LoginOtherOptions />
    </Container>
  );
}


export default Login;