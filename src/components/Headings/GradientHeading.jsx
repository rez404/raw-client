import { Box, Text } from "@chakra-ui/react";
import React from "react";

const GradientHeading = ({ header, subheader }) => {
  return (
    <>
      <Box
        position={"relative"}
        alignItems={"center"}
        marginBottom={"4rem"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box position={"relative"} top={"50%"} minW="100%" zIndex={"-1"}>
          <Text
            whiteSpace={"nowrap"}
            opacity={"0.3"}
            textAlign={"center"}
            fontSize="calc(150px + (50 * (50vw - 320px)) / 1080)"
            fontWeight={"600"}
            textTransform={"uppercase"}
            letterSpacing={".5px"}
            bgClip={"text"}
            stroke={"primary.200"}
            sx={{
              WebkitTextStroke: "1px #9461e3",
            }}
          >
            {subheader}
          </Text>
        </Box>
        <Text
          textAlign={"center"}
          fontSize="md"
          fontWeight={"300"}
          textTransform={"uppercase"}
          letterSpacing={"10px"}
          marginBottom={"1rem"}
          zIndex={"-1"}
          textShadow={"0 0 10px #fff"}
        >
          {subheader}
        </Text>{" "}
        <Text
          marginTop={"-1rem"}
          textAlign={"center"}
          fontSize="5xl"
          fontWeight={"600"}
          textTransform={"capitalize"}
          letterSpacing={".5px"}
          zIndex={"-1"}
          wordBreak={"break-word"}
          whiteSpace={"pre-wrap"}
          maxW={"100vw"}
        >
          {header}
        </Text>
      </Box>
    </>
  );
};

export default GradientHeading;
