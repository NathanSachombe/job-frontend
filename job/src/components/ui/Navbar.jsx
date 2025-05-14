import { Link, Box, Flex, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg="gray.100"
      zIndex="1000"
      p={4}
      boxShadow="md"
    >
      <Flex justify="space-between" align="center">
        {/* Home link on the left */}
        <Link href="/">Home</Link>

        {/* Other links on the right */}
        <HStack spacing={6}>
          <Link href="/add-job">Add Job</Link>
          <Link href="/sign-up">Sign Up</Link>
          <Link href="/log-in">Log In</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
