"use client"
import React from 'react'
import Sidebar from './components/sidabar';
import NavBar from './components/navBar';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

const AdminLayout = ({children}:Readonly<{children: React.ReactNode;}>) => {
  return (
    <Provider store={store} >
      <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
    </Provider>
  )
}

export default AdminLayout
