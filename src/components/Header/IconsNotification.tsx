import React, { useContext } from 'react'
import {Flex, HStack, Icon} from '@chakra-ui/react'
import { FaBell, FaSignOutAlt, FaUserEdit } from 'react-icons/fa'
import { globalContext } from '../../api/context/globalContext'
import Swal from 'sweetalert2'
import Router from 'next/router'
import { EditProfileModal } from '../Users/EditProfileModal'

const IconsNotification = () => {
  const {setLogeduser} = useContext(globalContext)

  const signOut = ()=>{
    Swal.fire({
      title: 'Tem certeza que deseja sair da aplicação?',
      showCancelButton: true,
      confirmButtonText: `Sair`,
      cancelButtonText:'Cancelar',
    }).then((result) => {
       if (result.isConfirmed) {
        Swal.fire('Usuário Deslogado!', '', 'success').then(()=>setLogeduser({}))
        .then(()=>Router.push('/'))
        return
      } 
    })
  }

  return (
    <Flex 
        align="center"
        ml="auto"

      >
        <HStack 
          spacing={["4","8"]}
          mx={["4","8"]}
          pr={["4","8"]}
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <EditProfileModal/>
          <Icon as={FaSignOutAlt} fontSize="20" cursor="pointer" onClick={()=>signOut()}/>
        </HStack>
        
      
      </Flex>
    
  )
}

export default IconsNotification
