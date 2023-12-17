'use client'
import React, { useEffect, useState } from 'react'
import header from '../../../../styles/pricing/header.module.css'
import Link from 'next/link'

function Header() {
 
    
  return (
    <header className={header.HeaderContainer_0+ ' py-32 px-4'}>
        <h1>Our Pricings</h1>
        <div className='text-sm'><Link href="/" className='underline cursor-pointer  text-gray-300'>Home</Link>  <span className=' text-light_blue'> ⧐ </span> Pricing</div>
    </header>
  )
}

export default Header