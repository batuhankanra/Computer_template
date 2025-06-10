"use client"

import Hero from "./homeComponents/hero"
import HomeCategory from "./homeComponents/homeCategory"
import NewArrivals from "./homeComponents/NewArrivals"
import PromotionalProducts from "./homeComponents/PromotionalProducts"


const Home = () => {
  return (
    <div className=" container mx-auto pt-4 flex flex-col gap-y-5">
      <Hero />
      <PromotionalProducts />
      <HomeCategory />
      <NewArrivals  />
    </div>
  )
}

export default Home
