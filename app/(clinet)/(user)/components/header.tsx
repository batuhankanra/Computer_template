"use client"
import  { FC, useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import MobilHeader from './mobilHeader';
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import { useAppDispatch } from '@/lib/store/hook';
import { getFullItem ,getAdd} from '@/lib/store/features/category';


const Header:FC = () => {
  const [active,setActive]=useState<boolean>(false)
  const dispatch=useAppDispatch()
  useEffect(()=>{
    const response=async ()=>{
    dispatch(getFullItem())
  }
  response()

  },[])

  return (
    <header className=' fixed top-0 py-3 bg-third w-full  border-b border-fifth z-20' >
      <div className='flex flex-col md:flex-row  justify-between mx-5 gap-y-2'>
        <div className='flex items-center gap-x-1 justify-between md:justify-normal'>
          <button className=' md:hidden' onClick={()=>setActive(!active)}>
            <IoMenu size={28} />
          </button>
          <h1 className='text-2xl font-semibold text-fourth'>Alvero</h1>
          <div className=' md:hidden flex items-center justify-center gap-x-4'>
            <div className='md:hidden flex items-center text-xl relative'>
              <FaShoppingBasket />
              <span className='absolute -right-3 -top-4 bg-red-600 px-2 rounded-full text-white text-base' >1</span>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center  justify-center relative'>
          <input type="text" placeholder='Aradığınız ürün  ' className='p-1 rounded-md outline-none text-black w-full  md:w-1/2  border border-sixth focus:border-zinc-300 transition-all duration-100 ' />
          <button className='absolute right-1 hover:bg-secondary/25 p-2 rounded-full '>
            <FaSearch />
          </button>
        </div>
        <div className='hidden md:block'>
          <FaShoppingBasket />
        </div>
        
      </div>
      
     
      <MobilHeader active={active} setActive={setActive} />
      
      
    </header>
  )
}

export default Header
