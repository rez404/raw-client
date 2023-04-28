import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Button,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import teamOne from "@/images/team/enver-wb.jpg";
import teamTwo from "@/images/team/gokhan-wb.jpg";
import teamThree from "@/images/team/engincan-wb.jpg";
import teamFour from "@/images/team/zafer-wb.jpg";
import teamFive from "@/images/team/osman-wb.jpg";
import GradientHeading from "../Headings/GradientHeading";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const TeamSection = () => {
  const team = [
    {
      name: "Enver Yumrutaş",
      role: "CEO and Chief Scientist",
      image: teamOne.src,
      username: "enveryumrutas",
      linkedin: "https://www.linkedin.com/in/enveryumrutas/",
    },
    {
      name: "Gökhan Yener",
      role: "CTO and Head of Blockchain",
      image: teamTwo.src,
      username: "gökhan-yener-08485787",
      linkedin: "https://www.linkedin.com/in/gokhanyener/",
    },
    {
      name: "Engincan Kaya",
      role: "Head of Blockchain",
      image: teamThree.src,
      username: "engincan-kaya-b626611a9",
      linkedin: "https://www.linkedin.com/in/engincan-kaya-b626611a9/",
    },
    {
      name: "Zafer Beyiz",
      role: "CFO and Economist",
      image: teamFour.src,
      username: "zafer-beyiz-2082b9247",
      linkedin: "https://www.linkedin.com/in/zafer-beyiz-2082b9247/",
    },
    {
      name: "Osman Yıldız",
      role: "Machine Learning Specialist",
      image: teamFive.src,
      username: "drosmanyildiz",
      linkedin: "https://www.linkedin.com/in/drosmanyildiz/",
    },
  ];

  return (
    <Box id="team" py={12} maxW={"1400px"} mx={"auto"}>
      <Flex justifyContent={"center"} width={"100%"}>
        <GradientHeading
          subheader={"Team"}
          header={"The team behind Rawblock"}
        />
      </Flex>
      <Flex
        mx={{ base: "0", md: "0" }}
        direction={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {team.map((member) => (
          <Box
            margin={"0 1rem"}
            key={member.name}
            flexGrow={1}
            textAlign="center"
            marginBottom={{ base: "2rem", md: "0" }}
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
            <Flex justifyContent={"center"}>
              <HStack align={"center"}>
                <Link href={member.linkedin} target="_blank">
                  <IconButton
                    target="_blank"
                    icon={<Icon p={1} as={FaLinkedin} fontSize={"2xl"} />}
                  ></IconButton>
                </Link>
              </HStack>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TeamSection;
