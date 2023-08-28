import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';


function CustomChakraLink({ link, linkContent }) {
  return (
    <>
      <ChakraLink as={ReactRouterLink} to={link}>
        { linkContent }
      </ChakraLink>
    </>
  );
}

export default CustomChakraLink;