import React from "react";
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Container, Spacer, Link, Icon } from "@chakra-ui/react";
import { FaRocket, FaLayerGroup, FaMobileAlt, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading as="h1" size="lg">
              AppName
            </Heading>
            <Spacer />
            <HStack as="nav" spacing={4}>
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#about">About</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <VStack as="main" spacing={10} py={10}>
        <Box textAlign="center" pt={10}>
          <Heading as="h2" size="2xl">
            Welcome to AppName
          </Heading>
          <Text fontSize="xl" mt={4}>
            The next generation application to solve your problems.
          </Text>
          <Button colorScheme="blue" size="lg" mt={6}>
            Get Started <Icon as={FaRocket} ml={2} />
          </Button>
        </Box>

        <Box id="features" py={10} borderBottom="1px" borderColor="gray.200">
          <Container maxW="container.xl">
            <Heading as="h3" size="xl" textAlign="center" mb={10}>
              Features
            </Heading>
            <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" spacing={10}>
              <VStack maxW="sm" textAlign="center" spacing={4}>
                <Icon as={FaLayerGroup} w={10} h={10} color="blue.500" />
                <Heading as="h4" size="md">
                  Feature One
                </Heading>
                <Text>Describe the feature here in a brief paragraph.</Text>
              </VStack>
              <VStack maxW="sm" textAlign="center" spacing={4}>
                <Icon as={FaMobileAlt} w={10} h={10} color="green.500" />
                <Heading as="h4" size="md">
                  Feature Two
                </Heading>
                <Text>Describe the second feature here in a brief paragraph.</Text>
              </VStack>
            </Flex>
          </Container>
        </Box>

        <Box textAlign="center" py={10}>
          <Heading as="h3" size="xl" mb={6}>
            Ready to get started?
          </Heading>
          <Button colorScheme="green" size="lg">
            Sign Up for Free
          </Button>
        </Box>
      </VStack>

      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
              <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
            </HStack>
            <Text>© 2023 AppName. All rights reserved.</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
