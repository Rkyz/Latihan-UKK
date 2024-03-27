import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import {Link, router, useForm, usePage} from '@inertiajs/react';
import React from 'react';
import {GrFormPrevious} from 'react-icons/gr';

const Edit = ({products}) => {

    console.log(products.id)
    const {errors} = usePage().props

    const {data, setData} = useForm({name: products.name, price: products.price});

    function handleChange(e) {
        const {id, value} = e.target;
        setData(values => ({
            ...values,
            [id]: value
        }));
    }

    const ProductEdit = (e) => {
        e.preventDefault();
        router.patch(`/product/${products.id}`, data)
    };

    return (
        <div className='w-full h-full flex flex-col gap-[10px]'>
            <div className='bg-white rounded-sm'>
                <div className='w-full h-full flex py-[10px] flex-col gap-[10px]'>
                    <div className='bg-white p-[15px] rounded-sm'>
                        <form onSubmit={ProductEdit} className='flex flex-col gap-[15px]'>
                            <div className='flex flex-col'>
                                <InputLabel htmlFor="" className='font-bold capitalize'>nama produk</InputLabel>
                                <TextInput
                                    type="text"
                                    defaultValue={products.name}
                                    id="name"
                                    onChange={handleChange}/>
                                <p className='text-[12px] text-red-500 capitalize'>{errors.name}</p>
                            </div>
                            {/* <div className='flex flex-col'>
                            <InputLabel htmlFor="" className='font-bold capitalize'>gambar produk</InputLabel>
                            <TextInput type="file" onChange={handleChange} className="border file:bg-gray-300 file:text-gray-500 file:border-none file:p-[10px] file:rounded-l-sm file:mr-[10px] text-[14px] font-bold file:text-[14px]" />
                        </div> */
                            }
                            <div className='flex flex-col'>
                                <InputLabel htmlFor="" className='font-bold capitalize'>harga</InputLabel>
                                <TextInput
                                    type="number"
                                    defaultValue={typeof products.price === 'string'
                                        ? parseFloat(products.price)
                                            .toFixed(2)
                                            .replace(/\.00$/, '')
                                        : products.price}
                                    id="price"
                                    onChange={handleChange}/>
                                <p className='text-[12px] text-red-500 capitalize'>{errors.price}</p>
                            </div>

                            <button
                                className='w-full mt-[10px] bg-red-500 text-white font-bold capitalize p-[10px] rounded-md'>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
