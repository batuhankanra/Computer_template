import React from 'react'
import Header from './components/header';
import Footer from './components/footer';

const UserLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div>
      <Header />
      <div className='my-12'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout
