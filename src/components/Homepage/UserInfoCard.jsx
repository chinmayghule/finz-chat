import { Flex } from "@chakra-ui/react";
import UserIcon from "./UserIcon";
import BasicUserInfo from "./BasicUserInfo";
import MoreOptions from "./MoreOptions";

function UserInfoCard() {
  return (
    <Flex
      w='100%'
      alignItems='center'
      gap="1rem"
    >
      <UserIcon />
      <BasicUserInfo />
      <MoreOptions />
    </Flex>
  );
}


export default UserInfoCard;