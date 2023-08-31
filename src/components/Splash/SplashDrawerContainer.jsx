import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from "@chakra-ui/react";
import SplashDrawerCard from "./SplashDrawerCard";
import SplashLogo from "./SplashLogo";


function SplashDrawerContainer({ isOpen, onClose }) {
  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <SplashLogo />
        </DrawerHeader>
        <DrawerBody
          display='flex'
          flexDirection='column'
          gap='0.5rem'
        >
          <SplashDrawerCard link='#' linkContent='About' />
          <SplashDrawerCard link='#' linkContent='API' />
          <SplashDrawerCard link='#' linkContent='Contact' />
          <SplashDrawerCard link='#' linkContent='Profile' />
          <SplashDrawerCard
            link='#'
            linkContent='Send Feedback'
          />
        </DrawerBody>
      </DrawerContent>

    </Drawer>
  );
}

export default SplashDrawerContainer;