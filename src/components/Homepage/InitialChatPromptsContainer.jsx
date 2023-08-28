import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/react";
import PromptCard from "./PromptCard";


function InitialChatPromptsContainer() {
  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      gap='1rem'
      fontSize='0.75rem'
    >
      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>

      <GridItem>
        <PromptCard
          iconElement={<InfoOutlineIcon />}
          textContent={"Lorem ipsum dolor sit amet consectetur."}
        />
      </GridItem>
    </Grid>
  );
}


export default InitialChatPromptsContainer;