"use client"
import React from 'react'
import Sidebar from './components/sidabar';
import NavBar from './components/navBar';

import { useAppSelector } from '@/lib/store/hook';
import Modal from '../modal/modal';

const AdminLayout = ({children}:Readonly<{children: React.ReactNode;}>) => {
  const {modal}=useAppSelector(state=>state.modal)
  return (
      <div className="flex min-h-screen bg-gray-100">
      {modal && <Modal />}
        
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout
