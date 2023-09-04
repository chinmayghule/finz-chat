import { Grid } from "@chakra-ui/react";

function HomepageChatCard({
  chatOwnerIcon,
  chatContent,
  chatOperationIcon
}) {

  return (
    <Grid
      templateColumns='3rem 1fr min-content'
      gap="1rem"
      p='1rem'
      border="1px solid black"
      w='100%'
      data-testid='homepage-chat-card'
    >
      {chatOwnerIcon}
      {chatContent}
      {chatOperationIcon}
    </Grid>
  );
}

export default HomepageChatCard;