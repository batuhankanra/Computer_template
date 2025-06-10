'use client'

import axios, { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";


type responseProps={
  msg:string | undefined,
  type:string
}
const Register:React.FC = () => {
  const [email,setEmail]=React.useState<string>('')
  const [password,setPassword]=React.useState<string>('')
  const [response,setResponse]=React.useState<responseProps>({msg:'',type:''})
  const [name,setName]=React.useState<string>('')
  const [active,setActive]=React.useState<boolean>(false)
  const router=useRouter()

  const handleSubmit=async (e:any)=>{
    e.preventDefault()
    try{
      const data={name,email,password}
      await axios.post('/api/auth/register',data).then(()=>{
        signIn('credentials',{
          name:data.name,
          email:data.email,
          password:data.password,
          redirect:false
        }).then((callback)=>{
          if(callback?.ok){
            router.push('/')
            router.refresh()
            setResponse({msg:'Kayit olundu',type:'Success'})
          }
          if(callback?.error){
            console.log(callback.error)
          }
        })
      })
      
    }catch (error){
      const err = error as AxiosError<{ msg: string }>;
    setResponse({ msg: err.response?.data?.msg, type: "error" });
    }
  }


  return (
    <div className='flex items-center justify-center min-h-screen w-full '>
     
    <form  onSubmit={handleSubmit} className='md:w-[800px] flex flex-col items-center gap-5  py-7   m-2   '>
     <div className=' text-2xl font-semibold'>Kayit ol</div>

    
      {response.type==='error' && (<p className='flex flex-nowrap items-center justify-center bg-red-500 py-3 md:w-1/2 w-full rounded-md text-lg capitalize'>{response.msg}</p>)}
      {response.type==='success' && (<p className='flex items-center justify-center bg-green-700 py-3 md:w-1/2 w-full rounded-md text-lg capitalize'>{response.msg}</p>)}
      <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='E-mail' className='bg-third px-2 py-3 outline-none rounded-lg md:w-1/2 w-full text-lg border border-fifth focus:border-zinc-400 ' />
      <input value={name} onChange={e=>setName(e.target.value )} type="text" placeholder='Isim'  className='bg-third px-2 py-3 outline-none rounded-lg md:w-1/2 w-full text-lg border border-fifth focus:border-zinc-400 ' />
      <div className='md:w-1/2 w-full flex items-center justify-center relative z-2'>
        <input value={password} onChange={e=>setPassword(e.target.value )} type={active ? 'text': 'password'} placeholder='Parola'  className='bg-third px-2 py-3 outline-none rounded-lg w-full text-lg border border-fifth focus:border-zinc-400 ' />
        <button type='button' className='absolute  right-0  mr-4' onClick={()=>setActive(!active)}>{active ? <IoEyeSharp /> : <FaEyeSlash />}</button>
      </div>    
    
      <button type='submit' className='md:w-1/2 w-full border bg-third border-fifth hover:border-zinc-500 transition-all duration-200 cursor-pointer py-2 rounded-md'>kayit ol</button>
      <p>Giris yapmak icin <Link href={'/login'} className='text-indigo-600'>Tiklaniyiz</Link> </p>
        
    </form>
  </div>
  )
}

export default Register
