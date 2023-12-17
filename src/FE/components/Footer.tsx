import React from 'react'
import footer from '../../../styles/Home/Footer/footer.module.css'
import Image from 'next/image'
import logo from '../../../public/assets/img_220011/logo.png'
import { IoMailUnreadSharp } from 'react-icons/io5'
import { BsTelephoneFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'


import Link from 'next/link'
import { GiStopwatch } from 'react-icons/gi'
 
const Footer = () => {
  return (
    <footer className={footer.footerContainer_0+' pt-[10em] px-6 lg:px-28 text-white '}>
      <div>
     <div className='w-fit flex items-center mx-auto lg:mx-0'>
                <Image src={logo} alt='amdigital solutions logo ' className='bg-black rounded-full w-8 mx-2 md:w-12'  />
                <h4 className={footer.h4Text_1+' text-lgs lg:font-bold md:text-xl'}>A.M DIGITAL SOLUTIONS LLC</h4>
            </div>
            <div>
              <p className='mt-4 lg:mt-6'>A team of professionals dedicated to providing industry standard solutions <br /> we are AM DIGIGTAL SOLUTIONS</p>
            
            </div>
            <ul className='text-light_blue mt-4  underline lg:space-y-6 '>
              <li className='my-4'><Link href="/pricing">PRICING</Link></li>
                <li className='my-4'><Link href="/support">SUPPORT</Link></li>
                <li className='my-4'><Link href="/contact">CONTACT US</Link></li>
                <li className='my-4'><Link href="/about">ABOUT</Link></li>
              </ul>
       </div>
            <div className={'h-[80%] items-center my-10 flex flex-col text-center justify-around  mx-auto '+ footer.SectionRight}>
           
            <div className='m-4 '>
              <BiWorld size={27} className=' text-light_blue mx-auto lg:mx-0' />
              <p><Link className=" underline lowercase" href="https://goo.gl/maps/gbc7ACXQmHwYpBp58">SUITE / OFFICE XX,182-184 HIGH STREET NORTH EAST HAM LONDON E6 2JA</Link></p>
            </div>
            <div className='m-4'> 
              <IoMailUnreadSharp size={27} className=' text-light_blue mx-auto lg:mx-0' />
              <p><Link className=" underline lowercase" href="mailto:mail@mail.com">mail@mail.com</Link></p>
            </div>
            <div className='m-4'>
              <BsTelephoneFill size={27} className=' text-light_blue mx-auto  lg:mx-0' />
              <p><Link className=" underline  lowercase" href="tel:+16574981244"> +1 (657) 498-1244</Link></p>
            </div>
            <div className='mb-10'>
              <GiStopwatch size={27} className=' text-light_blue mx-auto lg:mx-0' />
              <p className="  normal-case " >Working Hours: <br /> Monday - Saturday</p>
            </div>
            
            </div>
            <div className='text-center border-t border-white/20 py-4 lg:mx-0'>Copyright © 2023 A. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer