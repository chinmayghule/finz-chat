import { EditIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import UserIcon from "../shared/UserIcon";
import HomepageChatCard from "../shared/HomepageChatCard";

function UserPromptCard({ promptText }) {

  return (
    <HomepageChatCard
      chatOwnerIcon={<UserIcon />}
      chatContent={<Text>{promptText}</Text>}
      chatOperationIcon={<EditIcon justifySelf='end' />}
    />
  );
}

export default UserPromptCard;