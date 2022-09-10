import React from "react";
import { Image,Box,Stack,Text } from "@chakra-ui/react";

export default function HomeSection3Temp(props) {
  return (
    <Box
      m={5}
      maxW={"500px"}
      maxH={"500px"}
      justifyContent="space-between"
      rounded={15}
      border="1px"
      borderColor={"gray.200"}
    //   _hover={{borderColor: "#00ADBB"}}
      boxShadow={'xl'}
    >
      <Stack align={"center"} mb={5}>
        <Image
          src={props.partners.CompanyLogo}
        />
        <Stack align={'center'} p={4}>
          <Text
            fontSize={"md"}
            fontWeight={700}
            textAlign={'center'}
          >
            {props.partners.CompanyName}
          </Text>
          </Stack>
      </Stack>
    </Box>
  );
}
