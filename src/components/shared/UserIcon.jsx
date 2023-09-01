import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function UserIcon() {

  const { user } = useContext(UserContext);
  const photoUrl = user.photoURL;

  const iconStyle = {
    height: '3rem',
    maxWidth: '3rem',
    aspectRatio: '1 / 1',
    backgroundColor: 'lightgreen',
    flexGrow: '1'
  };

  if (photoUrl) {
    return (
      <Image
        src={photoUrl}
        alt={`Photo of user ${user?.displayName}`}
        boxSize='3rem'
      />
    );

  } else {
    return (
      <div style={iconStyle}></div>
    );
  }

}


export default UserIcon;