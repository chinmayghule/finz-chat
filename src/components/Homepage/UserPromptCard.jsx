import { EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import UserIcon from "../shared/UserIcon";

function UserPromptCard({ promptText }) {

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
}

export default UserPromptCard;