import React from "react";

import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  VStack,
  Image,
  useMediaQuery,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Aurora from "../Aurora";
import lightLogo from "@/images/rawblock-light.svg";
import { Button, Card, CardBody } from "@saas-ui/react";
import { BsMailbox } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const footerColumns = [
    {
      title: "About",
      links: [
        {
          title: "About Us",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          href: "/",
        },
        {
          title: "About Us",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          href: "/",
        },
        {
          title: "About Us",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          href: "/",
        },
        {
          title: "About Us",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          href: "/",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          title: "About Us",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          href: "/",
        },
        {
          title: "About Us",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          href: "/",
        },
        {
          title: "About Us",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          href: "/",
        },
        {
          title: "About Us",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          href: "/",
        },
      ],
    },
  ];
  const socialLinks = [
    {
      title: "Facebook",
      href: "/",
      icon: FaFacebook,
    },
    {
      title: "Twitter",
      href: "/",
      icon: FaTwitter,
    },
    {
      title: "Instagram",
      href: "/",
      icon: FaInstagram,
    },
  ];
  return (
    <Box
      zIndex={"1"}
      pt={isMobile ? 16 : 36}
      px={isMobile ? 4 : 8}
      position={"relative"}
      borderRadius={isMobile ? "none" : "120px 120px 0 0"}
      bgGradient={"linear(to-b, whiteAlpha.100, primary.900)"}
    >
      <Flex
        flexDirection={isMobile ? "column" : "row"}
        align={isMobile ? "left" : "left"}
        justify={isMobile ? "left" : "space-between"}
        maxW={"1200px"}
        mx="auto"
      >
        <VStack flexBasis={"100%"} align={"left"} mb={12}>
          <Box height={12}>
            <Image src={lightLogo.src} width={200} alt="logo" />{" "}
          </Box>
          <Text textAlign={"justify"} color="primary.300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl eget ultricies tincidunt, nisl nisl aliquam massa,
            eget aliquam
          </Text>
          <HStack>
            <HStack>
              <Button size={"lg"} leftIcon={<Icon as={IoMailOutline} />}>
                <Text>info@rawblock.io</Text>
              </Button>
            </HStack>
            {socialLinks.map((link, ii) => (
              <IconButton
                key={link.title + ii}
                size={"lg"}
                icon={<Icon p={1} as={link.icon} fontSize={"2xl"} />}
              />
            ))}
          </HStack>
        </VStack>
        {footerColumns.map((columns, i) => (
          <>
            <VStack
              mx={4}
              key={columns.title + i}
              align={isMobile ? "left" : "left"}
              flexBasis={"100%"}
              mb={12}
            >
              <Box height={12}>
                <Text
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  fontSize={"2xl"}
                  textAlign={"left"}
                >
                  {columns.title}
                </Text>
              </Box>

              {columns.links.map((link, ii) => (
                <Link
                  key={link.title + ii}
                  href={link.href}
                  color="primary.300"
                  _hover={{
                    color: "primary.100",
                    textDecoration: "none",
                  }}
                >
                  <Text fontWeight={"bold"} fontSize={"lg"}>
                    {link.title + ii}
                  </Text>
                  <Text opacity={0.6} fontSize={"sm"} maxW={"300px"}>
                    {link.desc}
                  </Text>
                </Link>
              ))}
            </VStack>
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default Footer;
