import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import {useForm} from 'react-hook-form'
import {Flex, Button, Image, Text, Stack, Heading} from '@chakra-ui/react'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import { NextInput  } from '../components/form/Input'
import { api } from '../api/api'
import { globalContext } from '../api/context/globalContext'

interface FormProps {
  name:string;
  email:string;
  profession:string;
  password:string;
  confirmPassword: string;
  aplication:"NextControll"

}

const resgisterSchemaValidation = yup.object().shape({
  name:yup.string().required('Nome e Sobrenome obrigatórios'),
  email: yup.string().email('Digite um email válido').required('E-mail obrigatório'),
  profession: yup.string().required('Profissão obrigatória'),
  password:yup.string().min(6, 'Mínimo de 6 digitos').required('Senha obrigatória'),
  confirmPassword:yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas não conferem')
})

   const  Cadastro=()=> {
     const {handleSubmit, register, formState} = useForm({
       resolver: yupResolver(resgisterSchemaValidation)
     });
     const {errors} = formState
     const {users, setRefreshLista, refreshLista} = useContext(globalContext)

     const registerNewUser = (values:FormProps)=>{
       const userExists = users.filter(item=>item.email ===values.email)
      if(Array.isArray(userExists) &&userExists.length>0){
        Swal.fire('Já existe um usuário com esse e-mail cadastrado', '', 'error')
      }else{
        api.post('users', {
          name:values.name,
          email:values.email,
          profession:values.profession,
          password:values.password,
          aplication:"NextControll"
         }).then(()=>Swal.fire(`Cadastro realizado com sucesso!`, 'Você será redirecionado(a) à pagina de Login', 'success'))
  
         .then(()=>setRefreshLista(!refreshLista))
         .then(()=>Router.push('/'))
      }
     }
  return (
    <>
    <Head><title>Next Controll | Login</title></Head>
    <Flex 
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      display="flex"
      flexDirection="column"
    >
       <Image 
       src="images/logo.svg" 
       width={["300px", "360px"]}
       mb="8"
       /> 
      <Flex 
      as="form"
      w="100%"
      p="8"
      maxWidth={360}
      bg="gray.800"
      align="center"
      justify="center"
      display="flex"
      flexDirection="column"
      borderRadius={8}
      onSubmit={handleSubmit(registerNewUser)}
      
    >
      <Heading fontSize="2xl" mb="4">faça o seu cadastro</Heading>
      <Stack spacing="4">
        <NextInput error={errors.name} type="text" placeholder="Nome e Sobrenome" name="name" {...register('name')} /> 
        <NextInput error={errors.profession} type="text" placeholder="Profissão" name="profession" {...register('profession')} /> 
        <NextInput error={errors.email} type="email" placeholder="E-mail" name="email" {...register('email')}/> 
        <NextInput error={errors.password} type="password" placeholder="Senha"name="password" {...register('password')}/> 
        <NextInput error={errors.confirmPassword} type="password" placeholder="Confirme sua senha"name="confirmPassword" {...register('confirmPassword')}/> 
        <Button colorScheme="yellow"size="lg"type="submit">Entrar</Button>

      </Stack>
 
        
       

        
        <Link href="/">Já tenho Cadastro</Link>
        </Flex>
    </Flex>
    </>
    
  )
}
export default Cadastro