import React from 'react'
import { IoMdClose } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus} from "react-icons/ai";
import burger from '../../img/burger.png'

const CartComponent = ({handleOpenCart, openCart}) => {
  return (
    <div className='fixed top-0 w-full max-sm:max-w-full max-sm:z-[90] sm:max-w-[300px] sm:pt-[96.5px] pr-[10px] max-sm:bg-white sm:bg-transparent h-full  right-0'>
        <div className='w-full h-full relative bg-white flex flex-col items-center shadow-[-20px_20px_30px_rgba(0,_0,_0,_0.2)]'>
      <div className='flex items-center w-full justify-between p-[15px]'>
        <div className='flex flex-col'>
            <p className='font-bold capitalize text-[19px]'>cart order</p>
            <p className='text-[13px] capitalize font-bold text-gray-500'>take out</p>
        </div>
        <button onClick={handleOpenCart} className='bg-transparent flex items-center justify-center text-gray-500 w-[40px] rounded-full border-[2px] border-gray-300 h-[40px]'>
            <IoMdClose/>
        </button>
      </div>
        <div className={`bg-transparent gap-[15px] p-[15px] flex flex-col w-full h-full  overflow-y-scroll ${openCart ? 'max-h-[330px]':'max-h-[400px]'}`}>
            <div className='flex w-full items-center bg-[#EEEEF1] p-[13px] rounded-md justify-between'>
                <div className='flex items-center gap-[10px]'>
                <div>
                    <img src={burger} alt="" className='w-[60px]'/>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <p className='text-[16px] font-bold capitalize'>big mac</p>
                    <p className='text-[#E35652] font-bold text-[12px]'>RP 5.000</p>
                </div>
                </div>
                <div className='flex flex-col justify-between items-end gap-[10px]'>
                    <button className='text-gray-500'>
                        <SlOptions/>
                    </button>
                    <div className='flex gap-[10px]'>
                        <button className='text-[13px] bg-transparent text-gray-500 border border-gray-500 w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlineMinus/>
                        </button>
                        <div>
                            1
                        </div>
                        <button className='text-[13px] bg-red-500 text-white w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlinePlus/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex w-full items-center bg-[#EEEEF1] p-[13px] rounded-md justify-between'>
                <div className='flex items-center gap-[10px]'>
                <div>
                    <img src={burger} alt="" className='w-[60px]'/>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <p className='text-[16px] font-bold capitalize'>big mac</p>
                    <p className='text-[#E35652] font-bold text-[12px]'>RP 5.000</p>
                </div>
                </div>
                <div className='flex flex-col justify-between items-end gap-[10px]'>
                    <button className='text-gray-500'>
                        <SlOptions/>
                    </button>
                    <div className='flex gap-[10px]'>
                        <button className='text-[13px] bg-transparent text-gray-500 border border-gray-500 w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlineMinus/>
                        </button>
                        <div>
                            1
                        </div>
                        <button className='text-[13px] bg-red-500 text-white w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlinePlus/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex w-full items-center bg-[#EEEEF1] p-[13px] rounded-md justify-between'>
                <div className='flex items-center gap-[10px]'>
                <div>
                    <img src={burger} alt="" className='w-[60px]'/>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <p className='text-[16px] font-bold capitalize'>big mac</p>
                    <p className='text-[#E35652] font-bold text-[12px]'>RP 5.000</p>
                </div>
                </div>
                <div className='flex flex-col justify-between items-end gap-[10px]'>
                    <button className='text-gray-500'>
                        <SlOptions/>
                    </button>
                    <div className='flex gap-[10px]'>
                        <button className='text-[13px] bg-transparent text-gray-500 border border-gray-500 w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlineMinus/>
                        </button>
                        <div>
                            1
                        </div>
                        <button className='text-[13px] bg-red-500 text-white w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlinePlus/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex w-full items-center bg-[#EEEEF1] p-[13px] rounded-md justify-between'>
                <div className='flex items-center gap-[10px]'>
                <div>
                    <img src={burger} alt="" className='w-[60px]'/>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <p className='text-[16px] font-bold capitalize'>big mac</p>
                    <p className='text-[#E35652] font-bold text-[12px]'>RP 5.000</p>
                </div>
                </div>
                <div className='flex flex-col justify-between items-end gap-[10px]'>
                    <button className='text-gray-500'>
                        <SlOptions/>
                    </button>
                    <div className='flex gap-[10px]'>
                        <button className='text-[13px] bg-transparent text-gray-500 border border-gray-500 w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlineMinus/>
                        </button>
                        <div>
                            1
                        </div>
                        <button className='text-[13px] bg-red-500 text-white w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlinePlus/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex w-full items-center bg-[#EEEEF1] p-[13px] rounded-md justify-between'>
                <div className='flex items-center gap-[10px]'>
                <div>
                    <img src={burger} alt="" className='w-[60px]'/>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <p className='text-[16px] font-bold capitalize'>big mac</p>
                    <p className='text-[#E35652] font-bold text-[12px]'>RP 5.000</p>
                </div>
                </div>
                <div className='flex flex-col justify-between items-end gap-[10px]'>
                    <button className='text-gray-500'>
                        <SlOptions/>
                    </button>
                    <div className='flex gap-[10px]'>
                        <button className='text-[13px] bg-transparent text-gray-500 border border-gray-500 w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlineMinus/>
                        </button>
                        <div>
                            1
                        </div>
                        <button className='text-[13px] bg-red-500 text-white w-[20px] h-[20px] rounded-sm flex items-center justify-center'>
                            <AiOutlinePlus/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-[15px]  w-full bg-white flex flex-col gap-[15px] absolute bottom-[10px]'>
            <div className='flex items-center justify-between text-[14px] border-b border-black border-dashed capitalize text-gray-500 py-[10px]'>
                <div className='flex flex-col gap-[5px]'>
                    <p>subtotal</p>
                    <p>tax (10%)</p>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <p>RP 5.000</p>
                    <p>RP 5.000</p>
                </div>
            </div>
            <div className='flex items-center justify-between capitalize font-bold text-[14px]'>
                <div>
                    <p>total</p>
                </div>
                <div>
                    <p>RP 5.000</p>
                </div>
            </div>
            <button className='p-[10px] bg-[#F25754] rounded-md w-full h-auto text-white capitalize font-bold text-[15px]'>print bills</button>
        </div>
        </div>
    </div>
  )
}

export default CartComponent
