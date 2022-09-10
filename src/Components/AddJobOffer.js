import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function AddJopOffer() {
  const toast = useToast();
  const [position, setPosition] = useState("");
  const [Description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const putPosition = (e) => {
    setPosition(e.target.value);
  };
  const putDesription = (e) => {
    setDescription(e.target.value);
  };
  const putDate = (e) => {
    setDate(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted from ------>");
    axios
      .post("https://projectithaq.herokuapp.com/job/add_job", {
        position: position,
        description: Description,
        date: date,
      },{ headers : { Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then((respons) => {
        console.log(respons.data);
        // alert(respons.data.msg);
        toast({
          title: "Added Job.",
          status: "success",
          position: "top",
          duration: 7000,
          isClosable: true,
        });
        redirect();
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
        alert(err.respons.data.error.message);
      });
  };

  const navigate = useNavigate();
  function redirect() {
    navigate("/JobOffers");
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Job Offer</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white")}
          boxShadow={"lg"}
          p={20}
        >
          <form>
            <Stack spacing={4}>
              <FormControl id="position">
                <FormLabel> Position </FormLabel>
                <Input
                  focusBorderColor="#1B668E"
                  type="text"
                  name="position"
                  onChange={putPosition}
                  required
                />
              </FormControl>
              <FormControl id="Description">
                <FormLabel> Description </FormLabel>
                <Input
                  focusBorderColor="#1B668E"
                  type="url"
                  name="Description"
                  onChange={putDesription}
                  required
                />
              </FormControl>
              <FormControl id="date">
                <FormLabel> date </FormLabel>
                <Input
                  focusBorderColor="#1B668E"
                  type="date"
                  name="date"
                  onChange={putDate}
                  required
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"#1B668E"}
                  color={"white"}
                  _hover={{
                    bg: "#1B668E",
                    color: "white",
                  }}
                  onClick={handelSubmit}
                >
                  Add Job
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
