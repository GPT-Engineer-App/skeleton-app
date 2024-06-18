import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={4} bg="gray.100" mt={10}>
      <Flex direction="column" align="center" justify="center">
        <Text mb={2}>© 2023 Your Company. All rights reserved.</Text>
        <Flex>
          <Link href="#" mx={2}>Privacy Policy</Link>
          <Link href="#" mx={2}>Terms of Service</Link>
          <Link href="#" mx={2}>Contact Us</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;