'use client'
import React from 'react'
import Header from './components/header';
import { SessionProvider } from 'next-auth/react';
import Footer from './components/footer';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

const Layout= ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <Provider store={store} >
      <SessionProvider>
          <Header />
          <div className='my-12'>
            {children}
          </div>
          <Footer />

    </SessionProvider>
    </Provider>
  )
}

export default Layout
