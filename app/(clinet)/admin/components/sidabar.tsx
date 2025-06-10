"use client"
import Link from 'next/link'

const Sidebar = () => {
  return (
     <aside className="w-64 bg-third border-r shadow-sm hidden md:block">
      <div className="p-4 font-bold text-xl border-b ">Admin Panel</div>
      <nav className="p-4 space-y-2 ">
        <Link href="/admin/" className=" block font-semibold border border-third hover:border-secondary py-2 rounded-lg px-1 transition-all duration-200 ">AnaSayfa</Link>
        <Link href="/admin/products" className=" block font-semibold border border-third hover:border-secondary py-2 rounded-lg px-1 transition-all duration-200">Ürünler</Link>
        <Link href="/admin/categories" className=" block font-semibold border border-third hover:border-secondary py-2 rounded-lg px-1 transition-all duration-200">Kategoriler</Link>
        <Link href="/admin/orders" className=" block font-semibold border border-third hover:border-secondary py-2 rounded-lg px-1 transition-all duration-200">Siparişler</Link>
        <Link href="/admin/settings" className=" block font-semibold border border-third hover:border-secondary py-2 rounded-lg px-1 transition-all duration-200">Ayarlar</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
