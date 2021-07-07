import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { GlobalProvider } from '../api/context/globalContext'
function MyApp({ Component, pageProps }:AppProps) {
  return(
    <GlobalProvider>
    <ChakraProvider resetCSS theme={theme}>
       <Component {...pageProps} />
    </ChakraProvider>
    </GlobalProvider>
  )
}

export default MyApp
