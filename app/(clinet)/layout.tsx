import React from 'react'
import Header from './components/header';

const Layout= ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div>
        <Header />
        <div className='mt-8'>
          {children}
        </div>
    </div>
  )
}

export default Layout
