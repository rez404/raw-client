import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Subheading from "../Headings/Subheading";
import Accordion from "../Accordion";
import Aurora from "../Aurora";
import Contract from "@/images/ecosystem-asset.png";

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
                header={"Asset Transfer System"}
                subheader={"TRANSFER OF VALUE"}
              />
              <Text
                opacity={"0.8"}
                textAlign={{ base: "center", lg: "justify" }}
                wordBreak={"break-word"}
                whiteSpace={"break-spaces"}
              >
                Rawblock system provides secure data transfer between two
                parties following predetermined procedures using blockchain
                technology. This product facilitates and secures our
                customers&#96; transaction processes by ensuring secure and
                transparent data transfer. Its blockchain-based technology
                enables easy verification and tracking of transactions. This
                project is just one of the innovative solutions that Rawblock
                system offers to its users.
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
