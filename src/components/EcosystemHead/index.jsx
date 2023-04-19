import React from "react";
import GradientHeading from "../Headings/GradientHeading";
import Aurora from "../Aurora";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import webAppImg from "@/images/list.webp";

const AboutSection = () => {
  return (
    <>
      <Box maxW={"1100px"} position={"relative"} margin="0 auto">
        {/* left */}
        <Flex justifyContent={"center"} width={"100%"}>
          <GradientHeading
            subheader={"Ecosystem"}
            header={"Rawblock's collaborative network"}
          />
        </Flex>

        <Text
          fontSize={"xl"}
          fontWeight={300}
          textAlign={"center"}
          marginTop={"2rem"}
          opacity={"0.75"}
        >
          Rawblock provides artificial intelligence-based contract creation
          services for businesses in different sectors. Through AI, contracts
          can be created through the interface in food/market and e-commerce
          order platforms, greatly reducing fake reviews from bot accounts and
          malicious individuals. Additionally, it offers the possibility of
          AI-assisted contract creation for ERP systems. The interaction cycle
          between products and the community is ensured, taking into account the
          social interaction between the community within the system and the
          impact of reputation management on society.
        </Text>
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
      </Box>
    </>
  );
};

export default AboutSection;
