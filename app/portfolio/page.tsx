import CarouselApp from '@/src/FE/components/antd/Carousel'
import Header from '@/src/FE/components/portfolio/Header'
import TabsSection from '@/src/FE/components/portfolio/TabsSection'
import BlockchainProjectsDisplay from '@/src/FE/components/portfolio/blockchain/BlockchainProjectsDisplay'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <main className=' py-16 bg-black/90 text-white' >
    <h2 className='  my-4 text-center text-2xl font-bold'>OUR PROJECTS</h2>
    <p className=' text-center my-10'>&quot;Our Only Goal is client satisfaction and we alway deliver, we ensure we provide the best of the best and stay up to date&quot;</p>

    <section>
      <TabsSection />
    </section>  
    </main>
    </>
  )
}

export default page