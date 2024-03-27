import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from 'react';
import burger from '../../../img/burger.png'

export default function Menu({ auth }) {


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
             <Head title="Dashboard" />
                <div className='w-full h-full flex flex-col gap-[20px]'>
                    <div className='p-[25px] sticky sm:top-[96.5px] border-[2px] border-gray-200 bg-white rounded-sm flex items-start justify-between'>
                        <div className='flex gap-[20px] items-center'>
                            <button className='border-[2px] flex items-center justify-center text-gray-500 w-[50px] rounded-full h-[50px] border-[#EEEEF1]'>
                                <GrPrevious/>
                            </button>
                            <div className='flex flex-col'>
                                <h1 className='capitalize font-bold text-[30px] max-sm:text-[25px]'>hamburger</h1>
                                <p className='text-[14px] capitalize text-[#D86D77] max-sm:text-[13px] font-bold'>discover whatever you need easily</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px] max-sm:hidden text-gray-500'>
                            <button className='capitalize font-bold'>
                                
                            </button>
                            <div className='text-[16px] max-sm:text-[14px]'>
                                <GrFormNext/>
                            </div>
                            <button className='capitalize font-bold max-sm:text-[14px]'>
                                food
                            </button>
                            <div className='text-[16px] max-sm:text-[14px]'>
                                <GrFormNext/>
                            </div>
                            <button className='capitalize font-bold max-sm:text-[14px]'>
                                hamburger
                            </button>
                        </div>
                    </div>
                    <div className='w-full gap-[10px] h-auto bg-transparent  grid grid-cols-6 max-vlg:grid-cols-5 max-lg:grid-cols-4 max-lsm:grid-cols-3 max-sm:grid-cols-2'>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                        <button className='flex flex-col bg-white rounded-md w-full h-auto items-center p-[20px]'>
                            <img src={burger} alt="" className='w-[100px]'/>
                            <div className='flex flex-col gap-[5px]'>
                            <p className='text-[16px] font-bold text-black capitalize'>big mac</p>
                            <p className='text-[#D86D77] text-[14px]'>RP 5.000</p>
                            </div>
                        </button>
                    </div>
                </div>
        </MainLayout>
    );
}
