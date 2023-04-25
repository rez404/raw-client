import React from "react";
import GradientHeading from "../Headings/GradientHeading";
import Aurora from "../Aurora";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import webAppImg from "@/images/list.webp";

const AboutSection = () => {
  return (
    <>
      <Box id="solutions" maxW={"1100px"} position={"relative"} margin="0 auto">
        {/* left */}
        <Box maxW={"100%"} position={"relative"} maxWidth={"100%"}>
          <Aurora
            pos={{ left: "30%", top: "40%" }}
            size={{ width: "200%", height: "300%" }}
            color="hsl(180deg 78% 35% / 15%)"
          />{" "}
          <Aurora
            pos={{ left: "70%", top: "60%" }}
            size={{ width: "200%", height: "300%" }}
            color="hsl(220deg 78% 35% / 15%)"
          />
        </Box>
        <Flex justifyContent={"center"} width={"100%"}>
          <GradientHeading
            subheader={"Ecosystem"}
            header={"RawBlock's Solutions"}
          />
        </Flex>

        <Text
          fontSize={"xl"}
          fontWeight={300}
          textAlign={"center"}
          marginTop={"2rem"}
          opacity={"0.75"}
        >
          Rawblock Puzzle System provides decentralized infrastructure support
          with the use of blockchain and IPFS technologies, along with
          artificial intelligence assistance. This enables companies and
          individuals to create their own platforms with customized contract
          structures.
        </Text>
      </Box>
    </>
  );
};

export default AboutSection;
