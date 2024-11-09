import React from 'react';
import Image from 'next/image';
import image from '@/public/Group 14222.png'
import image1 from '@/public/Group 14224.png'
import image2 from '@/public/Frame 22.png'

export function Header() {
    return (
        <div>
            <nav className='bg-primary w-[1741.06px] h-[135.01px] flex items-center p-3 '>
                <Image src={image} alt='logo' width={242.56} height={87.45} ></Image>
                <form action="#" method='get' className='flex p-5 items-center'>
                    <input className='w-[769.89px] h-[56.24px] rounded-l-[20px] p-2' type="search" placeholder='Search for Gold Jewellery, Diamond Jewellery and more…' />
                    <button className='rounded-r-[20px] h-[56.24px] bg-white'>
                        <Image className='bg-white' src={image1} alt='logo1' width={21.5} height={21.5}></Image></button>
                    <div className='flex items-center p-5'>
                        <Image src={image2} alt='logo2' width={177.8} height={30.08} ></Image>
                    </div>
                </form>
            </nav>
        </div>
    )
}
export default Header