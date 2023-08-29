import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";


async function googleSignOutUser(setUser) {
  try {
    await signOut(auth);
    setUser(null);
  
  } catch(err) {
    console.log(err);
  }
}

export default googleSignOutUser;