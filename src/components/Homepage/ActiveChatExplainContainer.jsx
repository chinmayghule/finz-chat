import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import CustomChakraLink from "../shared/CustomChakraLink";
import HomepageSuggestedPromptsCard from "./HomepageSuggestedPromptsCard";
import { InfoOutlineIcon } from "@chakra-ui/icons";

function ActiveChatExplainContainer() {
  return (
    <Card
      variant='unstyled'
      gap='0.5rem'
      w='100%'
      paddingBlock='1rem'
      paddingInline='0.5rem'
    >
      <CardHeader
        p='0rem'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Heading
          as='h2'
          fontSize='1.25rem'
          fontWeight='bold'
        >
          Explain
        </Heading>
        <CustomChakraLink
          link='#'
          linkContent={
            <Text
              fontSize='0.875rem'
            >
              See all
            </Text>
          }
        />
      </CardHeader>
      <CardBody
        gap='0.5rem'
        p='0rem'
        display='flex'
        flexDirection='row'
      >
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </CardBody>
    </Card>
  );
}

export default ActiveChatExplainContainer;