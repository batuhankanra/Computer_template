"use client"

import { setModal } from '@/lib/store/features/modal/modal'
import { setUser } from '@/lib/store/features/user/getUser'
import { useAppDispatch, useAppSelector } from '@/lib/store/hook'

const Categories = () => {

  const {data}=useAppSelector(state=>state.getUser)
  
  const dispatch=useAppDispatch()


  const handleUpdateModal=(user:UserProps)=>{
    dispatch(setUser(user))
    dispatch(setModal('user-update'))
  }
  const handleDeleteModal=({id,name}:{id:string,name:string})=>{
    dispatch(setUser({id,name}))
    dispatch(setModal('user-delete'))
    
  }
  return (
    <div className="w-full">
  <div className="w-full border-b p-4 border-fifth flex items-center justify-between">
    <h1 className="text-3xl font-semibold text-gray-800">Kullanıcılar</h1>

  </div>

  <div className="overflow-x-auto rounded-lg shadow border border-gray-200 mt-6">
    <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
      <thead className="bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
        <tr>
          <th className="px-4 py-3 whitespace-nowrap">id</th>
          <th className="px-4 py-3 whitespace-nowrap">Ismi</th>
          <th className="px-4 py-3 whitespace-nowrap">Email</th>
          <th className="px-4 py-3 whitespace-nowrap">Email Doğrulama</th>
          <th className="px-4 py-3 whitespace-nowrap">Rolü</th>
          <th className="px-4 py-3 whitespace-nowrap">Oluşturulan Tarih</th>
          <th className="px-4 py-3 whitespace-nowrap">Güncellendiği Tarih</th>
          <th className="px-4 py-3 whitespace-nowrap">Düzenle</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {data && data.map((user:UserProps) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-900">{user.id}</td>

            <td className="px-4 py-3 font-medium text-gray-900">{user.name}</td>
            <td className="px-4 py-3 font-semibold">{user.email}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{user.emailVerified ? 'true' : 'false'}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{user.role}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{user.createdAt.split('T')[0]}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{user.updatedAt.split('T')[0]}</td>
            <td className=" font-medium text-gray-900  ">
              <button type='button' onClick={()=>handleUpdateModal(user)}  className='mr-2 px-1 py-2 rounded-md border hover:border-primary '>Duzenle</button> 
              <button className='mr-2 px-2 py-2 rounded-md border hover:border-red-600 ' onClick={()=>handleDeleteModal({id:user.id,name:user.name})}>Sil</button>
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
