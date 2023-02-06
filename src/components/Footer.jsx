import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
export const Footer = () => {
  return (
    <Box background={useColorModeValue("#f0e7db", "grey.700")} py={8}>
      <Container centerContent>
        © 2023 Enkhmunkh Enkhbayar. All Rights Reserved.
      </Container>
    </Box>
  );
};
export default Footer;
