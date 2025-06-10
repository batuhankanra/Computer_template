import Image from 'next/image'
import React, { FC } from 'react'

const Card = ({product}:{product:ProductProps}) => {
    let calculation
    if(product.discount){
      calculation=product.price-(product.price*product.discount/100)
    }
    
  return (
    <div className='bg-white w-[250px] h-[310px] rounded-xl shadow-md hover:shadow-xl  transition-all duration-300 relative'>
      <Image src={product.image} alt={product.name} width={250} height={50} className='object-cover rounded-t-xl' />
      <div className='py-3 flex flex-col justify-between h-[140px] p-1  '>
        <h1 className=' font-semibold'>{product.name}</h1>
        <div className='flex items-center gap-x-2'>
            <p className='line-through'>{product.price}₺</p>
            <p>{String(calculation).split('.')[0]}₺</p>
        </div>
            <button className='bg-third w-full py-2  border hover:border-secondary transition-all duration-200'>Sepete Ekle</button>

      </div>
      
        {product.discount && (
          <div className="absolute -top-2 -right-2 bg-yellow-400  text-xs font-bold px-3 py-1 rounded-full shadow-md ring-2 ring-white  ">
            %{product.discount} İndirim
          </div>
        )}
    </div>
  )
}

export default Card
