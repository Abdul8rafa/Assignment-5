import React from "react";
import Header from "../components/Header"
import Image from "next/image";
import heading from '@/public/IMPECCABLE CRAFTSMANSHIP AND FINESSE.png'
import lorem from '@/public/An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection..png'
import picture from '@/public/rs-layer-wrap ⏵ rs-layer.png'
export default function Home() {
  return (
    <div className="bg-[white] min-h-screen text-[black] w-full h-auto overflow-x-hidden ">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-6/12 mx-12 my-20 ">
          <h1 className="mb-16">
            <Image src={heading} alt='no' width={472.97} height={162.53}></Image>
          </h1>

          <p className="mb-16"> 
            <Image src={lorem} alt="no" width={798.9} height={144}></Image>
            </p>
          <button className="bg-primary text-white w-[247.67px] h-[49.2px] ">
            Explore Now</button>
        </div>
        <div className="mx-12 my-20">
          <Image src={picture} alt="no" width={421.38} height={573.59}></Image>
        </div>
      </div>
    </div>
  )
}