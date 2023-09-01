import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FinzChatResponseCard from "./FinzChatResponseCard";
import UserPromptCard from "./UserPromptCard";
import mockData from "../../../db";
import ActiveChatHeading from "./ActiveChatHeading";

function ActiveChat({ onOpen, activeChatId }) {

  const [chat, setChat] = useState([]);


  // effects.

  // fetch data.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = mockData;
        const data = JSON.parse(response);

        setChat(data.chat);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

  }, []);

  return (
    <Flex
      flexDirection='column'
      justifyContent='start'
      alignItems='center'
      minH='100dvh'
      maxH='100dvh'
      w={{
        base: 'max(320px - 2rem, 100vw - 2rem)'
      }}
      maxW='600px'

      m='auto'
      paddingBlockEnd='5rem'
      paddingInline='0'
      gap='1rem'
      overflowY='scroll'
      position='relative'
      className="hide-scrollbar"

      gridColumnStart='2'
      gridColumnEnd='4'
    >
      <ActiveChatHeading onOpen={onOpen} activeChatId={activeChatId} />

      {chat.map((chatObj, index) => {
        if (chatObj.from === 'finz-chat') {
          return (
            <FinzChatResponseCard
              key={index}
              responseText={chatObj.text}
            />
          );
        } else {
          return (
            <UserPromptCard
              key={index}
              promptText={chatObj.text}
            />
          );
        }
      })}
    </Flex>
  );
}

export default ActiveChat;