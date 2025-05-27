import Image from "next/image"
import image1 from '@/public/banner/computer1.jpg'


const HomeCategory = () => {
  return (
    <section className='w-full flex flex-col bg-third ' >
      <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4' >
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="w-[400px] ">
            <Image src={image1} alt={'sa'} width={400} height={150} className='object-cover rounded-t-xl' />

          </div>
        </div>
      </div>
      
    </section>
  )
}

export default HomeCategory
