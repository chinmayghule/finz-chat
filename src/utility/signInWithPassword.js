import { setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";


async function signInWithPassword({
  email,
  password,
  setUser,
  setError,
  persistence
}) {

  try {
    await setPersistence(auth, persistence);

    const userCredential =
      await signInWithEmailAndPassword(auth, email, password);

    setUser(userCredential.user);

  } catch (err) {
    console.log(err?.code);
    setError(err?.code);

    setTimeout(() => setError(null), 10000);
  }
}


export { signInWithPassword };