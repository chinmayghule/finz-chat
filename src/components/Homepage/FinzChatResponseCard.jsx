import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import FinzLogo from "../shared/FinzLogo";
import HomepageChatCard from "../shared/HomepageChatCard";

function FinzChatResponseCard({ responseText }) {

  return (
    <HomepageChatCard
      chatOwnerIcon={<FinzLogo scale='0.75' />}
      chatContent={<Text>{responseText}</Text>}
      chatOperationIcon={<StarIcon justifySelf='end' />}
    />
  );



  // return (
  //   <Grid
  //     templateColumns='0.5fr 9fr 0.5fr'
  //     gap="1rem"
  //     p='1rem'
  //     border="1px solid black"
  //   >
  //     <GridItem>
  //       <FinzLogo scale='0.5' />
  //     </GridItem>
  //     <GridItem>
  //       <Text>
  //         {responseText}
  //       </Text>
  //     </GridItem>
  //     <GridItem>
  //       <StarIcon justifySelf='end' />
  //     </GridItem>
  //   </Grid>
  // );

  // return (
  //   <Card
  //     direction='row'
  //     p='1rem'
  //     border="1px solid black"
  //     gap='1rem'
  //   >
  //     <CardHeader p='0'>
  //       <FinzLogo scale='0.5' />
  //     </CardHeader>

  //     <CardBody p='0'>
  //       <Text>{responseText}</Text>
  //     </CardBody>

  //     <CardFooter p='0'>
  //       <StarIcon justifySelf='end' />
  //     </CardFooter>
  //   </Card>
  // );

}

export default FinzChatResponseCard;