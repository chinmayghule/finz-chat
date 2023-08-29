// external libraries.
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { UserContext } from "./contexts/UserContext.js";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

// pages.
import Splash from "./pages/Splash";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import ForgotPassword from "./pages/ForgotPassword";



function App() {

  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Splash />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/homepage',
      element: <Homepage />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    }
  ]);


  // effects.

  // global effect for `user` state.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();

  }, []);


  return (
    <ChakraProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
