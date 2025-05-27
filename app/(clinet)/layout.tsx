'use client'
import React from 'react'
import Header from './components/header';
import { SessionProvider } from 'next-auth/react';
import Footer from './components/footer';

const Layout= ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <SessionProvider>
          <Header />
          <div className='my-12'>
            {children}
          </div>
          <Footer />

    </SessionProvider>
  )
}

export default Layout
