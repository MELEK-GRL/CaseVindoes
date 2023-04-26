import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex w-full p-3 border justify-between md:flex-row items-center md:items-start flex-col'>
      <div className='flex '>
        <h1 className='text-gray-500 text-center md:text-start text-sm  font-semibold'>Copyright © 2023 Vinodes - Yeni Nesil Servis Sağlayıcı. Tüm hakları saklıdır.
</h1>
      </div>
      <div className='flex gap-2 text-sm text-gray-600 font-semibold'>
        <NavLink to='/'>• Anasayfa</NavLink>
        <NavLink to='/'>• Sözleşmeler</NavLink>
        <NavLink to='/'>• İletişim</NavLink>
      </div>
    </div>
  )
}
