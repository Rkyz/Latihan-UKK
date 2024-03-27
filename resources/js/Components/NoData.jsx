import React from 'react'
import empty from '../../img/empty.png'

const NoData = () => {
  return (
    <div className='bg-transparent flex items-center max-sm:pb-[70px] sm:pb-[50px] justify-center w-full gap-[10px] flex-col col-span-4 h-full'>
        <img src={empty} alt="" srcset="" className='w-[200px] max-sm:w-[150px]'/>
        <div className='flex flex-col text-gray-400 items-center gap-[5px]'>
            <p className='capitalize text-[25px] max-sm:text-[23px] font-bold'>no data available</p>
            <p className='capitalize text-[15px] max-sm:text-[13px]'>try to add data first after that data will show </p>
        </div>
    </div>
  )
}

export default NoData
