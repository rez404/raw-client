import React from 'react'


import { Box, Flex, Text, Link, Icon, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify="space-around"
        maxW={{ base: "100%", md: "container.xl" }}
        mx="auto"
        
      >
        <VStack
          mb={{ base: 6, md: 0 }}
          mr={{ base: 0, md: 10 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontWeight="bold" mb={2}>
            Kolon 1
          </Text>
          <Link href="#" >
            Bağlantı 1
          </Link>
          <Link href="#" >
            Bağlantı 2
          </Link>
          <Link href="#" >
            Bağlantı 3
          </Link>
        </VStack>
        <VStack
          mb={{ base: 6, md: 0 }}
          mr={{ base: 0, md: 6 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontWeight="bold" mb={2}>
            Kolon 2
          </Text>
          <Link href="#" >
            Bağlantı 4
          </Link>
          <Link href="#" >
            Bağlantı 5
          </Link>
          <Link href="#" >
            Bağlantı 6
          </Link>
        </VStack>
        <VStack textAlign={{ base: "center", md: "left" }}>
          <Text fontWeight="bold" mb={2}>
            Kolon 3
          </Text>
          <Link href="#" >
            Bağlantı 7
          </Link>
          <Link href="#" >
            Bağlantı 8
          </Link>
          <Link href="#" >
            Bağlantı 9
          </Link>
        </VStack>
      </Flex>
      </Box>
  );
};

export default Footer;