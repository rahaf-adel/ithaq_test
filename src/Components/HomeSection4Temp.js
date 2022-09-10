import React from "react";
import { Icon, Box, Stack, Heading, Divider, Center,Flex } from "@chakra-ui/react";

export default function HomeSection4Temp(props) {
  return (
    <Center>
<Box w={'250px'} boxShadow="base" bg={'white'} rounded={15} p={5} border="1px"
      borderColor={"gray.200"}>
      <Flex justify={'center'} p={5}>
        <Icon as={props.rigester.Icon} w={20} h={20} color="#6E3F8E" />
      </Flex>
      <Divider />
      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={2}>
          <Heading fontSize={'md'} fontWeight={500} fontFamily={'body'}>
            {props.rigester.Title}
          </Heading>
        </Stack>
      </Box>
    </Box>
    </Center>
  );
}
