import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
  Flex,
  Stack,
  useDisclosure,
  Icon
  
} from "@chakra-ui/react"
import Swal from 'sweetalert2'
import { FaUserPlus } from 'react-icons/fa'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const newUserValidation = yup.object().shape({
  name: yup.string().required('Nome Obrigatório'),
  profession: yup.string().required('Profissão obrigatória'),
  email:yup.string().required('E-mail obrigatório').email('Informe um e-mail válido')
})

import {NextInput} from '../form/Input'
import { api } from '../../api/api'
import { globalContext } from '../../api/context/globalContext'


interface ValuesProps{
  name:string;
  email:string;
  profession:string;
  password:"12345678";
  aplication:"NextControll";
  
}

export const NewUserModal = ( ) => {
 const {handleSubmit, register, formState } = useForm({
   resolver: yupResolver(newUserValidation)
 })
 const {errors} = formState
 const {refreshLista, setRefreshLista, users}= useContext(globalContext)
const {onClose, onOpen, isOpen} = useDisclosure()

 const createNewUser=(values:ValuesProps)=>{
   const userExists = users.filter(item=>item.email === values.email)
   if(userExists.length>0 ){
     onClose()
     Swal.fire('Já existe um usuário com este e-mail cadastrado', '', 'error').then(()=>onOpen())
   }else{
    api.post('users', {
      name:values.name,
      email:values.email,
      profession:values.profession,
      password:"12345678",
      aplication:"NextControll",
    } )
    .then(()=>onClose())
    .then(()=>Swal.fire('Usuário cadastrado com sucesso!','', 'success'))
    .then(()=>setRefreshLista(!refreshLista))
   }
    
  }
  return (
    <>
    <Button 
            as="a"
            colorScheme="yellow"
            size="md"
            fontSize="md"
            leftIcon={<Icon as={FaUserPlus}/>}
            onClick={onOpen}
          >
            
              Criar Novo
          </Button>
    
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent bg="gray.800">
          <ModalHeader
            color="gray.50"
          >
            Cadastrar Novo Usuário
          </ModalHeader>
          <ModalCloseButton />
          
          <Flex 
            as="form"
            w="100%"
            p="8"
           
            bg="gray.800"
            align="center"
            justify="center"
            display="flex"
            flexDirection="column"
            borderRadius={8}
            onSubmit={handleSubmit(createNewUser)}
    >
          <ModalBody>
          <Stack spacing="4">
              <NextInput error={errors.name} name="name" type="text" placeholder="Nome e Sobrenome"  {...register('name')} />
              <NextInput error={errors.profession} name="profession" type="text" placeholder="Profissão"  {...register('profession')} />
              <NextInput error={errors.email} name="email" type="text" placeholder="email"  {...register('email')} />
          </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack>
            <Button colorScheme="yellow"size="lg" type="submit">Salvar</Button>
            <Button colorScheme="whiteAlpha" size="lg" type="button" onClick={onClose}>Fechar</Button>
            </HStack>
          </ModalFooter>
        </Flex>
                  
        </ModalContent>
      </Modal>
      </>
  )
}

