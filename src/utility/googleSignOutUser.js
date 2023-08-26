import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Cookies from "js-cookie";

async function googleSignOutUser(setUser) {
  try {
    await signOut(auth);
    setUser(null);
    Cookies.remove('user');
  
  } catch(err) {
    console.log(err);
  }
}

export default googleSignOutUser;