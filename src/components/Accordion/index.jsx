import {
  Box,
  Collapse,
  HStack,
  IconButton,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { Button, Card } from "@saas-ui/react";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Accordion = ({ heading, description }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Card p={"0.5rem 1rem"} my={"1"}>
        <HStack justifyContent={"space-between"}>
          <Text>{heading}</Text>{" "}
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FaArrowDown /> : <FaArrowUp />}
          />
        </HStack>
      </Card>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="1rem"
          color="white"
          mb="4"
          mt="1"
          bg="gray.800"
          border={"1px solid"}
          borderColor={"gray.700"}
          rounded="md"
          shadow="md"
        >
          <Text>{description}</Text>
        </Box>
      </Collapse>
    </>
  );
};

export default Accordion;
