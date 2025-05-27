import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import image1 from '@/public/banner/computer1.jpg'
import image2 from '@/public/banner/computer2.jpg'
import image3 from '@/public/banner/computer3.jpg'
import image4 from '@/public/banner/computer4.jpg'
import image5 from '@/public/banner/computer5.jpg'
import image6 from '@/public/banner/computer6.jpg'
import Image from "next/image"
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";


const images=[image1.src,image2.src,image3.src,image4.src,image5.src,image6.src]

const Slider = () => {
  const [emblaRef,emblaApi] = useEmblaCarousel({loop:true})    
    

    const scrollPrev=useCallback(()=>emblaApi?.scrollPrev(),[emblaApi])
    const scrollNext=useCallback(()=>emblaApi?.scrollNext(),[emblaApi])

 

  return (
    <article className="relative max-w-4xl mx-auto overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((item,i)=>(
            <div className="embla__slide min-w-full" key={i}>
              <Image  src={item} width={1920} height={1080} alt={`urun ${i+1}`} className="w-full h-96 object-cover rounded-xl shadow-md" />

            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollNext} aria-label="sonraki"  className="absolute top-1/2 right-4 -translate-y-1/2 px-3 py-2 text-lg bg-white rounded-full shadow-md disabled:opacity-40">
          <FaArrowRight />
      </button>
      <button onClick={scrollPrev} aria-label="sonraki"  className="absolute top-1/2 left-4 -translate-y-1/2 px-3 py-2 text-lg bg-white rounded-full shadow-md disabled:opacity-40">
          <FaArrowLeft  />
      </button>
    </article>
  )
}

export default Slider
