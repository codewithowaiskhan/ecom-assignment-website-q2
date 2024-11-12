import React from "react";
import Image from "next/image";
function BrowseByCategory() {
  return (
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-16">
      <div className="sm:w-full md:w-full lg:w-[80%] h-full">
        {/* top */}
        <div className="sm:pl-5 md:pl-0">
          <span className="border-l-8 border-red-500 border-e-4 border-b-4 border-t-4 rounded-sm"></span>
          <span className="ml-2 text-red-500 text-sm font-bold">
            Categories
          </span>
          <h2 className="mt-5 font-bold text-3xl">Browse By Category</h2>
        </div>
        {/* products */}
        {/* containers boxes */}
        <div className="sm:gap-y-5 md:gap-y-0 flex sm:flex-col md:flex-row sm:items-center justify-between mt-5">
          <div>
            <div className="w-[150px] h-[150px] flex justify-center items-center">
              <Image
                src={"/browse by category/images/Phone.png"}
                width={130}
                height={100}
                alt="Phone"
              ></Image>
            </div>
          </div>
          <Image
            src={"/browse by category/images/computer.png"}
            width={130}
            height={100}
            alt="computer"
          ></Image>
          <Image
            src={"/browse by category/images/smartwatch.png"}
            width={130}
            height={100}
            alt="smartwatch"
          ></Image>
          <Image
            src={"/browse by category/images/camera.png"}
            width={150}
            height={100}
            alt="camera"
          ></Image>
          <Image
            src={"/browse by category/images/headphone.png"}
            width={130}
            height={100}
            alt="headphone"
          ></Image>

          <Image
            src={"/browse by category/images/gamepad.png"}
            width={130}
            height={100}
            alt="gamepad"
          ></Image>
        </div>
        <div className="py-6 border-b-2 w-full"></div>
      </div>
    </div>
  );
}

export default BrowseByCategory;
