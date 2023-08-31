import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

async function signUpWithPassword({
  email,
  password,
  setUser,
  setError
}) {

  try {
    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    setUser(userCredential.user);

  } catch (err) {
    setError(err);

    setTimeout(() => setError(null), 10000);
  }
}


export { signUpWithPassword };