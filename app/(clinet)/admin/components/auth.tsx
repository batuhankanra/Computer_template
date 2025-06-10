"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const UserMenu = () => {
     const { data: session, status } = useSession();
 const [isActive,setIsActive]= useState<boolean>(false)
 const menuRef=useRef<HTMLDivElement | null>(null)

 
     useEffect(()=>{
       const handleClick=(event:MouseEvent)=>{
         if(menuRef.current && !menuRef.current.contains(event.target as Node)){
           setIsActive(false)
         }
       }
       document.addEventListener('mousedown',handleClick)
       return ()=>{
         document.removeEventListener('mousedown',handleClick)
       }
     },[])
  return (
     <div>
        {status ==="authenticated" ? (
        <div className='w-full relative' ref={menuRef}>
          <button onClick={()=>setIsActive(!isActive)} className="flex border items-center gap-x-2 text-base font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md hover:border hover:border-fifth "><FaUserCircle/>{session.user?.name} </button>     
          {isActive && (
            <div className="absolute top-10 -left-10 w-[150px] bg-white p-2 rounded-md border  shadow-xl flex flex-col">
              <Link href={'/sa'} className="text-lg hover:text-secondary ">Profil Düzenle</Link>
              <Link href={'/sa'} className="text-lg hover:text-secondary ">Çıkış Yap</Link>
            </div>
          )}
        </div>
        ) :
          <Link href={'/login'}  className="flex items-center gap-x-2 text-base font-semibold text-fourth hover:text-primary transition-colors duration-200 px-2 py-1 rounded-md hover:border hover:border-fifth "><FaUserCircle/> Üye ol / Giriş yap</Link>
        }
      </div>
  )
}

export default UserMenu
