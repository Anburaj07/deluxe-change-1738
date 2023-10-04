import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const Section3 = () => {
  return (
    <Flex
      ml={{
        sm: "5px",
        md: "10px",
        lg: "15px",
        xl: "20px",
      }}
      mr={{
        sm: "5px",
        md: "10px",
        lg: "15px",
        xl: "20px",
      }}
      p={{
        sm: "5px",
        md: "10px",
        lg: "15px",
        xl: "20px",
      }}
      mb={5}
      mt={5}
      alignItems={"flex-start"}
    >
      <Flex direction={"column"} margin={"auto"}>
        <Text
          fontSize={{
            sm: "2xl",
            md: "2xl",
            lg: "3xl",
            xl: "3xl",
          }}
          fontWeight={"semibold"}
        >
          A Broad Selection Of Courses{" "}
        </Text>
        <Text
          fontSize={{
            sm: "sm",
            md: "md",
            lg: "lg",
            xl: "xl",
          }}
          fontFamily={"poppins"}
        >
          Choose from over 210,000 online video courses with new additions
          published every month
        </Text>
      </Flex>
    </Flex>
  );
};

export default Section3;