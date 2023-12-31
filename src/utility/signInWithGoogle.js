import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebaseConfig";

async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithRedirect(auth, provider);

  } catch(err) {
    console.log(err);
    alert(err);
  }
}


export { signInWithGoogle };