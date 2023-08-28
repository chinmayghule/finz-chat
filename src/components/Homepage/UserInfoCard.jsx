import { Flex } from "@chakra-ui/react";
import BasicUserInfo from "./BasicUserInfo";
import MoreOptions from "./MoreOptions";
import UserIcon from "../shared/UserIcon";

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