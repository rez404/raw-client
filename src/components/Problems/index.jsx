import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsFillStarFill } from "react-icons/bs";
import GradientHeading from "../Headings/GradientHeading";
import Ecommerce from "@/images/e-commerce.png";
import ERP from "@/images/erp.png";
import social from "@/images/social.png";
import common from "@/images/common-problems.png";

const FeaturesSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  return (
    <Box id="problems" maxW={"1100px"} position={"relative"} margin="0 auto">
      <Flex justifyContent={"center"} width={"100%"}>
        <GradientHeading
          subheader={"Problems"}
          header={"Why did Rawblock originate?"}
        />
      </Flex>
      <Flex mt={10} mb={10}>
        {/* Container */}
        <Flex direction={isMobile ? "column" : "row"} w="100%">
          <Box flexBasis="25%" p={1}>
            <Box
              minHeight={"38rem"}
              bg={"gray.700"}
              sx={{
                backdropFilter: "blur(16px)",
              }}
              border={"1px solid"}
              borderColor="whiteAlpha.200"
              borderRadius="lg"
              boxShadow="md"
              p={4}
              m={isMobile ? 6 : 0}
              textAlign="center"
              transition="box-shadow 0.3s ease-in-out"
              _hover={{
                boxShadow: "0 0 50px hsl(263.54deg 69.89% 63.53% / 43%)",
              }}
            >
              <Image src={Ecommerce.src} alt="" mb={4} />
              <Heading fontWeight="semibold">e-Commerce</Heading>
              <Text mt={4}>
                Implementing a supply-focused marketing strategy poses
                challenges to achieving stability and sustainability due to
                factors such as intense competition, high commission rates, and
                dependence on the management of centralized structures.
              </Text>
            </Box>
          </Box>

          <Box flexBasis="25%" p={1}>
            <Box
              minHeight={"38rem"}
              bg={"gray.700"}
              sx={{
                backdropFilter: "blur(16px)",
              }}
              border={"1px solid"}
              borderColor="whiteAlpha.200"
              borderRadius="lg"
              boxShadow="md"
              p={4}
              m={isMobile ? 6 : 0}
              textAlign="center"
              transition="box-shadow 0.3s ease-in-out"
              _hover={{
                boxShadow: "0 0 50px hsl(263.54deg 69.89% 63.53% / 43%)",
              }}
            >
              <Image src={ERP.src} alt="" mb={4} />
              <Heading fontWeight="semibold">ERP</Heading>
              <Text mt={4}>
                There are synchronization problems among asynchronous structures
                and issues with intra- and inter-organizational asset exchange.
              </Text>
            </Box>
          </Box>

          <Box flexBasis="25%" p={1}>
            <Box
              minHeight={"38rem"}
              bg={"gray.700"}
              sx={{
                backdropFilter: "blur(16px)",
              }}
              border={"1px solid"}
              borderColor="whiteAlpha.200"
              borderRadius="lg"
              boxShadow="md"
              p={4}
              m={isMobile ? 6 : 0}
              textAlign="center"
              transition="box-shadow 0.3s ease-in-out"
              _hover={{
                boxShadow: "0 0 50px hsl(263.54deg 69.89% 63.53% / 43%)",
              }}
            >
              <Image src={social.src} alt="" mb={4} />
              <Heading fontWeight="semibold">Social Actions</Heading>
              <Text mt={4}>
                In commerce and everyday life, fake users and their reviews are
                a common problem.
              </Text>
            </Box>
          </Box>

          <Box flexBasis="25%" p={1}>
            <Box
              minHeight={"38rem"}
              bg={"gray.700"}
              sx={{
                backdropFilter: "blur(16px)",
              }}
              border={"1px solid"}
              borderColor="whiteAlpha.200"
              borderRadius="lg"
              boxShadow="md"
              p={4}
              m={isMobile ? 6 : 0}
              textAlign="center"
              transition="box-shadow 0.3s ease-in-out"
              _hover={{
                boxShadow: "0 0 50px hsl(263.54deg 69.89% 63.53% / 43%)",
              }}
            >
              <Image src={common.src} alt="" mb={4} />
              <Heading fontWeight="semibold">Common Problems</Heading>
              <Text mt={4}>
                There are factors such as high cost, data security, high energy
                cost, and lack of end-to-end asset exchange.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FeaturesSection;
