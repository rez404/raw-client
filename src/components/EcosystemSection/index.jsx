import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Subheading from "../Headings/Subheading";
import Accordion from "../Accordion";
import Aurora from "../Aurora";
import Erp from "@/images/ecosystem-erp.png";

const EcosystemSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  return (
    <>
      <Box maxW={"1100px"} mx="auto" position={"relative"} my={"48"}>
        <Aurora
          pos={{ left: "25%", top: "40%" }}
          size={{ width: "900px", height: "1000px" }}
          color="hsl(257.54deg 55.89% 15.53%)"
        />

        <Flex
          flexDirection={isMobile ? "column-reverse" : "row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
        >
          <Flex flexBasis={"100%"}>
            <Box>
              <Subheading
                header={"Enterprise Resource Planning"}
                subheader={"erp contract creation"}
              />
              <Text
                opacity={"0.8"}
                textAlign={{ base: "center", lg: "justify" }}
                wordBreak={"break-word"}
                whiteSpace={"break-spaces"}
              >
                Our ERP system designed with Web3 technology allows you to
                manage all your business processes on a single platform and
                ensures inter-business synchronization. Our system, which
                increases efficiency and provides time and cost savings, also
                stands out with its user-friendly interface and security. If you
                are looking for an ERP system that will support your business
                growth, protect your data, and streamline your management
                processes, you are in the right place!{" "}
              </Text>
              <Accordion
                heading={"How can I integrate ERP systems with blockchain?"}
                description={
                  "ERP systems can be integrated with blockchain typically through APIs (Application Programming Interfaces) or smart contracts."
                }
              />
              <Accordion
                heading={
                  "What are the advantages of integrating ERP systems with blockchain?"
                }
                description={
                  " Integrating ERP systems with blockchain can provide benefits such as data security, transparency, automation, reliability, and traceability."
                }
              />
              <Accordion
                heading={
                  "How can the integration of ERP systems with blockchain impact business processes?"
                }
                description={
                  "The integration of ERP systems with blockchain can automate business processes, enhance data accuracy, secure data sharing, and make business processes more transparent."
                }
              />
            </Box>
          </Flex>
          <Flex flexBasis={"100%"} justifyContent={"center"}>
            <Image alt="" src={Erp.src} maxW={"500px"} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default EcosystemSection;
