import { updateCategories } from '@/lib/store/features/categories/apiCategories'
import { removeModal } from '@/lib/store/features/modal/modal'
import { useAppDispatch, useAppSelector } from '@/lib/store/hook'
import { FormEvent, useState } from 'react'
import Input from '../components/Input'

const Updatecategories = () => {
    const {updates}=useAppSelector(state=>state.categories)
    console.log(updates)
  const [name,setName]=useState<string>(updates.name)
  const [parentId,setParentId]=useState<string>(updates.parentId)
  const dispatch=useAppDispatch()
  

  const handleSubmit=async (e:FormEvent)=>{
    e.preventDefault()
    const data={name,parentId}
    dispatch(updateCategories({data,id:updates.id}))
  }
  return (
     <div className=''>
      <div className='w-full border-b p-2 border-fifth'>
       <div className="flex items-center justify-between">
         <h1 className='text-3xl'>Ürünler</h1>
        <span onClick={()=>dispatch(removeModal())} className="text-black font-semibold hover:bg-secondary px-2 py-1 rounded-full cursor-pointer hover:text-white duration-200 ">X</span>
         
       </div>
       
      </div>
      <form onSubmit={handleSubmit} className='py-10 flex flex-col items-center justify-center gap-y-4 bg-third w-1/2 mx-auto'>
        <Input  onChange={setName} value={name} label="Kategori İsmini Giriniz :" type="text" placeholder="Kategori İsmini Giriniz" />
        <Input  onChange={setParentId} value={parentId} label="parentId :" type="text" placeholder="parentId" />
        <button type="submit" className="w-full cursor-pointer text-lg border-secondary border px-1 py-2 rounded-md  md:w-1/3 hover:bg-primary/40 hover:shadow-lg transition-all duration-200">Gonder</button>
      </form>
    </div>
  )
}

export default Updatecategories
