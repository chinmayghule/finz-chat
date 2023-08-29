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


function Homepage() {

  // chakra-ui states for drawer.
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [activeChatId, setActiveChatId] = useState(null);


  // effects.

  // set observer on user state using onAuthStateChanged.
  useEffect(() => {
      if (!user) {
        navigate('/login');
      }

  }, [user]);


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