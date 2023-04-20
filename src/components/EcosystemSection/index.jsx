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
                An AI-supported interface enables a company to create ERP
                (Enterprise Resource Planning) contracts. ERP is a software that
                allows a company to manage all its business activities,
                transaction processes, and resources under a single system. The
                AI-supported interface allows users to specify contract details
                in a few steps, and the system automatically generates a
                contract based on this information. For example, a company can
                use the interface to create supplier contracts, production
                contracts, or sales contracts. This makes the contract creation
                process faster and more efficient, resulting in time and cost
                savings for companies.
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
            <Image src={Erp.src} maxW={"500px"} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default EcosystemSection;
