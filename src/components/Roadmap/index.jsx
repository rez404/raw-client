import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import GradientHeading from "../Headings/GradientHeading";
import radialSvg from "@/images/ellipse.svg";
import { motion } from "framer-motion";
const Roadmap = () => {
  return (
    <>
      <Box width={"100%"}>
        <Box maxW={"1100px"} mx={"auto"}>
          <Box>
            <Flex justifyContent={"center"} width={"100%"}>
              <GradientHeading header={"Roadmap"} subheader={"What's next?"} />
            </Flex>
          </Box>
          <Flex justifyContent={"center"}>
            <Flex flexBasis={"100%"}>1</Flex> <Flex flexBasis={"100%"}>1</Flex>
            <Image src={radialSvg.src} />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Roadmap;
