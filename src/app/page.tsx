import React from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import FlashSale from '@/components/flashsale'
import BestSellingProducts from '@/components/bestsellingproducts'
import Footer from '@/components/footer'
function Home() {
  return (
    <div>
    <Header/>
    <Hero/>
    <FlashSale/>
    <BestSellingProducts/>
    <Footer/>
    </div>
  )
}

export default Home