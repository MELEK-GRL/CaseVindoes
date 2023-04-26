import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import { Link } from 'react-router-dom'
import notificationData from '../../data/notificationData'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>

                <Menu.Button className="inline-flex w-full items-center  justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:shadow-sm ring-inset ring-gray-300 hover:bg-gray-50">
                    <div className='flex gap-1 items-center'>
                       
                        <div className='flex relative flex-col'>
                           
                            <span className="p-1 relative shadow rounded-full"> 
                            <IoIosNotifications size={18} className='colorIcons' />
                            <span className='text-[9px] h-[11px]   justify-center  items-center -top-2 right-0 left-4 p-2 flex absolute bg-sky-800 shadow-md rounded-full text-white '>5</span>
                            </span>
                        </div>
                        <span className='colorIcon hoverBar'>Bildirimler</span>
                        <MdOutlineKeyboardArrowDown className="-mr-1  h-5 w-5 text-gray-500" aria-hidden="true" />
                    </div>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            notificationData.map((x, index) => (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <Link
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            <div className='flex gap-2 items-center'>
                                                <span className='p-2 shadow-md border rounded-md'><IoIosNotifications size={18} className='colorIcon' /></span>
                                                <div className='gap-[1px] flex flex-col w-full'>
                                                    <h3 className='text-sm font-semibold colorIcon truncate whitespace-nowrap'>{x.title}</h3>
                                                    <span className='colorIcon text-[13px] truncate whitespace-nowrap'>{x.write}</span>
                                                </div>

                                            </div>
                                        </Link>
                                    )}
                                </Menu.Item>
                            ))
                        }


                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
