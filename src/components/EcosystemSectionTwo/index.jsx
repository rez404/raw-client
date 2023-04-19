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
              <Subheading
                header={"Contrat create with AI"}
                subheader={"easy to create"}
              />
              <Text
                opacity={"0.8"}
                textAlign={{ base: "center", lg: "justify" }}
                wordBreak={"break-word"}
                whiteSpace={"break-spaces"}
              >
                An AI-powered system enables users to easily create contracts
                through an interface. This system allows the user to specify
                contract details in a few steps and automatically generates a
                contract using this information. The user can determine the
                content, duration, conditions, and other details of the
                contract. AI uses this information to quickly and accurately
                generate a contract and present it to the user, saving time and
                cost and making the transaction process more efficient.
              </Text>
              <Accordion
                heading={"What is contract creation with AI?"}
                description={
                  "Contract creation with AI refers to the use of artificial intelligence technologies to automate the process of generating contracts or legal agreements."
                }
              />
              <Accordion
                heading={"How does AI create contracts?"}
                description={
                  "AI can create contracts by analyzing and interpreting data, templates, and predefined rules to generate contract language, clauses, and terms."
                }
              />
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

export default EcosystemSectionTwo;
