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
import { Link as AnimationLink, animateScroll as scroll } from "react-scroll";

import { Button, MenuItem, Select } from "@saas-ui/react";
import { FaDiscord, FaGithub, FaMoon, FaSun, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { IoMailOutline, IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const headerRef = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const socialContent = [
    {
      label: "Telegram",
      value: "Telegram",
      href: "https://t.me/rawblockyazilim",
      icon: FaTelegram,
    },
    {
      label: "Github",
      value: "Github",
      href: "",
      icon: FaGithub,
    },
    {
      label: "Discord",
      value: "Discord",
      href: "",
      icon: FaDiscord,
    },
  ];

  const menuContent = [
    {
      label: "About",
      value: "About",
      href: "about",
    },
    {
      label: "Problems",
      value: "Problems",
      href: "problems",
    },
    {
      label: "Solutions",
      value: "Solutions",
      href: "solutions",
    },
    {
      label: "Roadmap",
      value: "Roadmap",
      href: "roadmap",
    },
    {
      label: "Team",
      value: "Team",
      href: "team",
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
          <Flex justifyContent={"center"} alignItems={"center"} gap={"40px"}>
            {menuContent.map((item, ii) => (
              <AnimationLink
                to={item.href}
                key={item.label}
                smooth
                style={{ cursor: "pointer" }}
              >
                <Text fontWeight={500}> {item.value}</Text>
              </AnimationLink>
            ))}
          </Flex>
        )}
        <Flex marginX={"4"} alignItems={"center"} gap={"2"}>
          <Link href={"https://whitepaper.rawblock.io/"}>
            <Button>Whitepaper</Button>{" "}
          </Link>{" "}
          <Popover isLazy>
            <PopoverTrigger>
              <Button variant={"solid"} colorScheme="primary">
                <Text>Community</Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              bg={"blackAlpha.800"}
              border={"1px solid"}
              borderColor={"whiteAlpha.300"}
              maxWidth="200px"
            >
              <PopoverHeader fontWeight="semibold">
                Our Social Links
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <VStack alignItems={"left"}>
                  {socialContent.map((item) => (
                    <>
                      <Button leftIcon={<Icon as={item.icon} />}>
                        {item.label}
                      </Button>
                    </>
                  ))}{" "}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
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
                      <AnimationLink
                        to={item.href}
                        key={item.label}
                        smooth
                        style={{ cursor: "pointer" }}
                      >
                        <Text fontWeight={500}> {item.value}</Text>
                      </AnimationLink>
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
