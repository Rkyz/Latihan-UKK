import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react'
import { SiValorant } from "react-icons/si";
import { GrFormPrevious } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { PiUsersThreeLight } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdOptions } from "react-icons/io";
import NavLink from '@/Components/NavLink';

const Side = ({children, side, className, auth, form}) => {
    const [option, setOption] = useState(false)
    const handleOption = () => {
        setOption(!option)
    }
    const masuk = usePage();
    const role = masuk.props.auth.user.role
    const url = masuk.url
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'short' });
    const dateOfWeek = now.toLocaleDateString('en-US', { day: 'numeric' }) + ' ' + now.toLocaleDateString('en-US', { month: 'short' });
  return (
    <div className={`sm:h-screen max-sm:flex-col max-sm:gap-[10px] fixed z-[50] max-sm:bottom-0 w-full flex flex-col items-center justify-between max-sm:p-[10px] sm:bg-white max-sm:shadow-xl border-r-[2px] border-gray-200 max-sm:max-w-full max-sm:h-auto ${side ? 'max-w-[250px] max-md:max-w-[85px] max-sm:hidden':'max-w-[85px] max-md:sm:hidden'} ${option && 'max-sm:flex-col-reverse '}`}>
        
        <div className='flex sm:flex-col max-sm:flex-col-reverse w-full max-sm:gap-[10px]'>
            <div className='relative flex items-center p-[20px] border-b-[2px] border-gray-200 max-sm:hidden'>
                <div className='flex gap-[15px] items-center'>
                    <div className='bg-red-500 p-[10px] rounded'>
                    <SiValorant className='text-white text-[25px]'/>
                    </div>
                <div className={`flex flex-col ${side ? 'max-md:hidden':'md:hidden'}`}>
                    <p className='text-[18px] font-bold'>Cashier</p>
                    <p className='text-[10px] text-gray-400 font-bold'>{dayOfWeek}, {dateOfWeek}</p>
                </div>
                </div>
            </div>
            <div className='w-full h-auto max-sm:bg-white overflow-x-scroll hidden-scroll max-sm:rounded-md max-sm:py-[10px] '>
                <nav className='flex sm:flex-col max-sm:gap-[20px] max-sm:justify-center max-sm:items-center'>
                    <div className='flex flex-col gap-[10px] sm:border-b sm:border-gray-300 bg-transparent'>
                        <div className={`flex items-center max-sm:hidden px-[20px] pt-[20px] ${!side ? 'justify-center mb-[10px]':'justify-between max-md:justify-center max-md:mb-[10px]'} `}>
                                <p className='text-gray-500 text-[12px] uppercase font-bold flex gap-[3px]'>menu <span className={`flex flex-col ${side ? 'max-md:hidden':'md:hidden'}`}>dashboard</span></p>
                        <button className={`text-[12px] rotate-90 text-gray-500 hover:bg-black p-[10px] rounded-full hover:bg-opacity-10 ${side ? 'max-md:hidden':'md:hidden'} `}>
                            <SlOptionsVertical/>
                        </button>
                        </div>
                            <ul className='flex sm:flex-col gap-[20px] sm:pb-[20px]'>
                                <li className='relative'>
                                    <Link href="/dashboard" className={`flex items-center gap-[10px] px-[20px] max-sm:p-[15px] max-sm:text-[18px] max-sm:rounded-md ${url === '/dashboard' && 'sm:bg-transparent max-sm:bg-red-500 max-sm:before:hidden  before:bg-red-500 before:h-full before:w-[5px] before:absolute before:left-0'} ${side ? 'max-md:justify-center':'md:justify-center max-sm:justify-center'} `}>
                                        <BsFillGrid1X2Fill className={`${url === '/dashboard' ? 'text-[#D68285] max-sm:text-white':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium max-sm:hidden text-[15px]  ${url === '/dashboard' ? 'text-gray-500':'text-gray-400'} ${side ? 'max-md:hidden':'md:hidden'}`}>dashboard</p>
                                    </Link>
                                </li>
                                <li className='relative'>
                                    <Link href="/menus" className={`flex items-center gap-[10px] px-[20px] max-sm:p-[15px] max-sm:text-[18px] max-sm:rounded-md  ${url === '/menus' | url === '/menus/food' && 'sm:bg-transparent max-sm:bg-red-500 max-sm:before:hidden  before:bg-red-500 before:h-full before:w-[5px] before:absolute before:left-0'} ${side ? 'max-md:justify-center':'md:justify-center max-sm:justify-center'}  `}>
                                        <MdOutlineRestaurantMenu className={`${url === '/menus' ? 'text-[#D68285] max-sm:text-white':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium max-sm:hidden text-gray-400 text-[15px] ${url === '/menus' ? 'text-gray-500':'text-gray-400'} ${side ? 'max-md:hidden':'md:hidden'}`}>menu</p>
                                    </Link>
                                </li>
                                <li className='relative'>
                                    <Link href="/product" className={`flex items-center gap-[10px] px-[20px] max-sm:p-[15px] max-sm:text-[18px] max-sm:rounded-md  ${url === '/product' | url === '/product/create' && 'sm:bg-transparent max-sm:bg-red-500 max-sm:before:hidden  before:bg-red-500 before:h-full before:w-[5px] before:absolute before:left-0'} ${side ? 'max-md:justify-center':'md:justify-center max-sm:justify-center'}  `}>
                                        <BsBoxSeam className={`${url === '/product' | url === '/product/create'  ? 'text-[#D68285] max-sm:text-white':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium max-sm:hidden text-gray-400 text-[15px] ${url === '/product' | url === '/product/create'  ? 'text-gray-500':'text-gray-400'} ${side ? 'max-md:hidden':'md:hidden'}`}>product</p>
                                    </Link>
                                </li>
                                {role === 'admin' && (
                                <li className='relative'>
                                    <Link href="/user" className={`flex items-center gap-[10px] px-[20px] max-sm:p-[15px] max-sm:text-[18px] max-sm:rounded-md  ${url === '/user' | url === '/user/create' && 'sm:bg-transparent max-sm:bg-red-500 max-sm:before:hidden  before:bg-red-500 before:h-full before:w-[5px] before:absolute before:left-0'} ${side ? 'max-md:justify-center':'md:justify-center max-sm:justify-center'}  `}>
                                        <PiUsersThreeLight className={`text-[20px] ${url === '/user' | url === '/user/create'  ? 'text-[#D68285] max-sm:text-white':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium max-sm:hidden text-gray-400 text-[15px] ${url === '/user' | url === '/user/create'  ? 'text-gray-500':'text-gray-400'} ${side ? 'max-md:hidden':'md:hidden'}`}>user</p>
                                    </Link>
                                </li>
                                )}
                        </ul>
                    </div>
                    <div className={`flex flex-col gap-[10px] sm:py-[20px] bg-transparent ${!side && 'sm:mb-[10px]'}`}>
                        <div className={`flex px-[20px] items-center max-sm:hidden  ${!side ? 'justify-center mb-[10px]':'justify-between max-md:justify-center max-md:mb-[10px]'}`}>
                            <p className='text-gray-500 text-[12px] uppercase font-bold'>general</p>
                            <button className={`text-[12px] rotate-90 text-gray-500 hover:bg-black p-[10px] rounded-full hover:bg-opacity-10 ${side ? 'max-md:hidden':'md:hidden'}`}>
                                <SlOptionsVertical/>
                            </button>
                        </div>
                        <ul className='flex sm:flex-col gap-[20px] sm:pb-[20px] '>
                                <li className='relative'>
                                    <Link href="/setting" className={`flex items-center gap-[10px] px-[20px] max-sm:p-[15px] max-sm:text-[18px] max-sm:rounded-md  ${url === '/setting' && 'sm:bg-transparent max-sm:bg-red-500 max-sm:before:hidden  before:bg-red-500 before:h-full before:w-[5px] before:absolute before:left-0'} ${side ? 'max-md:justify-center':'md:justify-center max-sm:justify-center'}  `}>
                                        <IoSettingsOutline className={`text-[20px] ${url === '/setting'  ? 'text-[#D68285] max-sm:text-white':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium max-sm:hidden text-gray-400 text-[15px] ${url === '/setting' ? 'text-gray-500':'text-gray-400'} ${side ? 'max-md:hidden':'md:hidden'}`}>user</p>
                                    </Link>
                                </li>
                                <li className='relative sm:hidden'>
                                    <button onClick={handleOption}  className={`flex items-center gap-[10px] px-[20px] max-sm:p-[15px] max-sm:text-[18px] max-sm:rounded-md  ${option && 'sm:bg-transparent max-sm:bg-red-500 max-sm:before:hidden  before:bg-red-500 before:h-full before:w-[5px] before:absolute before:left-0'} ${side ? 'max-md:justify-center':'md:justify-center max-sm:justify-center'}  `}>
                                        <IoMdOptions className={`text-[20px] ${option  ? ' text-white':'text-gray-400'}`}/>
                                    </button>
                                </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className={` w-full  max-sm:gap-[10px] flex flex-col sm:gap-[10px] bg-transparent sm:p-[20px] ${option ? 'max-sm:bg-white max-sm:p-[10px] max-sm:shadow-md max-sm: rounded-md':'max-sm:hidden'}`}>
            <div className={` grid rounded-md max-sm:hidden max-sm:bg-transparent max-sm:flex max-sm:justify-center max-sm:items-center sm:p-[5px]  ${side ? 'md:bg-[#edecf1] md:grid-cols-2 max-md:grid-cols-1':'grid-cols-1'}`}>
                <button className={`sm:p-[10px] rounded-sm capitalize font-bold flex items-center gap-[10px] max-sm:w-full max-sm:flex max-sm:items-center ${side ? 'text-gray-400 max-md:bg-transparent max-md:text-black max-sm:text-gray-500':'text-black bg-transparent max-sm:text-gray-400'} max-sm:p-[10px] max-sm:justify-start max-sm:flex `}>
                    <IoMoonOutline/>
                    <p className={`${side ? 'max-md:hidden':'sm:hidden'}`}>dark</p>
                </button>
                <button className={`sm:p-[10px] rounded-sm text-gray-500 capitalize font-bold flex items-center gap-[10px] ${side ? 'max-sm:text-gray-500 bg-white max-md:hidden':'text-black bg-blue-500 md:hidden max-sm:hidden'}`}>
                    <IoSunnyOutline/>
                    <p className={`${side ? 'max-md:hidden':'hidden'}`}>white</p>
                </button>
            </div>
        <Link href={route('logout')} method="post" as="button" className='sm:bg-red-500 max-sm:bg-red-500 max-sm:p-[10px] max-sm:justify-start max-sm:flex max-sm:text-white gap-[10px] sm:p-[10px] text-[15px] flex items-center justify-center text-white capitalize rounded-md max-sm:font-medium sm:font-bold'>
            <IoLogOutOutline className='sm:text-[20px] max-sm:text-[18px]'/>
            <p className={`${side ? 'max-md:hidden':'sm:hidden'}`}>logout</p>
        </Link>
        </div>
    </div>
  )
}

export default Side
