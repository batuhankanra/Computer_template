import React, { FormEvent, useState } from 'react'
import Input from '../components/Input'
import { useAppDispatch, useAppSelector } from '@/lib/store/hook'
import { removeModal } from '@/lib/store/features/modal/modal'
import { userUpdate } from '@/lib/store/features/user/apiUser'
import clsx from 'clsx'

const UpdateUser = () => {
    
    const dispatch=useAppDispatch()
    const {update}=useAppSelector(state=>state.getUser)



    const [name,setName]=useState<string>(update.name)
    const [email,setEmail]=useState<string>(update.email)
    const [role,setRole]=useState<string>(update.role)



    const handleSubmit=async (e:FormEvent)=>{
        e.preventDefault()
        dispatch(userUpdate({id:update.id,email,name,role}))
      }
  return (
     <div className=''>
      <div className='w-full border-b p-2 border-fifth'>
       <div className="flex items-center justify-between">
         <h1 className='text-3xl'>Kullanıcı Güncelle</h1>
        <span onClick={()=>dispatch(removeModal())} className="text-black font-semibold hover:bg-secondary px-2 py-1 rounded-full cursor-pointer hover:text-white duration-200 ">X</span>
         
       </div>
       
      </div>
      <form onSubmit={handleSubmit} className='py-10 flex flex-col items-center justify-center gap-y-4 bg-third w-1/2 mx-auto'>
        <Input  onChange={setName} value={name} label="İsmini Giriniz :" type="text" placeholder=" İsmini Giriniz" />
        <Input  onChange={setEmail} value={email} label="Email :" type="text" placeholder="Email" />
        <div className='flex items-center justify-between w-full px-10'>
            <button type='button' onClick={()=>setRole('ADMIN')} className={clsx("border border-zinc-400 p-2 rounded-md hover:bg-secondary hover:text-white duration-200 text-black",
                {"bg-red-300" : role==='ADMIN'}
            )}>ADMIN</button>
            <button type='button' onClick={()=>setRole('USER')} className={clsx("border border-zinc-400 p-2 rounded-md hover:bg-secondary hover:text-white duration-200 text-black",
                {"bg-sky-300" : role==='USER'}
            )}>USER</button>

        </div>
        <button type="submit" className="w-full cursor-pointer text-lg border-secondary border px-1 py-2 rounded-md  md:w-1/3 hover:bg-primary/40 hover:shadow-lg transition-all duration-200">Gonder</button>
      </form>
    </div>
  )
}

export default UpdateUser
