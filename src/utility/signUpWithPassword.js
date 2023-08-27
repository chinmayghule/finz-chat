import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Cookies from "js-cookie";

async function signUpWithPassword({ email, password, setUser }) {
  try {
    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    setUser(userCredential.user);
    Cookies.set('user', JSON.stringify(userCredential.user));

  } catch (err) {
    console.log(err);
  }
}


export { signUpWithPassword };