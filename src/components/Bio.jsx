import {
  Box,
  useColorModeValue,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
export const Bio = () => {
  return (
    <Box my={8} px={5}>
      <Heading
        fontSize={"xl"}
        paddingBottom={2}
        marginBottom={4}
        width={"min-content"}
        borderBottom={`4px solid ${useColorModeValue("black", "white")}`}
      >
        Bio
      </Heading>
      <Box>
        <UnorderedList>
          <ListItem listStyleType={"none"}>
            2004 Born in Ulaanbaatar, Mongolia
          </ListItem>
          <ListItem listStyleType={"none"}>
            2018 Started studying at Nest Academy
          </ListItem>
          <ListItem listStyleType={"none"}>
            2021 Started working as a Instructor at Nest Academy
          </ListItem>
          <ListItem listStyleType={"none"}>
            2022 Graduated from The First Secondary School of Ulaanbaatar
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Bio;
