import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import GradientHeading from "../Headings/GradientHeading";
import radialSvg from "@/images/ellipse.svg";

import { Card, CardHeader, CardBody } from "@saas-ui/react";
import { FaCheckDouble } from "react-icons/fa";
import { IoCheckmarkDoneOutline, IoTime } from "react-icons/io5";
const Roadmap = () => {
  const roadmapArr = [
    {
      title: "Q1 2022",
      done: true,
      content: [
        {
          title: "Launch",
          content: "Launch of the project",
          done: false,
        },
        {
          title: "Launch",
          content: "Launch of the project",
          done: false,
        },
        {
          title: "Launch",
          content: "Launch of the project",
          done: true,
        },
      ],
    },
    {
      title: "Q1 2022",
      done: true,
      content: [
        {
          title: "Launch",
          content: "Launch of the project",
          done: true,
        },
        {
          title: "Launch",
          content: "Launch of the project",
          done: true,
        },
        {
          title: "Launch",
          content: "Launch of the project",
          done: true,
        },
      ],
    },
    {
      title: "Q1 2022",
      done: false,
      content: [
        {
          title: "Launch",
          content: "Launch of the project",
          done: true,
        },
        {
          title: "Launch",
          content: "Launch of the project",
          done: true,
        },
        {
          title: "Launch",
          content: "Launch of the project",
          done: true,
        },
      ],
    },
  ];
  return (
    <>
      <Box id="roadmap" width={"100%"}>
        <Box maxW={"1100px"} mx={"auto"}>
          <Box>
            <Flex justifyContent={"center"} width={"100%"}>
              <GradientHeading header={"Roadmap"} subheader={"What's next?"} />
            </Flex>
          </Box>

          <Flex flexBasis={"100%"} flexWrap={"wrap"}>
            {roadmapArr.map((phases, i) => (
              <Card
                bg={"whiteAlpha.50"}
                position={"relative"}
                _hover={{
                  boxShadow: "0px 0px 50px 5px #9461e360",
                  zIndex: 1,
                }}
                key={i}
                flexBasis={"300px"}
                m={1}
                flexGrow={1}
                overflow={"hidden"}
              >
                <CardHeader
                  bgGradient={
                    phases.done
                      ? "linear(to-r, primary.400, primary.900)"
                      : "linear(to-r, whiteAlpha.200, whiteAlpha.400)"
                  }
                >
                  <Flex justifyContent={"center"} width={"100%"}>
                    <Text
                      fontSize={"2xl"}
                      fontWeight={"black"}
                      textAlign={"center"}
                    >
                      {phases.title}
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody minH={"400px"}>
                  {phases.content.map((content, ii) => (
                    <Flex
                      key={ii}
                      justifyContent={"center"}
                      alignItems={"center"}
                      width={"100%"}
                      mb={2}
                    >
                      <Flex alignItems={"center"}>
                        <Icon
                          as={content.done ? IoCheckmarkDoneOutline : IoTime}
                          mr={2}
                          fontSize={"1rem"}
                          color={
                            content.done ? "primary.500" : "whiteAlpha.500"
                          }
                        />
                        <Text fontSize={"xl"}>{content.content}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </CardBody>
                <Box
                  position={"absolute"}
                  bottom={100 - i * 50 + "px"}
                  width={500 - i * 100 + "px"}
                  height={"100px"}
                  right={-200 + i * 100 + "px"}
                  zIndex={"-1"}
                >
                  <Image
                    opacity={0.2}
                    src={radialSvg.src}
                    width={200}
                    height={200}
                    alt="radial"
                  />
                </Box>
              </Card>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Roadmap;
