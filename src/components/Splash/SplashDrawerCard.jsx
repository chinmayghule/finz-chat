import { Card, CardBody } from "@chakra-ui/react";
import CustomChakraLink from "../shared/CustomChakraLink";


function SplashDrawerCard({ link, linkContent }) {
  return (
    <Card variant='outline'>
      <CardBody>
        <CustomChakraLink
          link={link}
          linkContent={linkContent}
        />
      </CardBody>
    </Card>

  );
}

export default SplashDrawerCard;