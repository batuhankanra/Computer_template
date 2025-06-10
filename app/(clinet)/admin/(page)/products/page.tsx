"use client"
import { setModal } from '@/lib/store/features/modal/modal'
import { getProduct, setProduct } from '@/lib/store/features/product/getApiProduct'
import { useAppDispatch, useAppSelector } from '@/lib/store/hook'
import Image from 'next/image'
import Link from 'next/link'
import  { useEffect } from 'react'

const ProductGetItem = () => {

  const {data}=useAppSelector(state=>state.getProduct)
  
  const dispatch=useAppDispatch()
  useEffect(()=>{
    dispatch(getProduct())
  },[])


  const handleUpdateModal=(product:ProductsProps)=>{
    dispatch(setProduct({title:product.title,description:product.description,createdAt:product.createdAt,id:product.id,img:product.img,price:product.price,updatedAt:product.updatedAt,user:{email:product.user.email,id:product.user.id,name:product.user.name},userId:product.userId}))
    dispatch(setModal('product-update'))
  }
  const handleDeleteModal=({title,id}:{title:string,id:string})=>{
    dispatch(setProduct({title,id}))
    dispatch(setModal('product-delete'))
    
  }
  return (
    <div className="w-full">
  <div className="w-full border-b p-4 border-fifth flex items-center justify-between">
    <h1 className="text-3xl font-semibold text-gray-800">Ürünler</h1>
              <button onClick={()=>dispatch(setModal("product-create"))} className='mr-2 px-1 py-2 rounded-md border hover:border-green-500 '>Ürün Ekle</button> 

  </div>

  <div className="overflow-x-auto rounded-lg shadow border border-gray-200 mt-6">
    <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
      <thead className="bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
        <tr>
          <th className="px-4 py-3 whitespace-nowrap">id</th>
          <th className="px-4 py-3 whitespace-nowrap">Başlık</th>
          <th className="px-4 py-3 whitespace-nowrap">Fiyat</th>
          <th className="px-4 py-3 whitespace-nowrap">Açıklama</th>
          <th className="px-4 py-3 whitespace-nowrap">Oluşturan kişi</th>
          <th className="px-4 py-3 whitespace-nowrap">Görseller</th>
          <th className="px-4 py-3 whitespace-nowrap">Oluşturulan Tarih</th>
          <th className="px-4 py-3 whitespace-nowrap">Güncellendiği Tarih</th>
          <th className="px-4 py-3 whitespace-nowrap">Düzenle</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {data && data.map((product:ProductsProps) => (
          <tr key={product.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-900">{product.id}</td>

            <td className="px-4 py-3 font-medium text-gray-900">{product.title}</td>
            <td className="px-4 py-3 text-green-600 font-semibold">₺{product.price}</td>
            <td className="px-4 py-3 max-w-sm text-gray-700 truncate">{product.description}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{product.user.name } - {product.user.email}</td>

            <td className="px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {product.img.map((img,i) => (
                  <Image
                    key={i}
                    src={String(img)}
                    width={40}
                    height={40}
                    alt="product"
                    className="w-10 h-10 object-cover rounded border"
                  />
                ))}
              </div>
            </td>
            
            
            <td className="px-4 py-3 font-medium text-gray-900">{product.createdAt.split('T')[0]}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{product.updatedAt.split('T')[0]}</td>
            <td className=" font-medium text-gray-900  ">
              <button type='button' onClick={()=>handleUpdateModal(product)}  className='mr-2 px-1 py-2 rounded-md border hover:border-primary '>Duzenle</button> 
              <button className='mr-2 px-2 py-2 rounded-md border hover:border-red-600 ' onClick={()=>handleDeleteModal({title:product.title,id:product.id})}>Sil</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default ProductGetItem
