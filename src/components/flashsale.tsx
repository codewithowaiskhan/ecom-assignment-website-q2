import React from "react";
import Image from "next/image";
function FlashSale() {
  return (
    <main>
      <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-28">
        <div className="sm:w-full md:w-full lg:w-[80%] h-full">
          {/* top */}
          <div className="sm:pl-5 md:pl-0">
            <span className="border-l-8 border-red-500 border-e-4 border-b-4 border-t-4 rounded-sm"></span>
            <span className="ml-2 text-red-500 text-sm font-bold">Today’s</span>
            <div className="flex">
              <h2 className="mt-5 font-bold text-4xl">Flash Sales</h2>
              <ul className="flex gap-5 ml-11 mt-1">
                {/* Days */}
                <li className="flex flex-col items-center">
                  <span className="text-sm">Days</span>
                  <div className="flex">
                    <span className="text-3xl font-bold ml-10">03</span>
                    <span className="text-2xl font-bold text-red-600 ml-4">
                      :
                    </span>
                  </div>
                </li>

                {/* Hours */}
                <li className="flex flex-col items-center">
                  <span className="text-sm">Hourse</span>
                  <div className="flex">
                    <span className="text-3xl font-bold ml-5">23</span>
                    <span className="text-2xl text-red-600 ml-4 font-bold">
                      :
                    </span>
                  </div>
                </li>

                {/* Minutes */}
                <li className="flex flex-col items-center">
                  <span className="text-sm">Minutes</span>
                  <div className="flex">
                    <span className="text-3xl font-bold ml-5">19</span>
                    <span className="text-2xl text-red-600 ml-4 font-bold">
                      :
                    </span>
                  </div>
                </li>

                {/* Seconds */}
                <li className="flex flex-col items-center">
                  <span className="text-sm">Seconds</span>
                  <span className="text-3xl font-bold">56</span>
                </li>
              </ul>
            </div>
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
                  alt="Keyboard"
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
                  alt="Lcd"
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
                  alt="Chair"
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
      <button className="py-2 px-3 bg-red-500 text-white ml-[600px] mt-16">
        View All Products
      </button>
      <div className="py-8 border-b-2 w-full"></div>
    </main>
  );
}
export default FlashSale;
