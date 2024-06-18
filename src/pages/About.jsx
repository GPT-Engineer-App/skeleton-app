import { Box, Text, Heading, VStack, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>About Us</Heading>
        <Text fontSize="lg" mb={6}>
          Welcome to our application! We are dedicated to providing the best experience for our users.
        </Text>
      </Flex>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Our Mission</Heading>
        <VStack spacing={5}>
          <Text>
            Our mission is to create a user-friendly and efficient application that meets the needs of our diverse user base.
          </Text>
          <Text>
            We strive to continuously improve and innovate, ensuring that our users have access to the latest features and technologies.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default About;