import { RiMessage2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import Table from './Table'

export default function Announcements() {
  return (
    <div className='w-full flex-col    gap-2 flex p-2 shadow-lg rounded-md border'>
      <div className='flex border-b-2 py-3 w-full justify-between items-center '>
        <div className='flex gap-2 w-full  items-center'>
          <span className='shadow-sm p-2 border rounded'>
            <RiMessage2Fill size={20} className='text-sky-800 shadow-lg'/>
          </span>
          <div className='flex flex-col gap-1 '>
            <span className='text-sm'>Son Gelişmeler</span>
            <span className='text-sm font-semibold'>Duyurular</span>
          </div>
        </div>
        <Link className='text-sm  btn py-1 px-2 flex items-center whitespace-nowrap'>Tümünü Gör</Link>
      </div>
    <Table/>
    </div>
  )
}
