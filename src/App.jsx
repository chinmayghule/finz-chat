// external libraries.
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// components.
import Splash from "./components/Splash";

// pages.
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { UserContext } from "./contexts/UserContext.js";
import Cookies from "js-cookie";
import { useState } from "react";



function App() {

  const [user, setUser] = useState(() => {
    const user = Cookies.get('user');

    return (user) ? user : null;
  });
  
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
    }, {
      path: '/homepage',
      element: <Homepage />
    },
  ]);

  return (
    <ChakraProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
