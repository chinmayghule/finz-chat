import { Container } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

// components.
import SignupTitle from "../components/Signup/SignupTitle";
import SignupForm from "../components/Signup/SignupForm";
import SignupLoginHint from "../components/Signup/SignupLoginHint";
import SignupOtherOptions from "../components/shared/SignInOtherOptions";


function Signup() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
      paddingBlock='1rem'
    >
      <SignupTitle />
      <SignupForm setUser={setUser} />
      <SignupLoginHint />
      <SignupOtherOptions />
    </Container>
  );
}

export default Signup;