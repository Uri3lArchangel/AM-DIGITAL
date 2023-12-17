import React from 'react'
import { SiBlockchaindotcom, SiCairographics } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg' 
import { TbChartHistogram } from 'react-icons/tb' 
import { GiArtificialIntelligence } from 'react-icons/gi' 
import { PiDeviceMobileCameraDuotone } from 'react-icons/pi' 
import Link from 'next/link'


const Header_ServiceList = () => {
  return (
    <ul className='sm:flex flex-wrap sm:space-x-6 flex-shrink-0 sm:px-4 justify-center sm:absolute bottom-20 sm:w-full'>
                    
    <li className='border border-white/20 sm:w-[200px] py-8 mt-10'>
        <Link href="#">
        <p className='text-white/60'>BLOCKCHAIN DEVELOPMENT</p>
        <SiBlockchaindotcom className='text-dark_blue mx-auto'size={30} />
        </Link>
    </li>
     <li className='border border-white/20 sm:w-[200px] py-8 text-dark_blue mt-10'>
     <Link href="#">
        <p className='text-white/60'>WEB DEVELOPMENT</p>
        <CgWebsite className='text-dark_blue mx-auto'size={30} />
        </Link>
    </li>
    <li className='border border-white/20 sm:w-[200px] py-8 text-dark_blue mt-10'>
    <Link href="#">
        <p className='text-white/60'>DATA ANALYTICS</p>
        <TbChartHistogram className='text-dark_blue mx-auto'size={30} />
        </Link>
    </li>   
    <li className='border border-white/20 sm:w-[200px] py-8 text-dark_blue mt-10'>
        <p className='text-white/60'>A.I / M.L</p>
        <GiArtificialIntelligence className='text-dark_blue mx-auto'size={30} />
    </li>  
     <li className='border border-white/20 sm:w-[200px] py-8 text-dark_blue mt-10'>
     <Link href="#">
        <p className='text-white/60'>MOBILE APP DEVELOPMENT</p>
        <PiDeviceMobileCameraDuotone className='text-dark_blue mx-auto'size={30} />
        </Link>
    </li> 
       <li className='border border-white/20 sm:w-[200px] py-8 text-dark_blue mt-10'>
     <Link href="#">
        <p className='text-white/60'>GRAPHICS DESIGN</p>
        <SiCairographics className='text-dark_blue mx-auto'size={30} />
        </Link>
    </li> 
</ul>
  )
}

export default Header_ServiceList