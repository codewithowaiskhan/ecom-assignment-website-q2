import React from "react";

import Image from "next/image";
function OurProducts() {
  return (
    <div className="w-full h-[300px] flex justify-center items-center mt-16">
      <div className="w-[80%] h-full">
        {/* top */}
        <div>
          <span className="border-l-8 border-red-500 border-e-4 border-b-4 border-t-4 rounded-sm"></span>
          <span className="ml-2 text-red-500 text-sm font-bold">
            Our Products
          </span>
          <div className="flex">
            <h2 className="mt-5 font-bold text-3xl">Explore Our Products</h2>
          </div>
        </div>
        {/* products */}
        {/* containers boxes */}
        <div className="flex items-center justify-between mt-10">
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/explore our products/images/cat.png"}
                width={80}
                height={80}
                alt="cat"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">Breed Dry Dog Food</span>
              <span className="font-bold">$100</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/explore our products/images/camra-2.png"}
                width={115}
                height={100}
                alt="camra-2"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">CANON EOS DSLR Camera</span>
              <span className="font-bold">$360</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/explore our products/images/ideapad-gaming.png"}
                width={130}
                height={100}
                alt="ideapad-gaming"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">ASUS FHD Gaming Laptop</span>
              <span className="font-bold">$700</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/explore our products/images/curology.png"}
                width={150}
                height={100}
                alt="curology"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">Curology Product Set </span>
              <span className="font-bold">$500</span>
            </div>
          </div>
        </div>
        {/* Second Box And Products */}
        <div className="flex items-center justify-between mt-10">
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/explore our products/images/car.png"}
                width={150}
                height={100}
                alt="car"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">Kids Electric Car</span>
              <span className="font-bold">$960</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/explore our products/images/shoes.png"}
                width={115}
                height={100}
                alt="shoes"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">Jr. Zoom Soccer Cleats</span>
              <span className="font-bold">$1160</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/explore our products/images/game.png"}
                width={130}
                height={100}
                alt="game"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">GP11 Shooter USB Gamepad</span>
              <span className="font-bold">$660</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/explore our products/images/jacket.png"}
                width={150}
                height={100}
                alt="jacket"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">Quilted Satin Jacket</span>
              <span className="font-bold">$660</span>
            </div>
          </div>
        </div>
        {/* button */}
        <button className="py-2 px-3 bg-red-500 text-white ml-[467px] mt-8 rounded-md">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default OurProducts;
