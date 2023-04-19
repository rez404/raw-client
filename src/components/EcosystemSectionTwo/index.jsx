import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Subheading from "../Headings/Subheading";
import Accordion from "../Accordion";
import Aurora from "../Aurora";

const EcosystemSectionTwo = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  return (
    <>
      <Box maxW={"1100px"} mx="auto" position={"relative"} my={"48"}>
      <Aurora
          pos={{ left: "80%", top: "40%" }}
          size={{ width: "900px", height: "1000px" }}
          color="hsl(190deg 78% 35% / 30%)"
        />

        <Flex
          flexDirection={isMobile ? "column-reverse" : "row-reverse"}
          flexWrap={"nowrap"}
          alignItems={"center"}
        >
          <Flex flexBasis={"100%"}>
            <Box>
              <Subheading header={"Ecosysyem"} subheader={"Ecosystem"} />
              <Text
                opacity={"0.8"}
                textAlign={{ base: "center", lg: "justify" }}
                wordBreak={"break-word"}
                whiteSpace={"break-spaces"}
              >
                Rawblock provides artificial intelligence-based contract
                creation services for businesses in different sectors. Through
                AI, contracts can be created through the interface in
                food/market and e-commerce order platforms, greatly reducing
                fake reviews from bot accounts and malicious individuals.
                Additionally, it offers the possibility of AI-assisted contract
                creation for ERP systems. society.
              </Text>
              <Accordion heading={"asdas"} description={"sadas"} />
              <Accordion heading={"asdas"} description={"sadas"} />
              <Accordion heading={"asdas"} description={"sadas"} />
              <Accordion heading={"asdas"} description={"sadas"} />
              <Accordion heading={"asdas"} description={"sadas"} />
            </Box>
          </Flex>
          <Flex flexBasis={"100%"} justifyContent={"center"}>
            <Image src={"https://sakaivault.io/512.png"}  maxW={"500px"} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default EcosystemSectionTwo;
