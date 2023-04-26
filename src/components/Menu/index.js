import { NavLink } from 'react-router-dom'
import menuData from '../../data/menuData'
import { useState } from 'react'
export default function Menu() {
const[active,setActive]=useState(0)
  return (
   <div className='flex  scrollBar  overflow-y-auto  w-full bg-gradient-to-r  from-sky-800 to-indigo-800 p-6'>
    
   <div className='flex w-full flex-col gap-4'>
   {menuData.map((x,index)=>(
    <NavLink  to={x.path}  key={index} onClick={()=>setActive(index)}  className={active===index?'activesNone':'actives'}>
      <span>{x.icon}</span>
       <span  className='truncate text-sm '>{x.display}</span>
    </NavLink>
   ))}
   
   </div>
   </div>
  )
}
