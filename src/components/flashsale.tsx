import React from "react";
import Image from "next/image";
function FlashSale() {
  return (
    <main>
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-16">
      <div className="sm:w-full md:w-full lg:w-[80%] h-full">
        {/* top */}
        <div  className="sm:pl-5 md:pl-0">
          <span className="border-l-8 border-red-500 border-e-4 border-b-4 border-t-4 rounded-sm"></span>
          <span className="ml-2 text-red-500 text-sm font-bold">Today’s</span>
          <h2 className="mt-5 font-bold text-4xl">Flash Sales</h2>
        </div>
        {/* products */}
        {/* containers boxes */}
        <div className="sm:gap-y-5 md:gap-y-0 flex sm:flex-col md:flex-row sm:items-center justify-between mt-7">
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
              <Image
                src={"/flashsale/images/Gaming.png"}
                width={150}
                height={100}
                alt="gaming"
              ></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
                <span className="font-bold mt-3">HAVIT HV-G92 Gamepad</span>
                <span className="font-bold">$120</span>
            </div>
          </div>
          <div>
          <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
            <Image
              src={"/flashsale/images/Keyboard.png"}
              width={150}
              height={100}
              alt="gaming"
            ></Image>
          </div>
            {/* title */}
            <div className="flex flex-col">
                <span className="font-bold mt-3">AK-900 Wired Keyboard</span>
                <span className="font-bold">$960</span>
            </div>
          </div>
          <div>
          <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
            <Image
              src={"/flashsale/images/Lcd.png"}
              width={150}
              height={100}
              alt="gaming"
            ></Image>
          </div>
          {/* title */}
          <div className="flex flex-col">
                <span className="font-bold mt-3">IPS LCD Gaming Monitor</span>
                <span className="font-bold">$370</span>
            </div>
          </div>
          <div>
          <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
            <Image
              src={"/flashsale/images/Chair.png"}
              width={150}
              height={100}
              alt="gaming"
            ></Image>
          </div>
            {/* title */}
          <div className="flex flex-col">
                <span className="font-bold mt-3">S-Series Comfort Chair </span>
                <span className="font-bold">$375</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="py-2 px-3 bg-red-500 text-white md:ml-[600px] mt-10 sm:ml-[37%]">View All Products</button>
    </main>
  );
}

export default FlashSale;
