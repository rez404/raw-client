import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Subheading from "../Headings/Subheading";
import Accordion from "../Accordion";
import Aurora from "../Aurora";

const EcosystemSection = () => {
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
          flexDirection={isMobile ? "column-reverse" : "row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
        >
          <Flex flexBasis={"100%"}>
            <Box>
              <Subheading
                header={"Enterprise Resource Planning"}
                subheader={"erp"}
              />
              <Text
                opacity={"0.8"}
                textAlign={{ base: "center", lg: "justify" }}
                wordBreak={"break-word"}
                whiteSpace={"break-spaces"}
              >
                An AI-supported interface enables a company to create ERP
                (Enterprise Resource Planning) contracts. ERP is a software that
                allows a company to manage all its business activities,
                transaction processes, and resources under a single system. The
                AI-supported interface allows users to specify contract details
                in a few steps, and the system automatically generates a
                contract based on this information. For example, a company can
                use the interface to create supplier contracts, production
                contracts, or sales contracts. This makes the contract creation
                process faster and more efficient, resulting in time and cost
                savings for companies.
              </Text>
              <Accordion heading={"asdas"} description={"sadas"} />
              <Accordion heading={"asdas"} description={"sadas"} />
              <Accordion heading={"asdas"} description={"sadas"} />
              <Accordion heading={"asdas"} description={"sadas"} />
              <Accordion heading={"asdas"} description={"sadas"} />
            </Box>
          </Flex>
          <Flex flexBasis={"100%"} justifyContent={"center"}>
            <Image src={"https://sakaivault.io/512.png"} maxW={"500px"} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default EcosystemSection;
