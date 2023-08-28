import { Container } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { UserContext } from "../contexts/UserContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import SignupTitle from "../components/Signup/SignupTitle";
import SignupForm from "../components/Signup/SignupForm";
import SignupLoginHint from "../components/Signup/SignupLoginHint";
import SignupOtherOptions from "../components/Signup/SignupOtherOptions";


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

export default Signup;