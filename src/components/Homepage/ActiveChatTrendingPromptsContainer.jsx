import { Box, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import CustomChakraLink from "../shared/CustomChakraLink";
import CustomPill from "../shared/CustomPill";

function ActiveChatTrendingPromptsContainer() {
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
          Heading
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
        p='0rem'
        display='flex'
        flexDirection='row'
        gap='0.5rem'
        flexWrap='wrap'
      >
        <CustomPill pillText='Lorem ipsum' />
        <CustomPill pillText='Lorem' />
        <CustomPill pillText='Lorepsum' />
        <CustomPill pillText='Lorepsum' />
      </CardBody>
    </Card>
  );
}

export default ActiveChatTrendingPromptsContainer;