import React from 'react'
import header from '../../../styles/Home/Header/header.module.css'
import Image from 'next/image'
import logo from '../../../public/assets/img_220011/logo.png'
import Header_ServiceList from './subcomponents/Header_ServiceList'
const Header = () => {



  return (
    <header className={' py-20 relative '+header.Header_Container_0}>
        <section className='text-center'>
            <div className='w-fit flex items-center mx-auto md:mt-14'>
                <Image src={logo} alt='amdigital labs logo ' className='bg-black rounded-full w-8 mx-2 font-semibold md:w-16'  />
                <h1 className='text-xl md:text-3xl font-bold'>A.M DIGITAL SOLUTIONS LLC</h1>
            </div>
            <div>
                <h1 className='text-xl font-extrabold my-4 text-white'>BEST DIGITAL SOLUTIONS </h1>
            <Header_ServiceList />
            </div>
        </section>
    </header>
  )
}

export default Header