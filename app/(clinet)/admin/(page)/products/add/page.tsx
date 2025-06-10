'use client'

import { FormEvent, useState } from "react";
import FileInput from "../../components/fileInput";
import Input from "../../components/Input";
import { useAppDispatch } from "@/lib/store/hook";
import { createProduct } from "@/lib/store/features/product/apiProduct";
import { removeModal } from "@/lib/store/features/modal/modal";

const productCreate = () => {
  const [title,setTitle]=useState<string>("")
  const [description,setDescription]=useState<string>("")
  const [price,setPrice]=useState<string>("")
  
  
  const [selectedFile,setSelectedFile]=useState <File[]  >([])
  const dispatch=useAppDispatch()


  const handleSubmit=async (e:FormEvent)=>{
    e.preventDefault();
    const formData=new FormData()
    formData.append('title',title)
    formData.append('description',description)
    formData.append('price',price.toString())
    selectedFile.forEach((file,index)=>{
      formData.append("images",file)
    })
    dispatch(createProduct(formData))
  }
  return (
    <div className=''>
      <div className='w-full border-b p-2 border-fifth'>
       <div className="flex items-center justify-between">
         <h1 className='text-3xl'>Ürünler</h1>
        <span onClick={()=>dispatch(removeModal())} className="text-black font-semibold hover:bg-secondary px-2 py-1 rounded-full cursor-pointer hover:text-white duration-200 ">X</span>
         
       </div>
       
      </div>
      <form onSubmit={handleSubmit} className='py-10 flex flex-col items-center justify-center gap-y-4 bg-third w-full'>
        <Input  onChange={setTitle} value={title} label="Ürünün İsmini Giriniz :" type="text" placeholder="Ürün İsmi" />
        <Input  onChange={setDescription} value={description} label="Açıklamasını Yazınız :" type="text" placeholder="Ürün Açıklamasını " />
        <Input  onChange={setPrice} value={price} label="Fiyatını yazınız :" type="text" placeholder="Ürün fiyat" />

       
        <FileInput
          label="Resimleri Yükle"
          onChange={(selectedFiles) => setSelectedFile(selectedFiles)}
          multiple
          accept="image/*"
        />

        {selectedFile.length > 0 && (
          <p className="text-gray-700">Toplam {selectedFile.length} dosya seçildi.</p>
        )}
         
          <button type="submit" className="cursor-pointer text-lg border-secondary border px-1 py-2 rounded-md w-1/2 md:w-1/3 hover:bg-primary/40 hover:shadow-lg transition-all duration-200">Gonder</button>
      </form>
    </div>
  )
}

export default productCreate
