"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import  { FC } from 'react'
import { IoMenu } from "react-icons/io5";
import { menu } from '@/routes/menu';
import { IoMdHelpCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const MobilHeader:FC<mobilHeaderProps> = ({active,setActive}) => {
    
    const pathName=usePathname()
  return (
   
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-third shadow-lg z-50 transform transition-transform duration-300 flex flex-col  justify-between ${
          active ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='w-full'>
          <div className="p-4 flex justify-between items-center border-b border-fifth">
            <span className="text-2xl font-semibold text-primary">Alvero</span>
            <button onClick={() => setActive(false)}><IoMenu size={24} /></button>
          </div>
          <nav className="flex flex-col gap-2  w-full">
            {menu.length>0 && menu.map(item=>(
              <div className='w-full flex items-start border-b p-3 hover:bg-fifth' key={item.id}>
                <Link href={item.link} onClick={() => setActive(false)} className={`text-xl  font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md  ${pathName===item.link && 'text-primary'}`}>{item.name}</Link>

              </div>
            ))}
          </nav>
        </div>
        <div className='p-5'>
          <div className='w-full' >
              <Link href={'/login'} onClick={() => setActive(false)} className="flex items-center gap-x-2 text-base font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md hover:border hover:border-fifth "><FaUserCircle/> Üye ol / Giriş yap</Link>
              <Link href={'/'} onClick={() => setActive(false)} className="flex items-center gap-x-2 text-base font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md hover:border hover:border-fifth "><IoMdHelpCircle size={19}/> Yardım</Link>

              </div>
              
        </div>
      </div>
  )
}

export default MobilHeader
