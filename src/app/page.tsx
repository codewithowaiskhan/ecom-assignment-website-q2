import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FlashSale from "@/components/flashsale";
import BestSellingProducts from "@/components/bestsellingproducts";
import Footer from "@/components/footer";
import BrowseByCategory from "@/components/BrowseByCategory";
import SecondHero from "@/components/secondhero";
import OurProducts from "@/components/OurProducts";
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FlashSale />
      <BrowseByCategory />
      <BestSellingProducts />
      <SecondHero />
      <OurProducts />
      <Footer />
    </div>
  );
}

export default Home;
