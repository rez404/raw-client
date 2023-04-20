import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Button, Card, CardBody } from "@saas-ui/react";
import React from "react";
import Aurora from "../Aurora";

const CTASection = () => {
  return (
    <>
      <Box
        width="100%"
        sx={{ zIndex: "3" }}
        position={"relative"}
        marginBottom={-10}
      >
        <Aurora
          pos={{ left: "20%", top: "70%" }}
          size={{ width: "1500px", height: "1000px" }}
          color="hsl(250deg 78% 35% / 30%)"
          zIndex={-1}
        />
        <Aurora
          pos={{ left: "70%", top: "70%" }}
          size={{ width: "1500px", height: "1000px" }}
          color="hsl(220deg 78% 35% / 30%)"
          zIndex={-1}
        />
        <Box maxW={"800px"} mx={"auto"}>
          <Flex
            width={"100%"}
            p={0.5}
            borderRadius={"40px"}
            bgGradient={"linear(to-r, primary.700, pink.500)"}
          >
            <Card
              bg={"none"}
              borderRadius={"40px"}
              bgGradient={"linear(to-t, blackAlpha.600, blackAlpha.900)"}
              border={"none"}
              borderColor={"#00000000"}
              shadow={"2xl"}
            >
              <Flex m={10} alignItems={"center"}>
                <Box>
                  <Text
                    fontSize={"4xl"}
                    fontWeight={"black"}
                    textAlign={"center"}
                    mb={5}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text
                    fontSize={"xl"}
                    fontWeight={"500"}
                    textAlign={"center"}
                    opacity={0.5}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <HStack justifyContent={"center"} mt={4}>
                    <Button size={"lg"} variant={"solid"} colorScheme="primary">
                      <Text fontSize={"2xl"}> Join Us!</Text>
                    </Button>
                    <Button size={"lg"} variant={"ghost"} colorScheme="primary">
                      <Text fontSize={"2xl"}>Whitepaper</Text>
                    </Button>
                  </HStack>
                </Box>
              </Flex>
            </Card>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default CTASection;
