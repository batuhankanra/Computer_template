"use client"
import  { FC, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import MobilHeader from './mobilHeader';

const Header:FC = () => {
  const [active,setActive]=useState<boolean>(false)


  return (
    <header className=' fixed top-0 py-2 bg-third w-full  border-b border-fifth z-20' >
      <div className='flex items-center justify-between mx-5'>
        <div className='flex items-center gap-x-1'>
          <button className='md:hidden' onClick={()=>setActive(!active)}>
            <IoMenu size={28} />
          </button>
          <h1 className='text-2xl font-semibold text-fourth'>Alvero</h1>
        </div>
      </div>
      <MobilHeader active={active} setActive={setActive} />
      
      
    </header>
  )
}

export default Header
