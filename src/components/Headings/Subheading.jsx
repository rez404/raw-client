import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Subheading = ({ header, subheader }) => {
  return (
    <>
      <Box
        position={"relative"}
        margin={"4rem 0"}
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
      >
        <Text
          fontSize="md"
          fontWeight={"300"}
          bgGradient={"linear(to-r, primary.500, primary.200)"}
          backgroundClip={"text"}
          textTransform={"uppercase"}
          letterSpacing={"15px"}
          marginBottom={"0.375rem"}
          zIndex={"-1"}
          textShadow={
            "2px -2px 20px hsl(263.54deg 69.89% 63.53% / 43%),-2px 2px 20px hsl(263.54deg 69.89% 63.53% / 43%),2px 2px 20px hsl(263.54deg 69.89% 63.53% / 43%),-2px -2px 20px hsl(263.54deg 69.89% 63.53% / 43%)"
          }
          style={{
            bg: "transparent",
          }}
        >
          &nbsp;{subheader}
        </Text>
        <Text
          marginTop={"-1rem"}
          fontSize="3xl"
          fontWeight={"600"}
          textTransform={"uppercase"}
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

export default Subheading;
