import React from "react";
import Image from "next/image";
function BestSellingProducts() {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-[80%] h-full">
        {/* top */}
        <div>
          <span className="border-l-8 border-red-500 border-e-4 border-b-4 border-t-4 rounded-sm"></span>
          <span className="ml-2 text-red-500 text-sm font-bold">
            This Month
          </span>
          <div className="flex">
            <h2 className="mt-5 font-bold text-3xl">Best Selling Products</h2>
            <button className="py-2 px-8 bg-red-500 text-white ml-[600px] rounded-md text-md">
              View All
            </button>
          </div>
        </div>
        {/* products */}
        {/* containers boxes */}
        <div className="flex justify-between mt-10">
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/bestsellingproducts/images/Bag.png"}
                width={150}
                height={100}
                alt="Bag"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">Gucci duffle bag</span>
              <span className="font-bold">$960</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/bestsellingproducts/images/BookSelf.png"}
                width={115}
                height={100}
                alt="BookSelf"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">Small BookSelf</span>
              <span className="font-bold">$360</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/bestsellingproducts/images/coat.png"}
                width={130}
                height={100}
                alt="coat"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">The north coat</span>
              <span className="font-bold">$260</span>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/bestsellingproducts/images/CpuCooler.png"}
                width={150}
                height={100}
                alt="CpuCooler"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <span className="font-bold mt-3">RGB liquid CPU Cooler</span>
              <span className="font-bold">$160</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellingProducts;
