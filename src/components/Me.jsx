import React from "react";
import { Box, Text, Stack, Heading, Image } from "@chakra-ui/react";
import Profile from "../assets/profile.png";

export const Me = () => {
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      my={5}
    >
      <Box>
        <Heading fontFamily={"sans-serif"}>Enkhmunkh Enkhbayar</Heading>
        <Text fontSize={"large"}>Developer, Designer, Gamer</Text>
      </Box>
      <Image
        src={Profile}
        height={"96px"}
        width={"96px"}
        borderRadius={50}
        border={"2px solid white"}
      />
    </Stack>
  );
};

export default Me;
