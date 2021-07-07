import React, { useContext } from 'react'
import Router from 'next/router'
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
import { FaUserEdit } from 'react-icons/fa'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'




import {NextInput} from '../form/Input'
import { api } from '../../api/api'
import { globalContext } from '../../api/context/globalContext'



interface ValuesProps{
  name:string;
  email:string;
  profession:string;
  newPassword:string;
  confirmNewPassword: string;
  aplication:"NextControll";
  
}

const profileSchemavalidation = yup.object().shape({
  
  confirmNewPassword:yup.string().oneOf([
    null,
    yup.ref('newPassword')
  ], 'As senhas não conferem')
})

export const EditProfileModal = ( ) => {
 const {handleSubmit, register, formState } = useForm({
   resolver:yupResolver(profileSchemavalidation)
 })
 const {errors} = formState
 const {refreshLista, setRefreshLista, logedUser}= useContext(globalContext)
const {onClose, onOpen, isOpen} = useDisclosure()
const {name, id, email, profession } =logedUser

 const createNewUser=(values:ValuesProps)=>{
 
    api.put(`users/${id}`, {
      name:values.name,
      email:values.email,
      profession:values.profession,
      password:values.newPassword,
      aplication:"NextControll",
    } )
    .then(()=>onClose())
    .then(()=>Swal.fire('Perfil Atualizado!','', 'success'))
    .then(()=>setRefreshLista(!refreshLista))
  
    
  }

  const deleteAcount = ()=>{
    onClose()
    Swal.fire({
      title: `Deseja realmente excluir sua conta ?`,
      showDenyButton: true,
      confirmButtonText: `Confirmar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        api.delete(`users/${id}`).then(()=>Swal.fire('Conta Excluída!', '', 'success').then(()=>setRefreshLista(!refreshLista)).then(()=>Router.push('/')))
        
      } else if (result.isDenied) {
        Swal.fire('Operação cancelada!', '', 'info')
      }
    })
  }
  return (
    <>
    <Icon as={FaUserEdit} cursor="pointer" fontSize="20" onClick={onOpen} />
    
  <Modal isOpen={isOpen} onClose={onClose} size="sm" >
        <ModalOverlay  />
        <ModalContent bg="gray.800">
          <ModalHeader
            color="gray.50"
          >
            Editar Perfil
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
              <NextInput error={errors.name} name="name" type="text" placeholder="Nome e Sobrenome" defaultValue={name}  {...register('name')} />
              <NextInput error={errors.profession} name="profession" type="text" placeholder="Profissão" defaultValue={profession} {...register('profession')} />
              <NextInput error={errors.email} name="email" type="email" placeholder="E-mail" defaultValue={email}  {...register('email')} />
              <NextInput error={errors.newPassword} name="newPassword" type="password" placeholder="Nova Senha"  {...register('newPassword')} />
              <NextInput error={errors.confirmNewPassword} name="confirmNewPassword" type="password" placeholder="Repita a Nova Senha"  {...register('confirmNewPassword')} />
          </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack>
            <Button colorScheme="yellow"size="md" type="submit">Salvar</Button>
            <Button colorScheme="orange" size="md" type="button" onClick={()=>deleteAcount()}>Excluir Conta</Button>
            <Button colorScheme="whiteAlpha" size="md" type="button" onClick={onClose}>Fechar</Button>
            </HStack>
          </ModalFooter>
        </Flex>
                  
        </ModalContent>
      </Modal>
      </>
  )
}

