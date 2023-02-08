import React from "react";
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import { Banner, MotionSection, Work, Bio, Love, Me } from "../components";

export const Home = () => {
  return (
    <Box background={useColorModeValue("#f0e7db", "grey.700")}>
      <Container>
        <MotionSection>
          <Box height={512}>
            <Banner />
          </Box>
          <Box zIndex={2} marginTop={-196} position={"relative"} padding={5}>
            <Box
              background={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
              backdropFilter={"blur(10px)"}
              backgroundColor={"rgba(255, 255, 255, 0.25)"}
              p={3}
              color={useColorModeValue("black", "white")}
              textAlign={"center"}
              borderRadius={8}
            >
              <Text>Hello, I'm an software developer based in Mongolia!</Text>
            </Box>
            <Me />
          </Box>
        </MotionSection>
        <MotionSection delay={0.2}>
          <Work />
        </MotionSection>
        <MotionSection delay={0.4}>
          <Bio />
        </MotionSection>
        <MotionSection delay={0.6}>
          <Love />
        </MotionSection>
      </Container>
    </Box>
  );
};
