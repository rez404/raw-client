import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  Text,
  useMediaQuery,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  VStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import logo from "@/images/vercel.svg";

import { Button, MenuItem, Select } from "@saas-ui/react";
import { FaMoon, FaSun, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const menuContent = [
    {
      label: "About",
      value: "About",
      href: "/",
    },
    {
      label: "Problems",
      value: "Problems",
      href: "/",
    },
    {
      label: "Solutions",
      value: "Solutions",
      href: "/",
    },
    {
      label: "Roadmap",
      value: "Roadmap",
      href: "/",
    },
    {
      label: "Team",
      value: "Team",
      href: "/",
    },
  ];
  return (
    <div>
      <Flex
        sx={{
          backdropFilter: "blur(16px)",
        }}
        position={"fixed"}
        boxShadow="xl"
        height={"60px"}
        borderBottom={"1px solid"}
        borderColor={"whiteAlpha.200"}
        alignItems={"center"}
        top={0}
        justifyContent={"space-between"}
        width={"100%"}
        zIndex={"10"}
      >
        <Flex marginX={"4"}>
          <Image src="/vercel.svg" alt="logo" width={100} height={100} />
        </Flex>
        {!isMobile && (
          <Flex justifyContent={"center"} alignItems={"center"} gap={"20px"}>
            {menuContent.map((item) => (
              <Link href={item.href} key={item.label}>
                <Text>{item.value}</Text>
              </Link>
            ))}
          </Flex>
        )}
        <Flex marginX={"4"} alignItems={"center"} gap={"2"}>
          <Button>Whitepaper</Button>{" "}
          <Button
            leftIcon={<Icon as={FaTelegram} />}
            variant={"solid"}
            colorScheme="primary"
          >
            Community
          </Button>
          {/* <IconButton
            onClick={toggleColorMode}
            aria-label="Search database"
            icon={ <FaSun />}
          /> */}
          {isMobile && (
            <Popover isLazy>
              <PopoverTrigger>
                <IconButton icon={<IoMenuOutline />} />
              </PopoverTrigger>
              <PopoverContent
                bg={"blackAlpha.800"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                maxWidth="200px"
              >
                <PopoverHeader fontWeight="semibold">Menu</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <VStack alignItems={"left"}>
                    {menuContent.map((item) => (
                      <Text key={item.label}>ASDAS</Text>
                    ))}{" "}
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
