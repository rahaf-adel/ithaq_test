import React , {useState} from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
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
  } from '@chakra-ui/react';
export default function AddEmployee() {
  const toast = useToast()
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [linkedin, setlinkedIn] = useState("")

  const putImg = (e) => {
    setImg(e.target.value);
  };
  const putName = (e) => {
    setName(e.target.value);
  };
  
  const putJob = (e) => {
    setJob(e.target.value);
  };
  const putLinkedIn= (e)=>{
    setlinkedIn(e.target.value);
  };
  
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted from ------>");
    axios
      .post("https://projectithaq.herokuapp.com/emp/add_emp/", {
        avatar: img,
        name: name,
        position:job,
        linkedin:linkedin,
      },{ headers : { Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then((respons) => {
        console.log(respons.data);
        // alert(respons.data.msg);
        toast({
          title: 'Added Succesfully.',
          status: 'success',
          position: "top",
          duration: 7000,
          isClosable: true,
        })
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
    navigate("/Employees");
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Add Employee</Heading>
        </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white')}
            boxShadow={'lg'}
            p={20}
          >
             <form>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Employee Name</FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="name"
                  onChange={putName}
                  required
                />
              </FormControl>
              <FormControl id="position">
                <FormLabel> Position </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="position"
                  onChange={putJob}
                  required
                />
              </FormControl>
              <FormControl id="linkedin">
                <FormLabel> Linked In </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="url"
                  name="linkedin"
                  onChange={putLinkedIn}
                  required
                />
              </FormControl>
              <FormControl id="avatar">
                <FormLabel> Avatar </FormLabel>
                <Input 
                  type="url"
                  name="avatar"
                  onChange={putImg}
                  required
                />
              </FormControl>
              <Stack spacing={10}>
               
                <Button
                  bg={'#1B668E'}
                  color={'white'}
                  _hover={{
                    bg: '#1B668E',
                    color:"white"
                  }}
                  onClick={handelSubmit}
                >
                 Add Employee
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
      </Stack>
    </Flex>
  )
}
