'use client'
import React, { useEffect, useState } from 'react'
import Web2Projects from '../portfolio/web2/Web2Projects'

const Web2ProjectsMain = () => {
  const [viewer,setViewerState]= useState<{img:null,display:"hidden"|"block"}>({img:null,display:"hidden"})

  useEffect(() => {
   document.body.onclick=()=>{
    setViewerState({img:null,display:"hidden"})
   }
  }, [viewer])
  
  return (
    <>
    <div id="imge_viewer" style={{backgroundImage:`url(${viewer.img})`}} className={`${viewer.display}  bg-black fixed top-[7%] w-[100%] left-0 right-0 mx-auto h-[85%] z-[100] sm:w-[75%] md:w-[55%] md:h-[90%]`}></div>
    <Web2Projects  viewerObj={{viewer,setViewerState}}  />
  </>
  )
}

export default Web2ProjectsMain