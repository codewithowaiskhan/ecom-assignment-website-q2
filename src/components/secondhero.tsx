import Image from "next/image";
import React from "react";

function SecondHero() {
  return (
    <div className="w-full h-full flex justify-center mt-20">
      <div className="w-[80%] h-[500px] bg-black flex justify-between">
        {/* left */}
        <div className="text-white pl-10 pt-16">
          <span className="text-[#00FF66]">Categories</span>
          <h2 className="text-5xl font-bold mt-10">
            Enhance Your <br /> Music Experience
          </h2>
          {/* Hourse Days Minutes Seconds */}
          <div className="flex gap-5 mt-10 text-sm">
            {/* Hourse */}
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full shadow-md">
              <span className="text-sm font-bold">23</span>
              <span className="text-sm">Hourse</span>
            </div>
            {/* Days */}
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full shadow-md">
              <span className="text-sm font-bold">05</span>
              <span className="text-sm">Days</span>
            </div>
            {/* Mintues */}
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full shadow-md">
              <span className="text-sm font-bold">59</span>
              <span className="text-sm">Minutes</span>
            </div>
            {/* Days */}
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full shadow-md">
              <span className="text-sm font-bold">35</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
          <div className="bg-[#00FF66] text-white w-28 h-12 rounded-md pt-2 pl-1 mt-10">
            <button className="items-center justify-center ml-4 mt-1">
              Buy Now!
            </button>
          </div>
        </div>
        {/* right */}
        <div>
          <div>
            <Image
              src={"/Hero 2/image/boombox.png"}
              width={400}
              height={350}
              alt="Hero 2 Image"
              className="pt-36 mr-24"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SecondHero;
