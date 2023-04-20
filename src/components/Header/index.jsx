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
import React, { useEffect, useRef, useState } from "react";
import logo from "@/images/rawblock.svg";

import { Button, MenuItem, Select } from "@saas-ui/react";
import { FaMoon, FaSun, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { useMotionValue, useScroll } from "framer-motion";
const Header = () => {
  const headerRef = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const menuContext = ["English", "French", "Spanish", "Koray"];
  const menuContent = [
    {
      label: "About",
      value: "About",
      href: "#about",
    },
    {
      label: "Problems",
      value: "Problems",
      href: "#problems",
    },
    {
      label: "Solutions",
      value: "Solutions",
      href: "#solutions",
    },
    {
      label: "Roadmap",
      value: "Roadmap",
      href: "#roadmap",
    },
    {
      label: "Team",
      value: "Team",
      href: "#team",
    },
  ];
  const [pos, setPos] = useState("top");
  useEffect(() => {
    addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 20) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);
  return (
    <div>
      <Flex
        ref={headerRef}
        sx={{
          backdropFilter: "blur(16px)",
        }}
        position={"fixed"}
        boxShadow={
          pos === "moved" ? "0px 0px 10px 0px rgba(0,0,0,0.2)" : "none"
        }
        height={"60px"}
        borderBottom={pos === "moved" ? "1px solid" : "none"}
        borderColor={pos === "moved" ? "whiteAlpha.200" : "none"}
        bg={pos === "moved" ? "blackAlpha.800" : "none"}
        alignItems={"center"}
        top={0}
        justifyContent={"space-between"}
        width={"100%"}
        zIndex={"10"}
      >
        <Flex marginX={"4"}>
          <Image src="/rawblock.svg" alt="logo" width={200} height={100} />
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
