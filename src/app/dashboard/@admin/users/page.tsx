
import UsersList from '@/components/admin/users/UsersList'
import { getAllUsers } from '@/server/admin/users'
import React from 'react'

const UsersPage = async () => {

   
  return (
    <div>
        <UsersList />
    </div>
  )
}

export default UsersPage