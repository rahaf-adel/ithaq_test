import { Box, Center, Text, Stack } from "@chakra-ui/react";
import CountUp from "react-countup";
export default function HomeStatisticTemp(props) {
  return (
    <Center py={6}>
      <Box
        m={5}
        maxW={"500px"}
        maxH={"500px"}
        w={"full"}
        h={"full"}
        justifyContent="space-between"
        rounded={15}
        border="1px"
        borderColor={"gray.200"}
      >
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Text fontSize={"xl"} fontWeight={700} p={2} px={3} rounded={"full"}>
            {props.state.title}
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text
              className="counter-value"
              fontSize={"5xl"}
              fontWeight={500}
              color={"#FFD24C"}
            >
              <CountUp  duration={2.75} end={props.state.number} />
            </Text>
            <Text color={"#FFD24C"} fontWeight={500} fontSize={"5xl"}>
              +
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
