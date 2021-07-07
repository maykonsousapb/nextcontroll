import {Flex, HStack, Image, Stack, useBreakpointValue} from "@chakra-ui/react"
import IconsNotification from "./IconsNotification"
import { LinkProfile } from "./LinkProfile"
import { SearchBar } from "./SearchBar"

export const Header = ()=>{
  const isWideScreen = useBreakpointValue({
    base: false,
    lg:true
  })
  return isWideScreen ? (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"

      

    >
      <Image 
      src="images/logo.svg"
      w={["130PX", "180px"]}
      mt={["2", "0"]}
      
      />
      <SearchBar/>
      <IconsNotification/>
      <LinkProfile showProfiledata={isWideScreen} />
      </Flex>
  ): (
    
      <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        mb="4"
        px="6"
        py="20"
        align="center"
        justify="center"
        
  
        
  
      >
        <Stack spacing="8">
        <HStack mt="8" spacing="4">
        <Image 
        src="images/logo.svg"
        w={["130PX", "180px"]}
        
        />
        <IconsNotification/>
        <LinkProfile showProfiledata={isWideScreen} />
        </HStack>
        <SearchBar />
        </Stack>
        
        
       
        </Flex>
    
  )
}