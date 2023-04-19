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
                In today's e-commerce systems, the number of bot accounts and
                fake reviews by malicious individuals is quite high. However,
                with the help of AI-powered contract creation services, it is
                possible to significantly reduce these problems. During the
                contract creation process, the system can automatically perform
                necessary identity verifications and prevent fake accounts from
                creating contracts. Additionally, with AI-powered contracts, it
                becomes easier for businesses to ensure that the reviews they
                receive are genuine and trustworthy. This provides consumers
                with a safer shopping experience.
              </Text>
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
