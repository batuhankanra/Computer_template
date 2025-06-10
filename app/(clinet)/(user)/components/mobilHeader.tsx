"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import  { FC, useEffect, useRef, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { signOut, useSession } from 'next-auth/react';
import { useAppSelector } from '@/lib/store/hook';

const MobilHeader:FC<mobilHeaderProps> = ({active,setActive}) => {
    const { data: session, status } = useSession();
    const [isActive,setIsActive]=useState<boolean>(false)
    const menuRef=useRef<HTMLDivElement | null>(null)
    const {data}=useAppSelector(state=>state.category)
    const categoryStatus=useAppSelector(state=>state.category.status)

  
    
    const pathName=usePathname()
    const closeState=()=>{
      setActive(false)
      setIsActive(false)
    }
    useEffect(()=>{
      const handleClick=(event:MouseEvent)=>{
        if(menuRef.current && !menuRef.current.contains(event.target as Node)){
          setActive(false)
        }
      }
      document.addEventListener('mousedown',handleClick)
      return ()=>{
        document.removeEventListener('mousedown',handleClick)
      }
    },[])
  return (
   
      <div ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-third shadow-lg z-50 transform transition-transform duration-300 flex flex-col  justify-between  ${
          active ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='w-full'>
          <div className="p-4 flex justify-between items-center border-b border-fifth">
            <span className="text-2xl font-semibold text-primary">Alvero</span>
            <button onClick={() => setActive(false)}><IoMenu size={24} /></button>
          </div>
          <nav className="flex flex-col gap-2  w-full">
            {categoryStatus==='Success' && data.map((item,i)=>(
              <div className='w-full flex items-start border-b p-3 hover:bg-fifth' key={i}>
                <Link href={item.name} onClick={() => setActive(false)} className={`text-xl  font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md  ${pathName===item.name && 'text-primary'}`}>{item.name}</Link>

              </div>
            ))}
          </nav>
        </div>
        <div className='p-5 ' ref={menuRef}>
          <div className='w-full' >
              {status ==="authenticated" ? (
                <div className='w-full relative'>
                  <button onClick={() => setIsActive(!isActive)} className="flex items-center gap-x-2 text-base font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md hover:border hover:border-fifth "><FaUserCircle/>{session.user?.name} </button> 
                  {isActive && (
                    <div className='absolute z-99  -top-52 bg-third border border-fifth w-full shadow-md text-lg'>
                    <Link href={'/profile'} className='block px-4 py-2 hover:bg-gray-100 w-full ' onClick={closeState} type='button'>Profile</Link>
                    <Link href={'/admin'} className='block px-4 py-2 hover:bg-gray-100 w-full ' onClick={closeState} type='button'>Admin menu</Link>

                    <Link href={'/setting'} className='block px-4 py-2 hover:bg-gray-100 w-full ' onClick={closeState} type='button'>Ayarlar</Link>
                    <button className='block px-4 py-2 hover:bg-gray-100 w-full text-start ' onClick={()=>signOut()} type='button'>Cikis Yap</button>
                  </div>
                  )}
                </div>
              ) :
            <Link href={'/login'} onClick={() => setActive(false)} className="flex items-center gap-x-2 text-base font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md hover:border hover:border-fifth "><FaUserCircle/> Üye ol / Giriş yap</Link>
                
            }
              <Link href={'/'} onClick={() => setActive(false)} className="flex items-center gap-x-2 text-base font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md hover:border hover:border-fifth "><IoMdHelpCircle size={19}/> Yardım</Link>

              </div>
              
        </div>
      </div>
  )
}

export default MobilHeader
