"use client"
import { getCategory, setCategory } from '@/lib/store/features/categories/getApiCategories'
import { setModal } from '@/lib/store/features/modal/modal'
import { useAppDispatch, useAppSelector } from '@/lib/store/hook'
import  { useEffect } from 'react'

const Categories = () => {

  const {data}=useAppSelector(state=>state.categories)
  
  const dispatch=useAppDispatch()


  const handleUpdateModal=(category:CategoryProps)=>{
    dispatch(setCategory(category))
    dispatch(setModal('category-update'))
  }
  const handleDeleteModal=({id,name}:{id:string,name:string})=>{
    dispatch(setCategory({id,name}))
    dispatch(setModal('category-delete'))
    
  }
  return (
    <div className="w-full">
  <div className="w-full border-b p-4 border-fifth flex items-center justify-between">
    <h1 className="text-3xl font-semibold text-gray-800">Kategori</h1>
              <button onClick={()=>dispatch(setModal("category-create"))} className='mr-2 px-1 py-2 rounded-md border hover:border-green-500 '>Kategori Ekle</button> 

  </div>

  <div className="overflow-x-auto rounded-lg shadow border border-gray-200 mt-6">
    <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
      <thead className="bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
        <tr>
          <th className="px-4 py-3 whitespace-nowrap">id</th>
          <th className="px-4 py-3 whitespace-nowrap">Ismi</th>
          <th className="px-4 py-3 whitespace-nowrap">Kategori Id</th>
          <th className="px-4 py-3 whitespace-nowrap">Oluşturan kişi</th>
          <th className="px-4 py-3 whitespace-nowrap">Oluşturulan Tarih</th>
          <th className="px-4 py-3 whitespace-nowrap">Güncellendiği Tarih</th>
          <th className="px-4 py-3 whitespace-nowrap">Düzenle</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {data && data.map((category:CategoryProps) => (
          <tr key={category.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-900">{category.id}</td>

            <td className="px-4 py-3 font-medium text-gray-900">{category.name}</td>
            <td className="px-4 py-3 font-semibold">{category.parentId}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{category.user.name } - {category.user.email}</td>

            
            
            
            <td className="px-4 py-3 font-medium text-gray-900">{category.createdAt.split('T')[0]}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{category.updatedAt.split('T')[0]}</td>
            <td className=" font-medium text-gray-900  ">
              <button type='button' onClick={()=>handleUpdateModal(category)}  className='mr-2 px-1 py-2 rounded-md border hover:border-primary '>Duzenle</button> 
              <button className='mr-2 px-2 py-2 rounded-md border hover:border-red-600 ' onClick={()=>handleDeleteModal({id:category.id,name:category.name})}>Sil</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default Categories
