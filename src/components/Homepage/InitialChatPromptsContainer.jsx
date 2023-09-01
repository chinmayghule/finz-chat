import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/react";
import HomepageSuggestedPromptsCard from "./HomepageSuggestedPromptsCard";


function InitialChatPromptsContainer() {
  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      gap='1rem'
      fontSize='0.75rem'
      
      w={{ base: '100%', md: '50%' }}
    >
      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <HomepageSuggestedPromptsCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>
    </Grid>
  );
}


export default InitialChatPromptsContainer;