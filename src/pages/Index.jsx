import React from "react";
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Container, Spacer, Link, Icon } from "@chakra-ui/react";
import { FaRocket, FaLayerGroup, FaMobileAlt, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex align="center">
            {/* Navigation Links Update */}
            <HStack as="nav" spacing={4}>
              <Link href="/" color="highlight.500">
                Home
              </Link>
              <Link href="/ueber-uns" color="highlight.500">
                Über uns
              </Link>
              <Link href="/dienstleistungen" color="highlight.500">
                Dienstleistungen
              </Link>
              <Link href="/projekte" color="highlight.500">
                Projekte
              </Link>
              <Link href="/fuer-unternehmen" color="highlight.500">
                Für Unternehmen
              </Link>
              <Link href="/ressourcen" color="highlight.500">
                Ressourcen
              </Link>
              <Link href="/kontakt" color="highlight.500">
                Kontakt
              </Link>
            </HStack>
            <Spacer />
          </Flex>
        </Container>
      </Box>

      <VStack as="main" spacing={10} py={10}>
        <Box textAlign="center" pt={10}>
          <Heading as="h2" size="2xl">
            Welcome to ProBau
          </Heading>
          <Text fontSize="xl" mt={4}>
            The next generation application to solve your problems.
          </Text>
          <Button backgroundColor="brand.500" color="white" size="lg" mt={6} _hover={{ bg: "brand.600" }}>
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
                <Icon as={FaLayerGroup} w={10} h={10} color="brand.500" />
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
          <Button backgroundColor="brand.500" color="white" size="lg" _hover={{ bg: "brand.600" }}>
            Sign Up for Free
          </Button>
        </Box>
      </VStack>

      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" bgColor="brand.50">
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
            <Text color="accent.900">© 2024 ProBau. All rights reserved.</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
