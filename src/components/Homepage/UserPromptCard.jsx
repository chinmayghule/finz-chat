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


  /*
  return (
    <Grid
      templateColumns='1fr 8.5fr 0.5fr'
      gap="1rem"
      p='1rem'
      border="1px solid black"
      w='100%'
    >
      <UserIcon />
      <Text>{promptText}</Text>
      <EditIcon justifySelf='end' />
    </Grid>
  );
  */
}

export default UserPromptCard;