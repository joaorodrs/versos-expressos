import { EmailIcon } from "@chakra-ui/icons";
import { Flex, Container, Text, Button } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contato() {
  return (
    <Container maxW="800px">
      <Text fontWeight="bold" fontSize="2rem" mt={6}>
        Contato
      </Text>
      <Flex flexDir="column" alignItems="flex-start">
        <Button
          mt={4}
          leftIcon={<FaWhatsapp />}
          variant="link"
          colorScheme="orange"
          fontSize="18px"
          onClick={() => window.open("https://wa.me/5593984089049", "_blank")}
        >
          (93) 98408-9049
        </Button>
        <Button
          mt={4}
          leftIcon={<FaInstagram />}
          variant="link"
          colorScheme="orange"
          fontSize="18px"
          onClick={() =>
            window.open("https://instagram.com/versoseexpressos", "_blank")
          }
        >
          @versoseexpressos
        </Button>
        <Button
          mt={4}
          leftIcon={<EmailIcon />}
          variant="link"
          colorScheme="orange"
          fontSize="18px"
          onClick={() =>
            window.open("mailto:versoseexpressos@gmail.com", "_blank")
          }
        >
          versoseexpressos@gmail.com
        </Button>
      </Flex>
    </Container>
  );
}
