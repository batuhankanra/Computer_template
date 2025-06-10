import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-8">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-fourth mb-6">Üzgünüz, aradığınız sayfa bulunamadı.</p>
      <Link
        href="/admin"
        className="px-4 py-2 bg-third text-fourth border border-third hover:border-secondary rounded hover:bg-opacity-90 transition"
      >
        Ana Sayfa'ya Dön
      </Link>
    </div>
  )
}

export default Page
