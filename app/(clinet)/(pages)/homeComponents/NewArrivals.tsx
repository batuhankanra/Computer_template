import Image from 'next/image';
import React from 'react'
import image1 from '@/public/banner/computer2.jpg'

const newProducts: ProductProps[] = [
  {
    id: 1,
    name: "ASUS TUF Gaming F15 144Hz",
    image: image1.src,
    price: 28999,
  },
  {
    id: 2,
    name: "Logitech G435 Wireless Kulaklık",
    image: image1.src,
    price: 1899,
  },
  {
    id: 3,
    name: "HP Victus 15.6” Ryzen 7",
    image: image1.src,
    price: 25999,
  },
  {
    id: 4,
    name: "Acer Nitro V 17.3” RTX 4060",
    image: image1.src,
    price: 32999,
  },
];

const NewArrivals = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Yeni Gelenler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={120}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-semibold text-md mb-2">{product.name}</h3>
              <p className="text-lg font-bold text-green-600 mb-4">
                {product.price.toLocaleString()}₺
              </p>
              <button className="w-full bg-third  py-2 rounded-lg border border-fifth hover:border-primary  transition">
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
