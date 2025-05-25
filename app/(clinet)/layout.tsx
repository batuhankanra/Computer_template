'use client'
import React from 'react'
import Header from './components/header';
import { SessionProvider } from 'next-auth/react';

const Layout= ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <SessionProvider>
          <Header />
          <div className='mt-12'>
            {children}
          </div>
    </SessionProvider>
  )
}

export default Layout
