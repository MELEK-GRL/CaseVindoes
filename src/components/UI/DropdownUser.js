import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import userData from '../../data/userData'
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownUser() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex  w-full items-center    justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:shadow-sm ring-inset ring-gray-300 hover:bg-gray-50">
                    <div className='flex gap-0 sm:gap-1 items-center'>
                        <span className="p-1 shadow rounded-full">
                            <FaUserAlt size={14} className='colorIcons' />
                        </span>
                        <span className='colorIcon hoverBar w-0 invisible sm:w-fit sm:visible'> Hesabım</span>
                        <MdOutlineKeyboardArrowDown className="-mr-1 h-5 w-5 text-gray-500" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            userData.map((x, index) => (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <Link
                                            href="#"
                                            className={classNames(
                                                active ? ' whitespace-nowrap truncate bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            {x.title}
                                        </Link>
                                    )}
                                </Menu.Item>
                            ))
                        }
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Çıkış Yap
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
