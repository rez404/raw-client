import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Subheading from "../Headings/Subheading";
import Accordion from "../Accordion";
import Aurora from "../Aurora";
import Commerce from "@/images/ecosystem-commerce.png";

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
                Thanks to its artificial intelligence-assisted smart contract
                service for commerce, Rawblock Puzzle System enables supply and
                demand sides to match with each other under the most favorable
                conditions. The system allows the demand side to create
                customized smart contracts that meet their specific needs. Thus,
                Rawblock Puzzle System creates a fair trade infrastructure where
                real prices are formed and parties do not exploit each other,
                <Text
                  textShadow={
                    "2px -2px 20px hsl(263.54deg 69.89% 63.53% / 43%), -2px 2px 20px hsl(263.54deg 69.89% 63.53% / 43%), 2px 2px 20px hsl(263.54deg 69.89% 63.53% / 43%), -2px -2px 20px hsl(263.54deg 69.89% 63.53% / 43%)"
                  }
                  fontWeight={500}
                >
                  by utilizing asymmetric information distribution and auction
                  theories.
                </Text>
              </Text>
            </Box>
          </Flex>
          <Flex flexBasis={"100%"} justifyContent={"center"}>
            <Image alt="" src={Commerce.src} maxW={"500px"} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default EcosystemSectionTwo;
