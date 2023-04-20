import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { IoCheckmarkDoneOutline, IoCopyOutline } from "react-icons/io5";
import heroImg from "@/images/hero-section.png";
import Aurora from "../Aurora";
import { FaPlayCircle } from "react-icons/fa";
import GradientHeading from "../Headings/GradientHeading";

const HeroSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [isLoading, setIsLoading] = React.useState(false);
  const fakePromiseResolver = () => {
    return new Promise((resolve) => {
      setIsLoading(true);
      navigator.clipboard.writeText("0x1234567890");
      setTimeout(() => {
        resolve(true);
        setIsLoading(false);
      }, 1000);
    });
  };

  return (
    <>
      <Box position={"relative"}>
        <Box
          marginTop={"4"}
          mx={"auto"}
          maxW={"1100px"}
          position={"relative"}
          paddingTop={isMobile ? "60px" : "200px"}
        >
          <Aurora
            pos={{ left: "80%", top: "40%" }}
            size={{ width: "1400px", height: "1400px" }}
            color="hsl(260deg 78% 35% / 30%)"
          />

          {/* left */}
          <Aurora
            pos={{ left: "30%", top: "20%" }}
            size={{ width: "1800px", height: "1800px" }}
            color="hsl(180deg 92% 54% / 20%)"
          />

          <Flex
            flexDirection={isMobile ? "column-reverse" : "row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Text
                fontSize={"5xl"}
                lineHeight={1}
                fontWeight={"700"}
                textAlign={isMobile ? "center" : "left"}
                marginTop={10}
              >
                Web2 to Web3 evolution venture.
              </Text>
              <Text
                marginTop={10}
                fontSize={"xl"}
                maxW={isMobile ? "100%" : "60%"}
                textAlign={isMobile ? "center" : "left"}
              >
                Rawblock is a project that adapts various Web2 systems to the
                Web3 infrastructure.
              </Text>
              <Flex
                gap={4}
                marginTop={10}
                justifyContent={isMobile ? "center" : "flex-start"}
                flexDirection={isMobile ? "column" : "row"}
                alignItems="stretch"
              >
                <Box
                  border={"1px solid"}
                  borderColor={"whiteAlpha.300"}
                  cursor={"pointer"}
                  borderRadius={"md"}
                  display={"flex"}
                  gap={"2"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  transition={"all 0.2s ease-in-out"}
                  bg={"whiteAlpha.800"}
                  shadow={"xl"}
                  height={"48px"}
                  color={"gray.800"}
                >
                  <HStack margin={"0 2rem"}>
                    {" "}
                    <Icon as={FaPlayCircle} />
                    <Text fontWeight={"bold"}>Launch App</Text>
                  </HStack>
                </Box>
                <Box
                  border={"1px solid"}
                  borderColor={"whiteAlpha.300"}
                  borderRadius={"md"}
                  display={"flex"}
                  gap={"2"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  transition={"all 0.2s ease-in-out"}
                  bg={"darkAlpha.50"}
                  height={"48px"}
                  shadow={"xl"}
                >
                  {" "}
                  <HStack margin={"0 2rem"}>
                    <Text as="kbd">
                      $RB Contract{" "}
                      <span style={{ fontWeight: "600" }}>0x0000000</span>
                    </Text>
                    <IconButton
                      variant={"ghost"}
                      onClick={() => fakePromiseResolver()}
                    >
                      {isLoading ? (
                        <IoCheckmarkDoneOutline color="#33ffaa" />
                      ) : (
                        <IoCopyOutline />
                      )}
                    </IconButton>
                  </HStack>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Image
                src={heroImg.src}
                alt="hero"
                width={800}
                sx={{ blendMode: "screen" }}
              />
            </Box>
          </Flex>
        </Box>{" "}
      </Box>
    </>
  );
};

export default HeroSection;
