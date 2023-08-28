import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import VerticalEllipsisIcon from "./VerticalEllipsisIcon";
import googleSignOutUser from "../../utility/googleSignOutUser";
import { UserContext } from "../../contexts/UserContext";


function MoreOptions() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
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
        <MenuItem>Dark Mode</MenuItem>
        <MenuItem onClick={handleSignOut}>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
}


export default MoreOptions;