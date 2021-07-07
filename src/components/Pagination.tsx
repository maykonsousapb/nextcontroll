import {Box, Flex, HStack, Button} from "@chakra-ui/react"

import React from 'react'

export const Pagination = () => {
  return (
    <HStack spacing="2" justify="space-between">
        <Box>
          <strong>0</strong> - <strong> 10</strong> de <strong>100</strong>
        </Box>
     
        <HStack>
          <Button
              size="sm"
              fontSize="sm"
              width="4"
              colorScheme="yellow"
              disabled
              _disabled={{
                bg:"yellow.500",
                cursor:"default"
              }}
            >
              1
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              width="4"
              colorScheme="yellow"
            >
              2
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              width="4"
              colorScheme="yellow"
            >
              3
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              width="4"
              colorScheme="yellow"
            >
              4
            </Button>
        </HStack>

    </HStack>
  )
}


