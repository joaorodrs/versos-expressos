import logoImg from "../../assets/logo.png";

import {
  Box,
  Flex,
  Button,
  Image,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  useMediaQuery,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type NavButtonsProps = {
  defaultLinkColor?: string;
  hideImg?: boolean;
};

function NavButtons({
  defaultLinkColor = "white",
  hideImg = false,
}: NavButtonsProps) {
  return (
    <>
      <Button
        as="a"
        variant="link"
        cursor="pointer"
        color={location.pathname === "/livros" ? "#fccd6d" : defaultLinkColor}
        href="/livros"
      >
        Livros
      </Button>
      <Button
        as="a"
        variant="link"
        cursor="pointer"
        color={location.pathname === "/estudo" ? "#fccd6d" : defaultLinkColor}
        href="/estudo"
      >
        Estudo
      </Button>
      {!hideImg && <Image src={logoImg} h="230px" objectFit="cover" />}
      <Button
        as="a"
        variant="link"
        cursor="pointer"
        color={
          location.pathname === "/sobre-nos" ? "#fccd6d" : defaultLinkColor
        }
        href="/sobre-nos"
      >
        Sobre nós
      </Button>
      <Button
        as="a"
        variant="link"
        cursor="pointer"
        color={location.pathname === "/contato" ? "#fccd6d" : defaultLinkColor}
        href="/contato"
      >
        Contato
      </Button>
    </>
  );
}

export default function Header() {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bgColor="#613c2a">
      {isMobile ? (
        <IconButton
          aria-label="Abrir menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          colorScheme="whiteAlpha"
          color="white"
          size="lg"
          m={2}
        />
      ) : (
        <Flex
          as="nav"
          h="150px"
          width={["100%", "90%", "70%", "50%"]}
          justifyContent="space-between"
          alignItems="center"
          margin="auto"
        >
          <NavButtons />
        </Flex>
      )}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />

          <DrawerBody bgColor="#613c2a">
            <Flex
              flexDir="column"
              alignItems="flex-start"
              justifyContent="space-around"
              mt={10}
              h="20%"
            >
              <NavButtons hideImg />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
