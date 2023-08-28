import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FinzChatResponseCard from "./FinzChatResponseCard";
import UserPromptCard from "./UserPromptCard";

function ActiveChat() {

  const [chat, setChat] = useState([]);


  // effects.

  // fetch data.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('.././db.json');
        const data = await response.json();

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
      w={{
        base: '320px - 2rem',
        md: 'max(600px, 50vw)',
        lg: '75vw'
      }}
      maxW='600px'
      m='auto'
      paddingBlockStart='2rem'
      paddingBlockEnd='5rem'
      gap='1rem'
      overflowY='scroll'
    >
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