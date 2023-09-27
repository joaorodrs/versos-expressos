import { Container, Text, chakra } from "@chakra-ui/react";

export default function SobreNos() {
  return (
    <Container maxW="800px">
      <Text fontWeight="bold" fontSize="2rem" mt={6}>
        Missão
      </Text>
      <Text textAlign="justify">
        "Promover a paixão pela leitura e o amor pelo café, oferecendo um espaço
        acolhedor onde a comunidade possa se reunir, desfrutar de obras
        literárias e saborear bebidas excepcionais, criando experiências
        memoráveis para todos os amantes da cultura."
      </Text>
      <Text fontWeight="bold" fontSize="2rem" mt={6}>
        Visão
      </Text>
      <Text textAlign="justify">
        "Ser reconhecida como a principal cafeteria literária que inspira a
        imaginação, fomenta a discussão intelectual e nutre a criatividade,
        enquanto proporciona a melhor qualidade de café e serviço excepcional em
        um ambiente que celebra a literatura."
      </Text>
      <Text fontWeight="bold" fontSize="2rem" mt={6}>
        Valores
      </Text>
      <chakra.ul ml={4}>
        <Text as="li" textAlign="justify">
          Aprendizado continuo;
        </Text>
        <Text as="li" textAlign="justify">
          Paixão pela leitura e cultura literária;
        </Text>
        <Text as="li" textAlign="justify">
          Comunidade inclusiva
        </Text>
        <Text as="li" textAlign="justify">
          Atendimento excepcional
        </Text>
        <Text as="li" textAlign="justify">
          Sustentabilidade;
        </Text>
        <Text as="li" textAlign="justify">
          Excelência;
        </Text>
        <Text as="li" textAlign="justify">
          Criatividade e inovação;
        </Text>
      </chakra.ul>
    </Container>
  );
}
