import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import SplashNavbar from "../components/Splash/SplashNavbar";
import SplashMainContent from "../components/Splash/SplashMainContent";
import SplashSideContent from "../components/Splash/SplashSideContent";
import SplashTextInputContainer from "../components/Splash/SplashTextInputContainer";
import SplashInstructionTextContent from "../components/Splash/SplashInstructionTextContent";
import SplashNavbarShort from "../components/Splash/SplashNavbarShort";


function Splash() {

  const [isSmallerThan1024] = useMediaQuery('(max-width: 1024px)');


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
          <SplashNavbarShort />
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