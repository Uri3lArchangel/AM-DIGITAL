import React from 'react'
import service from '../../../styles/Home/Services/service.module.css'
import Link from 'next/link'

function Section1_Service() {
  return (
    <section className={'text-center py-20 '+service.SectionContainer_0}>
        <h1 className=" text-center text-black text-[20px] font-extrabold">WE OFFER A WIDE RANGE OF SERVICES</h1>
        <div className={service.innerDivCardsContainer}>
        <article className={service.DivCard_1}>
            <h2 >WRITING CUSTOM SMART CONTRACTS</h2>
            <p className='my-4'>
            WE PROVIDE CUSTOM SMART CONTRACTS ACCORDING TO YOUR SPECIFICATIONS AND NEEDS, WITH LATEST UPDATES, PATCHES AND IMPLEMENTATIONS.
            <br />
            <br />
               <span className='font-bold'># SOLIDITY BASED</span> 
            </p>
        </article>
        <article className={service.DivCard_1}>
            <h2 >BUILDING FULLSTACK WEB3 WEB AND MOBILE APPS FOR THE BLOCKCHAIN</h2>
            <p className='my-4'>
            WE BUILD HIGH STANDARD FULL STACK WEB AND MOBILE SOLUTIONS FOR THE BLOCKCHAIN (WEB3)
            <br />
            <br />
               <span className='font-bold'># SOLIDITY BASED <br /> # PYTHON BASED <br /> #JAVASCRIPT / TYPESCRIPT BASED <br /> #DART BASED (FLUTTER)</span> 
            </p>
            
        </article>
        <article className={service.DivCard_1 + " ai"}>
            <h2 >BUILDING  A.I  AND WEB2 BASED APPS FOR WEB AND MOBILE</h2>
            <p className='my-4'>
            WE WILL HELP BUILD STANDARD A.I SOLUTIONS FROM EXISTING MODELS LIKE GPT-3 OR HELP YOU BUILD AND TRAIN CUSTOM MODELS, ALONG WITH OTHER WEB2 SOLUTIONS <br />
            <br />
               <span className='font-bold'># PYTHON BASED  <br /> #JAVASCRIPT / TYPESCRIPT BASED <br /> #DART BASED (FLUTTER)</span> 
            </p>
            
        </article>
        <article className={service.DivCard_1}>
            <h2 >GRAPHICS DESIGNING AND STREAMERS GRAPHICS</h2>
            <p className='my-4'>
            WE DESIGN LOGOS, FLYERS DESIGNS AND BROCHURE, SOCIAL MEDIA COVER, INFOGRAPHICS DESIGN, STREAMERS BANNER INTRO AND OUTRO DESIGNS<br />
            <br />
               <span className='font-bold'># PYTHON BASED  <br /> #JAVASCRIPT / TYPESCRIPT BASED <br /> #DART BASED (FLUTTER)</span> 
            </p>
            
        </article>
        </div>
        <button><Link href={"#"}>Our Pricings</Link></button>

    </section>
  )
}

export default Section1_Service