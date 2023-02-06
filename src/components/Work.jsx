import { Box, Text, useColorModeValue, Heading } from "@chakra-ui/react";
import React from "react";
export const Work = () => {
  return (
    <Box my={8} px={5}>
      <Heading
        fontSize={"xl"}
        paddingBottom={2}
        marginBottom={4}
        width={"min-content"}
        borderBottom={`4px solid ${useColorModeValue("black", "white")}`}
      >
        Work
      </Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa neque
        dolor quia voluptatem eligendi facilis modi libero assumenda suscipit
        rerum consectetur, perferendis dolorem quo nobis quae natus porro
        pariatur excepturi.
      </Text>
    </Box>
  );
};
export default Work;
