import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function Hero() {
  return (
    <div className='w-full h-[260px] flex justify-center'>
        <div className='sm:h-full md:w-full lg:w-[80%] bg-black h-full flex justify-between mt-8'>
        {/* left */}
        <div className='ml-10 sm:mt-4 md:mt-12 text-white'>
            <div className='flex justify-center items-center'>
                <span> <FontAwesomeIcon icon={faApple} className='w-[30px]' /> </span> 
                <span className='ml-4'>iPhone 14 Series</span>
            </div>
            <div className='w-[200px]'>
                <h1 className='text-3xl font-sans font-bold ml-5'> Up to 10% off Voucher</h1>
                <button className='underline underline-offset-8 mt-5 ml-5'>Shop Now</button>
            </div>
        </div>
        {/* right */}
        <div>
            <Image src={"/Iphone.png"} width={338} height={350} alt='Hero Image'
            className='mt-5'></Image>
        </div>
        </div>
    </div>
  )
}

export default Hero