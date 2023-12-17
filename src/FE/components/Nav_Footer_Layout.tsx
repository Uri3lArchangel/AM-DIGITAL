'use client'
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Nav_Footer_Layout = ({children}:{children:React.ReactNode}) => {

  return (
    <>
    <Nav />
    {children}
    </>
  )
}

export default Nav_Footer_Layout