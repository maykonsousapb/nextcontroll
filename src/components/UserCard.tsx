import {
  Heading,
  Avatar,
  Box,
  HStack,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  
  Icon,
  
} from '@chakra-ui/react';
import { useContext } from 'react';
import {FaEnvelope} from 'react-icons/fa'
import { globalContext } from '../api/context/globalContext';
import {api} from '../api/api'
import swal from 'sweetalert2'
import { EditModal } from './Users/EditModal';


export  const UserCard = ({name, email, avatar, profession, id}) => {
  const {refreshLista, setRefreshLista, setUserForEdit, users} =useContext(globalContext)
  
    
  const deleteUser= (id:string)=>{
    swal.fire({
      title: `Deseja realmente excluir este usuário ?`,
      showDenyButton: true,
      confirmButtonText: `Confirmar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        api.delete(`users/${id}`).then(()=>swal.fire('Usuário excluído com sucesso!', '', 'success').then(()=>setRefreshLista(!refreshLista)))
        
      } else if (result.isDenied) {
        swal.fire('Operação cancelada!', '', 'info')
      }
    })
  }
  return (
    <Flex py={6} w="270px"  mx={["auto","10"]}
   
    >
      <Box
        maxW={'270px'}
                w={'full'}
        bg='white'
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'dark-lg',
        }}
        >
        <Image
          h={'120px'}
          w={'full'}
          src="images/cardbackground.png"
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={ !!avatar && avatar }
            alt={'Author'}
            name={name}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color="gray.900">
             {!!name && name}
            </Heading>
            <Text color={'gray.500'}> {!!profession && profession} </Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
           
              <Icon as={FaEnvelope} color="gray.700" fontSize="20" border="1" borderColor="yellow.500"/>
              <Text fontSize={'sm'} color={'gray.500'}>
               {!!email && email}
              </Text>
          
           
          </Stack>

          <HStack spacing="4" mt="8">
          <EditModal name={name} profession={profession} id={id} />
          <Button
            w={'full'}
            bg='red.500'
            color={'white'}
            rounded={'md'}
            onClick={()=>deleteUser(id)}
           >
            Excluir
          </Button>
          </HStack>
        </Box>
      </Box>
     
     
    </Flex>
  );
}