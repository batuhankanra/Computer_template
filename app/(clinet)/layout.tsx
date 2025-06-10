'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

const Layout= ({children}: Readonly<{children: React.ReactNode;}>) => {
  
  return (
    <Provider store={store} >
      <SessionProvider>
          {children}

    </SessionProvider>
    </Provider>
  )
}

export default Layout
