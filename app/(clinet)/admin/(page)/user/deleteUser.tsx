

import { removeModal } from '@/lib/store/features/modal/modal'
import { userDelete } from '@/lib/store/features/user/apiUser'
import { useAppDispatch, useAppSelector } from '@/lib/store/hook'
import React from 'react'

const DeleteUser = () => {
  const {id,name,email} =useAppSelector(state=>state.getUser.update)
  const dispatch=useAppDispatch()
  return (
    <div className=" rounded-xl  w-full  p-6">
        <h2 className="text-lg font-semibold text-gray-800">{name} - {email}</h2>
        <p className="text-sm text-gray-600 mt-2">
          Bu işlem geri alınamaz. Lütfen dikkatli olun.
        </p>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            className="px-4 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300 text-gray-700"
            onClick={()=>dispatch(removeModal())}
          >
            Vazgeç
          </button>
          <button
            className="px-4 py-2 rounded-md text-sm bg-red-600 hover:bg-red-700 text-white"
            onClick={()=>dispatch(userDelete({id}))}
          >
            Sil
          </button>
        </div>
      </div>
  )
}

export default DeleteUser
