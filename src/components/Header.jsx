import React from "react";
import {
  Box,
  Text,
  Image,
  Container,
  Stack,
  Switch,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ShootingStarDark from "../assets/shooting-star-dark.png";
import ShootingStaLight from "../assets/shooting-star-light.png";
export const Header = () => {
  const tabs = ["Works", "Posts", "Uses"];
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      position={"fixed"}
      width={"full"}
      backdropFilter={"blur(10px)"}
      zIndex={1}
      backgroundColor={useColorModeValue(
        "rgba(255, 255, 255, 0.25)",
        "rgba(0, 0, 0, 0.25)"
      )}
      py={2}
    >
      <Container maxW="3xl">
        <Stack direction={"row"} align={"center"}>
          <Stack gap={1} direction={"row"} cursor={"pointer"}>
            <Image
              src={colorMode === "dark" ? ShootingStaLight : ShootingStarDark}
              alt="shooting star"
              h={5}
            />
            <Text fontSize={"-moz-initial"} fontFamily="mono" fontWeight="bold">
              Enkhmunkh Enkbayar
            </Text>
          </Stack>
          <Stack direction={"row"} flex={1}>
            {tabs.map((tab, index) => (
              <Link paddingX={4} paddingY={2} to={tab} key={index}>
                {tab}
              </Link>
            ))}
          </Stack>
          <Switch onChange={toggleColorMode} value={colorMode === "dark"} />
        </Stack>
      </Container>
    </Box>
  );
};
export default Header;
