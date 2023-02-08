import React from "react";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";

export const Love = () => {
  return (
    <Box px={5}>
      <Heading
        fontSize={"xl"}
        paddingBottom={2}
        marginBottom={4}
        width={"min-content"}
        borderBottom={`4px solid ${useColorModeValue("black", "white")}`}
      >
        ILove
      </Heading>
      <Box>Coding, Competitive Programming, Playing Valorant</Box>
    </Box>
  );
};

export default Love;
