'use client'

import { FC, FormEvent, useState } from "react";
import FileInput from "../../components/fileInput";
import Input from "../../components/Input";
import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { createProduct, productUpdate } from "@/lib/store/features/product/apiProduct";
import { removeModal } from "@/lib/store/features/modal/modal";
import Image from "next/image";

const ProductUpdate :FC= () => {
  const {update} = useAppSelector(state=>state.getProduct)
  console.log(update)
  const [title,setTitle]=useState<string>(update.title)
  const [description,setDescription]=useState<string>(update.description)
  const [price,setPrice]=useState<number>(update.price)
  
  
const [selectedFile,setSelectedFile]=useState <File[]  >([])
  const dispatch=useAppDispatch()


  const handleSubmit=async (e:FormEvent)=>{
    e.preventDefault();
    const formData=new FormData()
    formData.append('title',title)
    formData.append('description',description)
    formData.append('price',price.toString())
    update.img.forEach((file)=>{
      formData.append("oldImage",file)
    })
    selectedFile.forEach((file,index)=>{
      formData.append("images",file)
    })
    dispatch(productUpdate({formData:formData,id:update.id}))
  }
  return (
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded shadow my-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">Yeni Ürün Ekle</h2>
        <span onClick={()=>dispatch(removeModal())} className="text-black font-semibold hover:bg-secondary px-2 py-1 rounded-full cursor-pointer hover:text-white duration-200 ">X</span>
      </div>

      <Input label="Ürün Başlığını giriniz:" value={title} onChange={setTitle} placeholder="Ürün Başlığını giriniz" type="text" />


      <Input label="Ürün Fiyatını giriniz:" value={price} onChange={setPrice} placeholder="Ürün Fiyatını giriniz" type="number"  />

      <div>
        <label className="block text-sm font-medium text-gray-700">Açıklama</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {update.img.map((img,i) => (
          <Image key={i} src={String(img)} width={40} height={40} alt="product" className="w-10 h-10 object-cover rounded border"  />
        ))}
        </div>

      <FileInput
          label="Resimleri Yükle"
          onChange={(selectedFiles) => setSelectedFile(selectedFiles)}
          multiple
          accept="image/*"
        />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      >
        Güncelle
      </button>
    </form>
      

  )
}

export default ProductUpdate
