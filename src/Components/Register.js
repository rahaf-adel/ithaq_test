import {
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Text,
  useControllableState,
  useColorModeValue,
} from "@chakra-ui/react";
import RegisterPic from "./Assets/Images/RegisterPic.jpg";
import IthaqLogo from "./Assets/Images/IthaqLogo.png";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
// import axios from 'axios';
function Rigester() {
  const [showPassword, setShowPassword] = useState(false);
  // const [formValue, setformValue] = useState({
  //   first_name: '',
  //   last_name: '',
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  // const handleSubmit = async () => {
  // store the states in the form data
  //   const loginFormData = new FormData();
  //   loginFormData.append('first_name', formValue.first_name);
  //   loginFormData.append('last_name', formValue.last_name);
  //   loginFormData.append('username', formValue.username);
  //   loginFormData.append('email', formValue.email);
  //   loginFormData.append('password', formValue.password);

  //   try {
  //     // make axios post request
  //     const response = await axios({
  //       method: 'post',
  //       url: 'http://127.0.0.1:8000/register',
  //       data: loginFormData,
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleChange = e => {
  //   setformValue({
  //     ...formValue,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Image alt={"Ithaq Image"} width={100} src={IthaqLogo} />
          <Box
            boxShadow="base"
            p="12"
            rounded="lg"
            bg={useColorModeValue("white")}
          >
            <Heading fontSize={"2xl"} color={"#1B668E"}>
              Register{" "}
            </Heading>
            <br></br>
            {/* <form onClick={handleSubmit}> */}
            <form>
              <FormControl id="email" isRequired>
                <FormLabel> Email </FormLabel>
                <Input
                  focusBorderColor="#1B668E"
                  type="email"
                  name="email"
                  // value={formValue.email}
                  // onChange={handleChange}
                />
              </FormControl>
              <FormControl id="username" isRequired>
                <FormLabel>Username </FormLabel>
                <Input
                  focusBorderColor="#1B668E"
                  type="text"
                  name="username"
                  // value={formValue.username}
                  // onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel> Password </FormLabel>
                <InputGroup>
                  <Input
                    focusBorderColor="#1B668E"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    // value={formValue.password}
                    // onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      // onClick={() =>
                      //   setShowPassword(showPassword => !showPassword)
                      // }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack pt={6}>
                <Text align={"center"}>
                  I accept the{" "}
                  <Link as={NavLink} to="/Login" color={"#1B668E"}>
                    {" "}
                    Terms of use{" "}
                  </Link>
                  , and
                  <Link color={"#1B668E"} as={NavLink} to="/Login">
                    {" "}
                    Privacy policy{" "}
                  </Link>
                </Text>
              </Stack>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#1B668E"}
                  color={"white"}
                  _hover={{
                    bg: "#1B668E",
                  }}
                  as={NavLink}
                  to="/Login"
                >
                  Sign Up
                </Button>
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={"center"}>
                Already have an account?{" "}
                <Link as={NavLink} to="/Login" color={"#1B668E"}>
                  {" "}
                  Login
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={RegisterPic} />
      </Flex>
    </Stack>
  );
}
export default Rigester;
