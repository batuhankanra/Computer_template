import Image from "next/image"
import image1 from '@/public/banner/computer1.jpg'


const CompanyLogo:CompanyLogo[]=[
  {
    id:1,
    title:'MSI',
    link:'/msi',
    image:image1.src
  },
  {
    id:2,
    title:'Lenova',
    link:'/Lenova',
    image:image1.src
  },
  {
    id:3,
    title:'Lenova',
    link:'/Lenova',
    image:image1.src
  },
  {
    id:4,
    title:'Lenova',
    link:'/Lenova',
    image:image1.src
  },
]

const HomeCategory = () => {
  return (
     <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-800">
           Güvendiğiniz Markalar
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {CompanyLogo.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-center items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition border border-fifth hover:border-primary hover:scale-110 cursor-pointer" 
            >
              <Image
                src={brand.image}
                alt={brand.title}
                width={300}
                height={100}
                className=" object-contain grayscale hover:grayscale-0 transition rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeCategory
