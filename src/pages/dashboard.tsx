import {Box, Flex, Heading, Button, Icon, useDisclosure, } from '@chakra-ui/react'
import Router from 'next/router'
import { FaUserPlus} from 'react-icons/fa';
import { NewUserModal } from '../components/Users/NewUserModal';
import { Header } from '../components/Header/Index'
import { UsersList } from '../components/Users/UsersList';
import { Pagination } from '../components/Pagination';
import { useContext, useEffect } from 'react';
import { globalContext } from '../api/context/globalContext';
import { isEmpty } from '../common/utils/functions/isEmpty';
import { EditModal } from '../components/Users/EditModal';


  const Dashboard = ()=>{
    const {logedUser}  = useContext(globalContext)


     useEffect(()=>{
        if(isEmpty(logedUser)){
          Router.push('/')
        }

     },[logedUser])
   
  return(
    <Flex direction="column" h="100vh">
    <Header/>
    <Flex w="100%" my="10" maxWidth={[360, 1480]} mx="auto"  >
      <Box
      flex="1"
      borderRadius="8"
      bg="gray.700"
      p={["4","8" ]}
      >
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">Usuários</Heading>
          <NewUserModal/>
        </Flex>
        <UsersList/>
        <Pagination/>
       
        
      </Box>
    </Flex>

    </Flex>
  )

}
export default Dashboard;
