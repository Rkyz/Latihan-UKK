import Form from '@/Components/Form';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import React from 'react';

const Create = ({ errors }) => {
    const { data, setData, post } = useForm({
        NamaProduk: '',
        Harga: '',
        Stok: '',
        CategoryID: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData(values => ({
            ...values,
            [name]: value
        }));
    }

    const ProductCreate = (e) => {
        e.preventDefault();
        post("/product", data); // Gunakan fungsi post dari useForm untuk mengirim data
    };

    return (
        <div className='w-full h-full flex flex-col gap-[10px]'>
            <div className='bg-white rounded-sm'>
                <form onSubmit={ProductCreate} className='flex flex-col gap-[15px]'>
                    <div className='flex flex-col'>
                        <InputLabel htmlFor="NamaProduk" className='font-bold capitalize'>nama produk</InputLabel>
                        <TextInput type="text" id="NamaProduk" onChange={handleChange} />
                        {/* <p className='text-[12px] text-red-500 capitalize'>{errors.NamaProduk}</p> */}
                    </div>
                    {/* Tambahkan input untuk gambar produk */}
                    <div className='flex flex-col'>
                        <InputLabel htmlFor="Harga" className='font-bold capitalize'>harga</InputLabel>
                        <TextInput type="number" id="Harga" onChange={handleChange} />
                        {/* <p className='text-[12px] text-red-500 capitalize'>{errors.Harga}</p> */}
                    </div>
                    <div className='flex flex-col'>
                        <InputLabel htmlFor="Category" className='font-bold capitalize'>kategori</InputLabel>
                        <select
                            name="CategoryID"
                            className='w-full border-red-500 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                            onChange={handleChange}>
                            <option value="">Select Option</option>
                            <option value="1">Food</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <InputLabel htmlFor="Stok" className='font-bold capitalize'>stok</InputLabel>
                        <TextInput type="number" id="Stok" onChange={handleChange} />
                        {/* <p className='text-[12px] text-red-500 capitalize'>{errors.Stok}</p> */}
                    </div>
                    <button
                        type="submit"
                        className='w-full mt-[10px] bg-red-500 text-white font-bold capitalize p-[10px] rounded-md'>submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
