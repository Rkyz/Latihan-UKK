import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { GoPencil } from "react-icons/go";
import { useState } from 'react';
import burger from '../../../img/burger.png'
import { IoFastFood } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import TextInput from '@/Components/TextInput';
import NoData from '@/Components/NoData';
import { BsTrash } from 'react-icons/bs';
import InputLabel from '@/Components/InputLabel';

export default function Dashboard({ auth, categorys }) {
    const [addCategory , setAddCategory] = useState(false);
    const {data, setData} = useForm({Category: ''});
    const [edit, setEdit] = useState(false);
    const [dataCategory, setDataCategory] = useState(null);

    console.log(edit)
    console.log(dataCategory)


    const handleOpenEdit = (item) => {
        if (!edit) {
            setEdit(true);
            setDataCategory(item);
        }
    };
    
    const handleCloseEdit = () => {
        if (edit) {
            setEdit(false);
            setDataCategory(null);
        }
    };
    

    
    const handleAddCategory = () => {
        setAddCategory(!addCategory)
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setData(values => ({
            ...values,
            [name]: value
        }));
    }


    const categoryCreate = (e) => {
        e.preventDefault();
        router.post("/menus/category", data)
    };

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
                    <div className='p-[25px] z-[46] sticky sm:top-[96.5px] border-[2px] border-gray-200 bg-white rounded-sm flex items-start justify-between'>
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
                    <div className='w-full z-[45] h-full pt-[10px] flex gap-[15px]'>
                    <div className='w-full bg-white p-[20px] flex flex-col gap-[15px]'>
                        <div className='flex relative items-center justify-between'>
                        <div className='flex items-center gap-[10px]'>
                            <IoFastFood className='text-[20px]'/>
                        <p className='text-gray-500 font-bold capitalize text-[18px]'>food & drink</p>
                        </div>
                        {auth.user.role === 'admin' && (
                        <button onClick={handleAddCategory} className='bg-red-500 text-white p-[10px] rounded-sm capitalize font-bold'>
                            <AiOutlinePlus/>
                        </button>
                        )}
                        {addCategory && auth.user.role === 'admin' && (
                            <div className='bg-white flex flex-col gap-[10px] top-[50px] before:bg-white border-red-500 border before:border-l before:border-t before:border-red-500 before:w-[10px] before:h-[10px] before:absolute before:right-[13px] before:-top-[6px] before:rotate-45 capitalize absolute right-0 p-[10px] rounded-sm max-sm:w-full sm:w-auto max-w-full'>
                                <p className='font-medium text-[14px]'>add category</p>
                                <form onSubmit={categoryCreate} className='flex flex-col gap-[10px]'>
                                    <TextInput onChange={handleChange} name="Category" type="text" className="border-red-500 placeholder:capitalize placeholder:text-[14px]" placeholder="input your category..." />
                                    <button className='text-white bg-red-500 p-[5px] rounded-sm capitalize font-bold'>
                                        add
                                    </button>
                                </form>
                            </div>
                        )}
                        </div>
                        <div className='w-full h-full flex flex-col gap-[10px]'>
                            {categorys.length > 0 ? (
                                categorys.map((item, index) => {
                                    return (
                                    <button key={index} className='w-full flex flex-col  bg-[#EEEEF1] gap-[10px] p-[10px] rounded-sm'>
                                        <div className='w-full flex items-center justify-between'>
                                            <div className='flex items-center gap-[10px]'>
                                                <img src={burger} alt="" className='w-[60px]'/>
                                                <p className='font-bold capitalize'>{item.Category}</p>
                                            </div>
                                            {auth.user.role === 'admin' && (
                                                <div className='flex items-center pr-[10px] gap-[15px]'>
                                                    <button onClick={handleOpenEdit(item)} className='border-red-500 border-[2px] text-[20px] p-[10px] rounded-md text-red-500 hover:bg-red-500 hover:text-white'>
                                                        <GoPencil/>
                                                    </button>
                                                    <button className='border-transparent border-[2px] text-[20px] p-[10px] rounded-md text-white bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'>
                                                        <BsTrash/>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    {edit && dataCategory && dataCategory.id === item.id && (
                                        <div className='bg-transparent w-full flex items-center gap-[10px]'>
                                            <InputLabel className=' border border-red-500 p-[10px] rounded-md text-white whitespace-nowrap bg-red-500'>Edit Category</InputLabel>
                                            <TextInput type="text" placeholder='input your edit category' name="Category" className="w-full placeholder:capitalize placeholder:font-bold" />
                                        </div>
                                        )}
                                    </button>
                                    )
                                })
                            ):(
                                <NoData className='w-[150px]'/>
                            )}
                        </div>
                    </div>
                    </div>
                </div>
        </MainLayout>
    );
}
