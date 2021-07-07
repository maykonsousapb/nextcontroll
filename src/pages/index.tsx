import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import {Flex, Button, Image, Stack} from '@chakra-ui/react';
import Swal from 'sweetalert2';
import {useForm} from 'react-hook-form';
import { useContext } from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

import { NextInput  } from '../components/form/Input'
import { globalContext } from '../api/context/globalContext'
import { isEmpty } from '../common/utils/functions/isEmpty'

interface FormProps{
  email:string;
  password:string
}

const loginSchemaValidation = yup.object().shape({
  email: yup.string().email('Formato de e-mail inválido').required('E-mail obrigatório'),
  password: yup.string().min(6, 'Mínimo de 6 dígitos').required('Senha obrigatória')
})

export default function SignIn() {
  const {handleSubmit, register, formState} = useForm({
    resolver: yupResolver(loginSchemaValidation)
  })
  const {errors} = formState;
  const {users, setLogeduser } = useContext(globalContext)
 

  const userLogIn = (values: FormProps)=>{
   
    const userIsExists = users.filter(item=>item.email ===values.email)[0]
    if(!isEmpty(userIsExists)){
      const passwordMatched = values.password ===userIsExists.password
      if(passwordMatched){
        setLogeduser(userIsExists)
        Swal.fire(`Bem vindo(a) ${userIsExists.name}!`, 'Você será direcionado para o painel de controle', 'success' ).then(()=>Router.push('/dashboard'))
      }else{
        Swal.fire('Dados incorretos', 'Verifique suas credenciais', 'error')
      }
    }else{
      Swal.fire('Usuário não localizado!', '', 'error')
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
          onSubmit={handleSubmit(userLogIn)}
        
      >
        <Stack spacing={4}>
          <NextInput 
              type="text" 
              placeholder="E-mail" 
              name="email"
              error={errors.email}
              {...register("email")}
              /> 
            <NextInput 
              type="password" 
              placeholder="Senha"
              name="password"
              error={errors.password}
              {...register("password")}
              
              /> 
            <Button colorScheme="yellow"size="lg"type="submit">Entrar</Button>
            <Link href='/cadastro'>Registrar</Link>
          </Stack>
      </Flex>
    </Flex>
    </>
    
  )
}
