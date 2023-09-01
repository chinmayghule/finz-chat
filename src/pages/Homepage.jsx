import { Container, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

// components.
import DrawerOpenButton from "../components/Homepage/DrawerOpenButton";
import ChatInitialContent from "../components/Homepage/ChatInitialContent";
import ChatInput from "../components/Homepage/ChatInput";
import DrawerContainer from "../components/Homepage/DrawerContainer";
import ActiveChat from "../components/Homepage/ActiveChat";
import LoadingGeneral from "../components/shared/LoadingGeneral";
import ActiveChatSideContainer from "../components/Homepage/ActiveChatSideContainer";


function Homepage() {

  // chakra-ui states for drawer.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeChatId, setActiveChatId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [isSmallerThan1280] = useMediaQuery('(max-width: 1280px)');

  const { user, isAuthStateLoading } = useContext(UserContext);


  // effects.

  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
    if (!isAuthStateLoading && !user) {
      navigate('/login');
    }

    if (!isAuthStateLoading && user) {
      setIsLoading(false);
    }

  }, [user]);


  // return statements.
  if (isLoading) {
    return <LoadingGeneral />;
  }

  return (
    <>
      <Container
        as='main'
        w='100vw'
        minW='100vw'
        minH='100dvh'

        display='grid'
        gridTemplateColumns='repeat(4, 1fr)'
      >

        {(!activeChatId) ? (
          <>
            <ChatInitialContent />
            <DrawerOpenButton onOpen={onOpen} />
          </>
        ) : (
          <ActiveChat
            onOpen={onOpen}
            activeChatId={activeChatId}
          />
        )}

        {(!activeChatId || isSmallerThan1280) ? (
          null
        ) : (
          <ActiveChatSideContainer />
        )}

        <ChatInput />


        <DrawerContainer
          isOpen={isOpen}
          onClose={onClose}
          activeChatId={activeChatId}
          setActiveChatId={setActiveChatId}
        />
      </Container>
    </>
  );
}


export default Homepage;