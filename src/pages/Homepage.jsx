import { Container, useDisclosure } from "@chakra-ui/react";
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


function Homepage() {

  // chakra-ui states for drawer.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeChatId, setActiveChatId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { user, isAuthStateLoading } = useContext(UserContext);


  // effects.

  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
      if (!isAuthStateLoading && !user) {
        navigate('/login');
      }

      if(!isAuthStateLoading && user) {
        setIsLoading(false);
      }

  }, [user]);


  // return statements.
  if(isLoading) {
    return <LoadingGeneral />;
  }

  return (
    <>
      <Container
        as='main'
        w='100vw'
        minW='100vw'
        minH='100dvh'
      >
        <DrawerOpenButton onOpen={onOpen} />

        {(!activeChatId) ? <ChatInitialContent /> : <ActiveChat /> }

        <ChatInput />


        <DrawerContainer
          isOpen={isOpen}
          onClose={onClose}
          setActiveChatId={setActiveChatId}
        />
      </Container>
    </>
  );
}


export default Homepage;