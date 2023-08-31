// external libraries.
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { UserContext } from "./contexts/UserContext.js";
import { Suspense, lazy, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

// pages.
import LoadingGeneral from "./components/shared/LoadingGeneral.jsx";


const Splash = lazy(() => import("./pages/Splash"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Homepage = lazy(() => import("./pages/Homepage"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));


function App() {

  const [user, setUser] = useState(null);
  const [
    isAuthStateLoading,
    setIsAuthStateLoading
  ] = useState(true);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Splash />
    },
    {
      path: '/signup',
      element: (
        <Suspense fallback={<LoadingGeneral />}>
          <Signup />
        </Suspense>
      )
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<LoadingGeneral />}>
          <Login />
        </Suspense>
      )
    },
    {
      path: '/homepage',
      element: (
        <Suspense fallback={<LoadingGeneral />}>
          <Homepage />
        </Suspense>
      )
    },
    {
      path: '/forgot-password',
      element: (
        <Suspense fallback={<LoadingGeneral />}>
          <ForgotPassword />
        </Suspense>
      )
    }
  ]);


  // effects.

  // global effect for `user` state.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthStateLoading(false);      
    });

    return () => unsubscribe();

  }, []);


  return (
    <ChakraProvider>
      <UserContext.Provider
        value={{ user, setUser, isAuthStateLoading }}
      >
        <RouterProvider router={router} />
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
