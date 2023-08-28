import { HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

function DrawerOpenButton({ onOpen }) {
  return (
    <Button
      onClick={onOpen}
      position='fixed'
      display='grid'
      justifyContent='center'
      placeItems='center'
      marginBlockStart='1rem'
    >
      <HamburgerIcon />
    </Button>
  );
}


export default DrawerOpenButton;