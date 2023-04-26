import React from 'react'
import Alert from '../../components/UI/Alert'
import UserPage from '../../components/UI/UserPage'
import Tab from '../../components/UI/Tab'
export default function index() {
  return (
    <div className='flex w-full gap-2 flex-col  h-fit '>
      <Alert/>
      <UserPage/>
      <Tab/>
      
    </div>
  )
}
