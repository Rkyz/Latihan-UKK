import React, { useState } from 'react'
import Side from './Side'
import Top from './Top'
import CartComponent from '@/Components/CartComponent'
import { Link, usePage } from '@inertiajs/react'
import { AiOutlinePlus } from "react-icons/ai";
import Form from '@/Components/Form'
import CreateUser from '@/Pages/User/Create'
import CreateProduct from '@/Pages/Product/Create'


const MainLayout = ({children}) => {
  const [openCart, setOpenCart] = useState(false)

  const url = usePage().url

  const handleOpenCart = () => {
    setOpenCart(!openCart)
    setForm(false)

  }
  const [side, setSide] = useState(false)

  const handleSide = () => {
    setSide(!side)
  }
  const [form, setForm] = useState(false)

  const handleForm = () => {
    setForm(!form)
    setOpenCart(false)
  }

  console.log(url)

  return (
    <div className={`w-full relative h-screen flex ${openCart | form && 'overflow-hidden hidden-scroll'}`}>
      <Side side={side} children={'asu'}/>
      <div className=' w-full h-full'>
        <div className='flex flex-col z-[49] w-full h-full'>
          <Top handleSide={handleSide} handleOpenCart={handleOpenCart} side={side}/>
          <div className={`w-full ${openCart && 'max-sm:z-[99]'} ${form ? 'sm:z-[51]':'sm:z-[48]'}  h-full pt-[86.5px] relative p-[10px] ${side ? 'slg:md:pl-[260px] max-md:sm:pl-[95px]':'md:pl-[95px]'}`}>
          {children}
          {openCart && (
            <CartComponent handleOpenCart={handleOpenCart}/>
          )}
          {form && (
            <Form handleForm={handleForm} url={url} >
                {url === '/user' && (
                  <CreateUser setForm={setForm}/>
                )}
                {url === '/product' && (
                  <CreateProduct setForm={setForm}/>
                )}
            </Form>
          )}
          </div>
        </div>
      <button onClick={handleForm} className={`fixed shadow-lg right-[30px] max-sm:hidden sm:bottom-[30px] bg-red-500 p-[15px] text-[20px] text-white rounded-md ${form || openCart ? 'z-[45] hidden':'z-[50]'} `}>
      <AiOutlinePlus/>
    </button>
      </div>
    </div>
  )
}

export default MainLayout
