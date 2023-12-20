'use client'
import React, { useEffect, useState } from 'react'

function HeaderIntroVid() {
  const [vidurl,setVidURL]=useState("/assets/vids/FULLH.mp4")
  useEffect(()=>{
    if(window.innerWidth < 1240){
      setVidURL("/assets/vids/FULL.mp4")
    }
  },[])
   
  return (
    <video id='intro_vid' height="640" width="1024" className='w-full bottom-0 absolute h-[100%] object-fill' autoPlay loop muted>
    <source src={vidurl} type='video/mp4' />
  </video>  )
}

export default HeaderIntroVid