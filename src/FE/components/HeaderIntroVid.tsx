'use client'
import React, { useEffect } from 'react'

function HeaderIntroVid() {
   
  return (
    <video id='intro_vid' height="640" width="1024" className='w-full bottom-0 absolute h-[100%] object-fill' autoPlay loop muted>
    <source src="/assets/vids/FULL.mp4" type='video/mp4' />
  </video>  )
}

export default HeaderIntroVid