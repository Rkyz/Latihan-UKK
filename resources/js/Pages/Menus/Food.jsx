import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head, usePage } from '@inertiajs/react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from 'react';
import burger from '../../../img/burger.png'
import { IoFastFood } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

export default function Dashboard({ auth }) {

    return (
        // // <AuthenticatedLayout
        // //     user={auth.user}
        // //     header={<h2 className="font-semibold text-xl text-gray-800 idk:text-gray-200 leading-tight">Dashboard</h2>}
        // // >
        //     <Side>
        // <div className='h-screen w-full'>
        
        //     </Side>
        // </div>
        // // </AuthenticatedLayout>
        <MainLayout
    >
             <Head title="Menus - Food" />
                <div className='w-full h-full flex flex-col gap-[10px]'>
                    <div className='p-[25px] sticky sm:top-[96.5px] border-[2px] border-gray-200 bg-white rounded-sm flex items-start justify-between'>
                        <div className='flex gap-[20px] items-center'>
                            <button className='border-[2px] flex items-center justify-center text-gray-500 w-[50px] rounded-full h-[50px] border-[#EEEEF1]'>
                                <GrPrevious/>
                            </button>
                            <div className='flex flex-col'>
                                <h1 className='capitalize font-bold text-[30px] max-sm:text-[25px]'>Food</h1>
                                <p className='text-[14px] max-sm:text-[14px] capitalize text-[#D86D77] font-bold'>discover to select a food category</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px] text-gray-500'>
                            <button className='capitalize font-bold max-sm:text-[14px]'>
                                menus
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-full pt-[10px] flex gap-[15px]'>
                    <div className='w-full bg-white p-[20px] flex flex-col gap-[15px]'>
                        <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[10px]'>
                            <IoFastFood className='text-[20px]'/>
                        <p className='text-gray-500 font-bold capitalize text-[18px]'>food & drink</p>
                        </div>
                        <button className='bg-red-500 text-white p-[10px] rounded-sm capitalize font-bold'>
                            <AiOutlinePlus/>
                        </button>
                        </div>
                        <div className='w-full h-full flex flex-col gap-[10px]'>
                            <button className='w-full flex items-center  bg-[#EEEEF1] gap-[10px] p-[10px] rounded-sm'>
                                <img src={burger} alt="" className='w-[60px]'/>
                                <p className='font-bold capitalize'>food </p>
                            </button>
                            <button className='w-full flex items-center  bg-[#EEEEF1] gap-[10px] p-[10px] rounded-sm'>
                                <img src={burger} alt="" className='w-[60px]'/>
                                <p className='font-bold capitalize'>drink </p>
                            </button>
                            <button className='w-full flex items-center  bg-[#EEEEF1] gap-[10px] p-[10px] rounded-sm'>
                                <img src={burger} alt="" className='w-[60px]'/>
                                <p className='font-bold capitalize'>items </p>
                            </button>
                            <button className='w-full flex items-center  bg-[#EEEEF1] gap-[10px] p-[10px] rounded-sm'>
                                <img src={burger} alt="" className='w-[60px]'/>
                                <p className='font-bold capitalize'>items </p>
                            </button>
                            <button className='w-full flex items-center  bg-[#EEEEF1] gap-[10px] p-[10px] rounded-sm'>
                                <img src={burger} alt="" className='w-[60px]'/>
                                <p className='font-bold capitalize'>items </p>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
        </MainLayout>
    );
}
