import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';


export default function SimpleCard() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin , setIsLogin] = useState(false)

  const handelUsername = (e) => {
    setUserName(e.target.value);
  };
  const handelePassword = (e) => {
    setPassword(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted from ------>");
    axios
      .post("https://projectithaq.herokuapp.com/user/login", {
        username: userName,
        password: password,
      })
      .then((respons) => {
        console.log(respons.data.msg);
        if (
          respons.data.msg == "Your token is ready"
        ) {
          localStorage.setItem("token",respons.data.token)
          redirect();
        }
        else{
          alert(respons.data.msg)
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
        
        alert(err.respons.data.error.message);
      });
      localStorage.setItem("username", userName)
      localStorage.setItem("password", password)
      localStorage.setItem("isLogin",isLogin)
      setIsLogin(true)
  };

  const navigate = useNavigate();
  function redirect() {
    navigate("/Dashboard");
  }
  return (
    <>
   
  
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login</Heading>
        </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white')}
            boxShadow={'lg'}
            p={20}
          >
             {/* <form onClick={handleSubmit}> */}
             <form>

            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="username"
                  // value={"formValue.username"}
                  onChange={handelUsername}
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel> Password </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="password"
                  name="password"
                  // value={"formValue.password"}
                 onChange={handelePassword}
                  required
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember</Checkbox>
                  <Link color={'#1B668E'}>Forget Password?</Link>
                </Stack>
                <Button
                  bg={'#1B668E'}
                  color={'white'}
                  _hover={{
                    bg: '#1B668E',
                    color:"white"
                  }}
                  // as={NavLink}
                  // to="/Dashboard"
                 onClick={handelSubmit}
                >
                 Login
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
      </Stack>
    </Flex>
    </>
  );
}
