import React from 'react'
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
import { NavLink } from 'react-router-dom';
export default function AddJopOffer() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Update Job Offer</Heading>
        </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white')}
            boxShadow={'lg'}
            p={20}
          >
             <form>

            <Stack spacing={4}>
              <FormControl id="position">
                <FormLabel> Position </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="text"
                  name="position"
                  required
                />
              </FormControl>
              <FormControl id="Description">
                <FormLabel> Description </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="url"
                  name="Description"
                  required
                />
              </FormControl>
              <FormControl id="date">
                <FormLabel> date </FormLabel>
                <Input
                  focusBorderColor='#1B668E'
                  type="date"
                  name="date"
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
                  as={NavLink}
                  to="#"
                >
                 Update Job
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
      </Stack>
    </Flex>
  )
}
