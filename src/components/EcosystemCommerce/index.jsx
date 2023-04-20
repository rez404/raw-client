import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Subheading from "../Headings/Subheading";
import Accordion from "../Accordion";
import Aurora from "../Aurora";
import Contract from "@/images/ecosystem-contract.png";

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
              <Subheading
                header={"Build Web3 Commerce apps"}
                subheader={"Web3 Store"}
              />
              <Text
                opacity={"0.8"}
                textAlign={{ base: "center", lg: "justify" }}
                wordBreak={"break-word"}
                whiteSpace={"break-spaces"}
              >
                An AI-supported interface allows users to create contracts for
                food orders, e-commerce, and other similar topics. Users can
                determine the contract details in a few steps through the
                interface, and the system automatically generates a contract
                using this information. For example, in a food ordering
                platform, you can use this interface to determine the contract
                details for a restaurant. After determining the content, price,
                payment methods, delivery time, and other details of the
                contract, the AI-supported system quickly and accurately
                generates a contract using this information. This enables users
                to speed up the transaction process and save time and costs.
              </Text>
            </Box>
          </Flex>
          <Flex flexBasis={"100%"} justifyContent={"center"}>
            <Image alt="" src={Contract.src} maxW={"500px"} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default EcosystemSectionTwo;
