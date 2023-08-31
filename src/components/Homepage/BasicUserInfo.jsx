import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function BasicUserInfo() {

  const { user } = useContext(UserContext);
  const username = user?.displayName || 'User';
  const userEmail = user?.email || 'example@mail.com';

  // styles.
  const noOverflowStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };
  
  return (
    <Flex
      flexDirection='column'
      flexGrow='auto'
      justifyContent='center'
      w='100%'
    >
      <Text style={noOverflowStyle}>{username}</Text>
      <Text style={noOverflowStyle}>{userEmail}</Text>
    </Flex>
  );
}


export default BasicUserInfo;