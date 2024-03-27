import { usePage } from '@inertiajs/react'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

const Form = ({children, handleForm, url}) => {

    return (
        <div>
            <div className='h-full bg-transparent sm:max-w-[300px] w-full sm:pt-[96.5px] sm:px-[10px] sm:pb-[10px] z-[99] fixed top-0 right-0'>
                <div className='w-full h-full bg-white shadow-[-20px_20px_30px_rgba(0,_0,_0,_0.2)]'>
                <div className='flex items-center w-full justify-between p-[15px]'>
                <div className='flex flex-col'>
                <div className='font-bold capitalize text-[19px]'>
                    {url === '/user' && (<p>create user</p>)}
                    {url === '/product' && (<p>create user</p>)}
                </div>
                    
                    <p className='text-[13px] capitalize font-bold text-gray-500'>Form edit</p>
                </div>
                <button onClick={handleForm} className='bg-transparent flex items-center justify-center text-gray-500 w-[40px] rounded-full border-[2px] border-gray-300 h-[40px]'>
                    <IoMdClose/>
                </button>
            </div>
            <div className='w-full h-auto p-[15px]'>
                {children}
            </div>
                </div>
            </div>
            <div className='absolute top-0 left-0 z-[50] bg-opacity-0 w-full h-full bg-black'/>
        </div>
    )
}

export default Form
