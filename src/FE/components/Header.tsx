import React from 'react'
import header from '../../../styles/Home/Header/header.module.css'
import Image from 'next/image'
import logo from '../../../public/assets/img_220011/logo.png'
import Header_ServiceList from './subcomponents/Header_ServiceList'
import HeaderIntroVid from './HeaderIntroVid'
const Header = () => {



  return (
    <header className='h-[100vh] mt-16  md:mt-0 relative w-full'>
       <HeaderIntroVid />
    </header>
  )
}

export default Header