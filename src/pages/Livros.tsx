import {
  Box,
  Container,
  Image,
  Flex,
  Grid,
  GridItem,
  Text,
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
};

function Book({ title, author, img }: BookProps) {
  return (
    <Flex
      as="button"
      p={2}
      flexDir="column"
      alignItems="center"
      transition="background-color 0.1s"
      _hover={{ bgColor: "gray.100" }}
      cursor="pointer"
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
  return (
    <Container maxW="800px">
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
