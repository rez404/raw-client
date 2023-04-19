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
            subheader={"About us"}
            header={"What is the RawBlock?"}
          />
        </Flex>
        <Text fontSize={"3xl"} fontWeight={700} textAlign={"center"}>
          Creating for the decentralized web has never been more seamless with
          Rawblock
        </Text>
        <Text
          fontSize={"xl"}
          fontWeight={300}
          textAlign={"center"}
          marginTop={"2rem"}
          opacity={"0.75"}
        >
          Rawblock Puzzle System is a decentralized artificial
          intelligence-powered trading platform based on blockchain and IPFS
          technologies. Through smart contracts, supply and demand sides can
          match with each other under the most suitable conditions. The system
          allows the demand side to create smart contracts that suit their
          specific needs. Rawblock Puzzle System aims to build a fair trading
          infrastructure where real prices are formed, and parties do not
          exploit each other, by utilizing asymmetric information distribution
          and auction theories.
        </Text>
        <Box maxW={"100%"} position={"relative"} maxWidth={"100%"}>
          <Image
            src={webAppImg.src}
            alt="asda"
            sx={{
              filter: "drop-shadow(0px 0px 45px hsl(260deg 78% 35% / 10%))",
            }}
          />
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
