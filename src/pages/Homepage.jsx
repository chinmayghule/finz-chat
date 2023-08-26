import { Button } from "@chakra-ui/react";
import googleSignOutUser from "../utility/googleSignOutUser";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Cookies from "js-cookie";

function Homepage() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    googleSignOutUser(setUser);
    navigate('/login');
  };


  // effects.

  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        Cookies.remove('user');
        navigate('/login');
      }
    });

  }, []);


  return (
    <div>
      <div>Homepage</div>
      <Button onClick={handleSignOut}>
        Logout
      </Button>
    </div>
  );
}

export default Homepage;