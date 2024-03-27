import MainLayout from '@/Layouts/MainLayout'
import {HiOutlinePencilAlt} from "react-icons/hi";
import {FaRegTrashCan} from "react-icons/fa6";
import {Link, router, usePage} from '@inertiajs/react';
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormPrevious } from 'react-icons/gr';

const Main = ({side, products}) => {
    // const { flash } = usePage().props;

    // useEffect(() => {
    //     if (flash && flash.message) {
    //       Swal.fire({
    //         icon: 'success',
    //         title: 'Success',
    //         text: flash.message,
    //       });
    //     } 
    // }, [flash]);

    // const handleDelete = (id) => {
    //     Swal.fire({
    //       title: 'Yakin Nih Mau Hapus?',
    //       text: "Jan Nyesel Yah!",
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonColor: '#3085d6',
    //       cancelButtonColor: '#d33',
    //       confirmButtonText: 'Ya, hapus saja!'
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         router.delete(`/product/${id}`);
    //       }
    //     });
    //   };

    return (
        <MainLayout>
            <div className='w-full h-full py-[10px] flex flex-col gap-[10px]'>
                <div className='flex items-center gap-[10px]'>
                    <div className=' h-full p-[15px] flex bg-red-500 text-white items-center rounded-sm'>
                        <GrFormPrevious className='text-[20px] '/>
                    </div>
                <div
                    className='bg-white w-full sticky sm:top-[96.5px] border border-gray-200 flex items-center justify-between h-auto p-[15px] rounded-sm'>
                    <p className='capitalize font-bold'>product management</p>
                    <Link href='/product/create' className='text-red-500 sm:hidden'>
                        <AiOutlinePlus/>
                    </Link>
                </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div
                        className={`bg-transparent grid  gap-[10px] ${side
                            ? 'vlg:grid-cols-3 max-vlg:grid-cols-2 max-md:grid-cols-2 max-lsm:grid-cols-1 '
                            : 'vlg:grid-cols-3 max-vlg:grid-cols-2 max-md:grid-cols-2 max-lsm:grid-cols-1'}`}>
                        {/* {products.map((product, index) => {
                            return ( */}
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                        <div className='w-[50px] text-white bg-black flex items-center justify-center font-bold rounded-md h-[50px]'>
                                            {/* {product.id} */} 1
                                        </div>
                                        <div>
                                            <p className='text-[17px] capitalize font-bold'>
                                                 {/* {product.name.length > 20 ? `${product.name.slice(0, 20)}...` : product.name} */}
                                                 asu
                                            </p>
                                            <p className='text-[14px] capitalize font-bold text-gray-400'>{'1'} pcs</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <Link className='text-[20px] border border-red-500 p-[8px] rounded-md text-red-500 hover:bg-red-500 hover:text-white'>
                                            <HiOutlinePencilAlt/>
                                        </Link>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    {/* <p className='whitespace-nowrap font-bold max-sm:text-[14px]'>RP {product.price.toFixed(2).replace(/\.00$/, '')}/pcs</p> */}
                                    <p className='whitespace-nowrap font-bold max-sm:text-[14px]'>
                                        {/* RP {typeof product.price === 'string' ? parseFloat(product.price).toFixed(2).replace(/\.00$/, '') : product.price}/pcs */}
                                        RP 5.000 / pcs
                                    </p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                        <button
                                            className='w-full border border-red-500 text-red-500 rounded-md max-sm:p-[8px] sm:text-[15px] max-sm:text-[14px] p-[8px]  hover:text-white hover:bg-red-500 capitalize font-bold'>
                                            restok product
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* )
                        })} */}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Main
