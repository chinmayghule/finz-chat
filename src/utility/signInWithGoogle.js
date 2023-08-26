import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebaseConfig";

async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  console.log('function working...');
  
  try {
    console.log('inside try block...');
    const result = await signInWithRedirect(auth, provider);

  } catch(err) {
    console.log(err);
  }
}


export { signInWithGoogle };