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
      title: "Links",
      links: [
        {
          title: "Whitepaper",
          desc: "Whitepaper is a document that describes the technology behind a project. ",
          href: "/",
        },
        {
          title: "E-Commerce",
          desc: " Our E-Commerce platform is a decentralized marketplace that allows users to buy and sell goods and services. ",
          href: "/",
        },
        {
          title: "ERP",
          desc: "ERP is a software that allows companies to manage their business processes. ",
          href: "/",
        },
        {
          title: "AI Contract Creator",
          desc: "AI Contract Creator is a tool that allows users to create their own contracts. ",
          href: "/",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          title: "Staking",
          desc: "Staking is a process of holding funds in a cryptocurrency wallet to support the operations of a blockchain network. ",
          href: "/",
        },
        {
          title: "Tokenomics",
          desc: "Tokenomics is the study of how cryptocurrencies work within the broader ecosystem. ",
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
            Rawblock Puzzle System provides decentralized infrastructure support
            with the use of blockchain and IPFS technologies, along with
            artificial intelligence assistance. This enables companies and
            individuals to create their own platforms with customized contract
            structures.
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
                    {ii + ". " + link.title}
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
