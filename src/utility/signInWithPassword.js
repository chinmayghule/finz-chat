import { setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";


async function signInWithPassword({
  email,
  password,
  setUser,
  persistence
}) {

  try {
    await setPersistence(auth, persistence);

    const userCredential =
      await signInWithEmailAndPassword(auth, email, password);

    setUser(userCredential.user);

  } catch (err) {
    console.log(err);
  }
}


export { signInWithPassword };