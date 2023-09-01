import {
  Grid,
  GridItem,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";

// components.
import SplashNavbar from "../components/Splash/SplashNavbar";
import SplashMainContent from "../components/Splash/SplashMainContent";
import SplashSideContent from "../components/Splash/SplashSideContent";
import SplashTextInputContainer from "../components/Splash/SplashTextInputContainer";
import SplashInstructionTextContent from "../components/Splash/SplashInstructionTextContent";
import SplashNavbarShort from "../components/Splash/SplashNavbarShort";
import SplashDrawerContainer from "../components/Splash/SplashDrawerContainer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import LoadingGeneral from "../components/shared/LoadingGeneral";
import { useNavigate } from "react-router-dom";


function Splash() {

  const { user, isAuthStateLoading } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const [isSmallerThan1024] = useMediaQuery('(max-width: 1024px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // effects.
  useEffect(() => {
    if (!isAuthStateLoading && user) {
      navigate('/homepage');
    }

    if(!isAuthStateLoading && !user) {
      setIsLoading(false);
    }

  }, [user, isAuthStateLoading]);
  
  
  // return statements.
  if(isLoading) {
    return <LoadingGeneral />;
  }
  
  if (isSmallerThan1024) {
    return (
      <Grid
        w='100vw'
        templateColumns="repeat(4, 1fr)"
        alignItems='start'
        gap='1rem'
        p='1rem'
      >
        <GridItem
          as='nav'
          colSpan='4'
        >
          <SplashNavbarShort onOpen={onOpen} />
        </GridItem>

        <GridItem
          as='main'
          colStart='2'
          colEnd='4'
          alignSelf='stretch'
          minH='60dvh'
        >
          <SplashMainContent />
        </GridItem>

        <GridItem
          as='section'
          colSpan='4'
        >
          <SplashTextInputContainer />
        </GridItem>

        <GridItem
          as='section'
          colSpan='4'
        >
          <SplashInstructionTextContent />
        </GridItem>

        <SplashDrawerContainer
          isOpen={isOpen}
          onClose={onClose}
        />

      </Grid>
    );
  }

  return (
    <Grid
      w='100vw'
      templateColumns="repeat(4, 1fr)"
      alignItems='start'
      gap='1rem'
      p='1rem'
    >
      <GridItem
        as='nav'
        colSpan='4'
      >
        <SplashNavbar />
      </GridItem>

      <GridItem
        as='main'
        colStart='2'
        colEnd='4'
        alignSelf='stretch'
        minH='60dvh'
      >
        <SplashMainContent />
      </GridItem>

      <GridItem
        as='aside'
        colSpan='1'
        alignSelf='stretch'
        minH='60dvh'
      >
        <SplashSideContent />
      </GridItem>

      <GridItem
        as='section'
        colSpan='4'
      >
        <SplashTextInputContainer />
      </GridItem>

      <GridItem
        as='section'
        colSpan='4'
      >
        <SplashInstructionTextContent />
      </GridItem>

    </Grid>
  );
}


export default Splash;