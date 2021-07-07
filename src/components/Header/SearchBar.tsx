import { Input, Flex, Icon } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { globalContext } from '../../api/context/globalContext'
import { debounce } from '../../common/utils/functions/debounce'



export const SearchBar = () => {
  const {seachText, setSeachText} = useContext(globalContext)
  return (
    <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={480}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
     >
           <Input
            color="gray.50"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar Usuário"
            _placeholder={{color:"gray.400"}}
            value={seachText}
            onChange={e=>debounce(setSeachText(e.target.value), 1000)}

           />
           <Icon 
           as={FaSearch}
          fontSize="20"
           />
      </Flex>
      
  )
}


