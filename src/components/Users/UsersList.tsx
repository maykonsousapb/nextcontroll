import { SimpleGrid } from '@chakra-ui/layout'
import React, { useContext } from 'react'
import { globalContext } from '../../api/context/globalContext'
import { UserCard } from '../UserCard'

export const UsersList = () => {
  const {users} = useContext(globalContext)

  return (
      <SimpleGrid
          spacing={2}
          minChildWidth="320px"
          column="auto"
          alignItems=""
          mx="auto"
         
        >
         
        {Array.isArray(users) &&users.map(user=>(<UserCard  id={user.id} key={user.id} name={user.name} email={user.email} avatar={user.avatar} profession={user.profession} />))}
      </SimpleGrid>
        
  )
}


