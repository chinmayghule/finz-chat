import { TwitterAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebaseConfig";

async function signInWithTwitter() {
  const provider = new TwitterAuthProvider();

  try {
    await signInWithRedirect(auth, provider);
  
  } catch(err) {
    console.log(err);
  }
}


export { signInWithTwitter };