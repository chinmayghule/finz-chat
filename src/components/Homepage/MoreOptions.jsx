import { Button, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import VerticalEllipsisIcon from "./VerticalEllipsisIcon";
import googleSignOutUser from "../../utility/googleSignOutUser";
import { UserContext } from "../../contexts/UserContext";


function MoreOptions() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();


  // functions.
  const handleSignOut = () => {
    googleSignOutUser(setUser);
    navigate('/login');
  };


  return (
    <Menu
      flexGrow='1'
      alignSelf='stretch'
    >
      <MenuButton as={Button}>
        <VerticalEllipsisIcon />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => toggleColorMode()}>
          {(colorMode === 'light') ? 'Dark Mode' : 'Light Mode'}
        </MenuItem>
        <MenuItem onClick={handleSignOut}>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
}


export default MoreOptions;