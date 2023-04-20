import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import teamOne from "@/images/team/enver.jpg";
import teamTwo from "@/images/team/gokhan.jpeg";
import teamThree from "@/images/team/engincan.jpg";
import teamFour from "@/images/team/zafer.jpg";
import GradientHeading from "../Headings/GradientHeading";

const TeamSection = () => {
  const team = [
    {
      name: "Enver Yumrutaş",
      role: "CEO and Chief Scientist",
      image: teamOne.src,
    },
    {
      name: "Gökhan Yener",
      role: "CTO and Head of Blockchain",
      image: teamTwo.src,
    },
    {
      name: "Engincan Kaya",
      role: "Head of Blockchain",
      image: teamThree.src,
    },
    {
      name: "Zafer Beyiz",
      role: "CFO and Economist",
      image: teamFour.src,
    },
  ];

  return (
    <Box id="team" py={12} maxW={"1200px"} mx={"auto"}>
      <Flex justifyContent={"center"} width={"100%"}>
        <GradientHeading
          subheader={"Team"}
          header={"The team behind Rawblock"}
        />
      </Flex>
      <Flex
        mx={{ base: "0", md: "auto" }}
        direction={{ base: "row", md: "row" }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {team.map((member) => (
          <Box
            margin={"0 1rem"}
            key={member.name}
            flexGrow={1}
            flexBasis={{ base: "50%", xs: "50%", sm: "50%", md: "25%" }}
            textAlign="center"
          >
            <Image
              src={member.image}
              alt="Team Member 1"
              borderRadius="full"
              boxSize={{ base: "120px", md: "160px" }}
              mx="auto"
              mb={6}
            />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {member.name}
            </Text>
            <Text color="gray.500">{member.role}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TeamSection;
