import { useState } from "react";
import {
  Container,
  Image,
  Flex,
  Grid,
  GridItem,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useToast,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";

import marDeMonstrosImg from "../assets/mar_de_monstros.jpg";
import culpaEDasEstrelasImg from "../assets/a_culpa_e_das_estrelas.jpg";
import derrubandoGoliasImg from "../assets/derrubando_golias.jpg";
import mestreDoAmorImg from "../assets/mestre_do_amor.jpg";
import eclipseImg from "../assets/eclipse.jpg";
import aHerdeiraImg from "../assets/a_herdeira.jpg";
import oPrincipeCruelImg from "../assets/o_principe_cruel.jpg";
import estrategiasDeMarketingImg from "../assets/estrategias_de_marketing.jpg";

type BookProps = {
  title: string;
  author: string;
  img: string;
  onClick?(): void;
};

function Book({ title, author, img, onClick }: BookProps) {
  return (
    <Flex
      as="button"
      p={2}
      flexDir="column"
      alignItems="center"
      transition="background-color 0.1s"
      _hover={{ bgColor: "gray.100" }}
      cursor="pointer"
      onClick={onClick}
    >
      <Image src={img} rounded="md" />
      <Text mt={2} fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text>{author}</Text>
    </Flex>
  );
}

export default function Livros() {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<string | undefined>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  function onReserve() {
    setShowModal(false);
    setSelectedBook(undefined);
    toast({
      title: "Livro reservado",
      description: "O cancelamento deve ser feito até 1 dia antes da entrega.",
      status: "success",
      position: "top",
    });
  }

  console.log(selectedDate);

  return (
    <Container maxW="800px">
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Alugar "{selectedBook}"</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column">
            <Grid templateColumns="repeat(2, 1fr)" gap={3}>
              <GridItem>
                <FormControl>
                  <FormLabel>Data de entrega</FormLabel>
                  <Input
                    _focus={{ borderColor: "orange.500" }}
                    type="date"
                    onChange={(event) => {
                      if (!event.target.value)
                        return setSelectedDate(undefined);
                      setSelectedDate(new Date(event.target.value));
                    }}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Text>
                  Total:{" "}
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  }).format(5)}
                </Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text>
                  Renovação:{" "}
                  {selectedDate
                    ? new Date(
                        selectedDate?.setDate(
                          selectedDate?.getDate() + 2 || 0,
                        ) || 0,
                      ).toLocaleString("pt-BR", {
                        dateStyle: "short",
                      })
                    : null}
                </Text>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="#613c2a"
              color="white"
              _hover={{ bgColor: "#613c2a90" }}
              onClick={onReserve}
            >
              Reservar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Text fontWeight="bold" fontSize="2rem" mt={6}>
        Alugue livros!
      </Text>
      <Text>Selecione o livro que deseja alugar.</Text>

      <Grid
        templateColumns={{
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={7}
        mt={6}
        mb={10}
        sx={{
          "& > div": {
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <GridItem>
          <Book
            title="Percy Jackson e os Olimpianos: O Mar de Monstros"
            author="Rick Riordan"
            img={marDeMonstrosImg}
            onClick={() => {
              setSelectedBook(
                "Percy Jackson e os Olimpianos: O Mar de Monstros",
              );
              setShowModal(true);
            }}
          />
        </GridItem>
        <GridItem>
          <Book
            title="8 Estratégias de Marketing para Crescer"
            author="Philip e Milton Kotler"
            img={estrategiasDeMarketingImg}
          />
        </GridItem>
        <GridItem>
          <Book
            title="A culpa é das estrelas"
            author="John Green"
            img={culpaEDasEstrelasImg}
          />
        </GridItem>
        <GridItem>
          <Book
            title="O Príncipe Cruel"
            author="Holly Black"
            img={oPrincipeCruelImg}
          />
        </GridItem>
        <GridItem>
          <Book
            title="Derrubando Golias"
            author="Max Lucado"
            img={derrubandoGoliasImg}
          />
        </GridItem>
        <GridItem>
          <Book
            title="O Mestre do Amor"
            author="Augusto Cury"
            img={mestreDoAmorImg}
          />
        </GridItem>
        <GridItem>
          <Book
            title="Eclipse (Crepúsculo Livro 3)"
            author="Stephenie Meyer"
            img={eclipseImg}
          />
        </GridItem>
        <GridItem>
          <Book
            title="A Herdeira (Livro 4 da série A SELEÇÃO)"
            author="Kiera Cass"
            img={aHerdeiraImg}
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
