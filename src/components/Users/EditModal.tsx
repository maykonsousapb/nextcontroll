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
  useDisclosure
  
} from "@chakra-ui/react"
import {NextInput} from '../form/Input'
import { api } from '../../api/api'
import Swal from 'sweetalert2'
import { globalContext } from '../../api/context/globalContext'


interface ValuesProps{
  name:string;
  profession:string;
  id:string;
  
  
}

export const EditModal = ({name, profession, id}: ValuesProps ) => {
  
 const {handleSubmit, register } = useForm()
 const {refreshLista, setRefreshLista}= useContext(globalContext)
 const {isOpen, onClose, onOpen} = useDisclosure()





 const editUser=(values:ValuesProps)=>{
   console.log(values)
    api.put(`users/${id}`, {
      name:values.name,
      profession:values.profession,
     
    } )
    .then(()=>onClose())
    .then(()=>Swal.fire('Dados Alterados com sucesso!','', 'success'))
    .then(()=>setRefreshLista(!refreshLista))
  }
  return (
    <>
    <Button
            w={'full'}
           
            bg= 'gray.900'
            color={'white'}
            rounded={'md'}
            onClick={onOpen}
           >
            Editar
          </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent bg="gray.800">
          <ModalHeader id="edit"
            color="gray.50"
          >
            Editar Dados de Usuário
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
            onSubmit={handleSubmit(editUser)}
    >
          <ModalBody>
          <Stack spacing="4">
              <NextInput name="name" type="text" placeholder="Nome e Sobrenome" defaultValue={name}  {...register('name')} />
              <NextInput name="profession" type="text" placeholder="Profissão" defaultValue={profession}  {...register('profession')} />
              
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

