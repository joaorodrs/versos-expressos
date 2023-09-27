import { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { CABINS_STATUS } from "../utils/constants";
import { CloseIcon } from "@chakra-ui/icons";

type CabinProps = {
  number: number;
  onClick: () => void;
};

function Cabin({ number, onClick }: CabinProps) {
  return (
    <Button
      h="100px"
      w="100%"
      variant="outline"
      colorScheme="orange"
      bgColor="transparent"
      alignItems="center"
      justifyContent="center"
      rounded="lg"
      onClick={onClick}
      isDisabled={number === 10}
    >
      <Text fontWeight="normal" color="black">
        Cabine {number + 1}
      </Text>
    </Button>
  );
}

export default function Estudo() {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [selectedCabin, setSelectedCabin] = useState<number | undefined>();

  function onReserve() {
    setShowModal(false);
    setSelectedCabin(undefined);
    toast({
      title: "Horário(s) reservado(s)",
      description:
        "O cancelamento deve ser feito até 1h antes do horário agendado.",
      status: "success",
      position: "top",
    });
  }

  return (
    <Container maxW="800px">
      <Text fontWeight="bold" fontSize="2rem" mt={6}>
        Cabines para estudo
      </Text>
      <Text>Veja as cabines disponíveis para aluguel.</Text>
      <Grid
        templateColumns={{
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={4}
        mt={10}
      >
        {Array.from(Array(20).keys()).map((item) => (
          <GridItem key={item}>
            <Cabin
              number={item}
              onClick={() => {
                setShowModal(true);
                setSelectedCabin(item);
              }}
            />
          </GridItem>
        ))}
      </Grid>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Horários da Cabine {(selectedCabin || 0) + 1}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column">
            {Object.keys(CABINS_STATUS).map((item, index) => {
              const value = Object.values(CABINS_STATUS)[index];
              return (
                <Flex mb={4}>
                  <Checkbox colorScheme="orange" size="lg" isDisabled={!value}>
                    {item}
                  </Checkbox>
                  <Text ml={4} display="flex" alignItems="center">
                    {!value && <CloseIcon mr={2} color="red.500" />}
                    {!value && "Reservado"}
                  </Text>
                </Flex>
              );
            })}
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
    </Container>
  );
}
