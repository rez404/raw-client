import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Divider = () => {
  return (
    <Flex justifyContent={"center"}>
      <Box
        sx={{
          background: "rgb(34,193,195)",
          background:
            "linear-gradient(93.96deg, rgba(25, 26, 27, 0.8) 17.14%, rgb(24 67 78 / 80%) 36.78%, rgba(108, 47, 115, 0.8) 61%, rgba(25, 26, 27, 0.8) 79.98%)",
        }}
        height={"2px"}
        opacity={0.8}
        width={"1100px"}
        zIndex={"10"}
        marginTop={"2rem"}
      ></Box>
    </Flex>
  );
};

export default Divider;
