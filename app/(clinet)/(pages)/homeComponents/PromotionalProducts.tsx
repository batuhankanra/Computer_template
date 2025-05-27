import useEmblaCarousel from 'embla-carousel-react'

import Card from './card';
import image1 from '@/public/banner/computer1.jpg'




const discountedProducts: ProductProps[] = [
  {
    id: 1,
    name: "MSI Katana GF66 15.6” Gaming Laptop",
    image: image1.src,
    price: 31999,
    discount:20
  },
  {
    id: 2,
    name: "Logitech G Pro X Gaming Mouse",
    image: image1.src,
    price: 31999,
    discount:20
  },
  {
    id: 3,
    name: "Samsung 980 Pro 1TB NVMe SSD",
    image: image1.src,
    price: 31999,
    discount:20
  },
   {
    id: 4,
    name: "MSI Katana GF66 15.6” Gaming Laptop",
    image: image1.src,
    price: 31999,
    discount:20
  },
   {
    id: 5,
    name: "MSI Katana GF66 15.6” Gaming Laptop",
    image:image1.src,
   price: 31999,
    discount:20
  },
   {
    id: 6,
    name: "MSI Katana GF66 15.6” Gaming Laptop",
    image:image1.src,
    price: 31999,
    discount:20
  },
   {
    id: 7,
    name: "MSI Katana GF66 15.6” Gaming Laptop",
    image:image1.src,
    price: 31999,
    discount:20
  },
];

const PromotionalProducts = () => {
     const [emblaRef] = useEmblaCarousel({loop:false})    
        
    
    
  return (
    <section className='w-full flex flex-col bg-third ' >
      <div className='max-w-6xl mx-auto' >
        <h1 className='text-2xl font-bold mb-6 font-sans'>Kampanyalı Ürünler</h1>
      </div>
      <div className='overflow-hidden py-3 ' ref={emblaRef}>
        <div className='flex gap-x-4'>
            {discountedProducts.map((product) => (
                <div key={product.id}>
                    <Card product={product} />
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default PromotionalProducts
