import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

async function signUpWithPassword({ email, password, setUser }) {
  try {
    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    setUser(userCredential.user);

  } catch (err) {
    console.log(err);
  }
}


export { signUpWithPassword };