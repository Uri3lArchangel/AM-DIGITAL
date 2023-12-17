import AI_ML from '@/src/FE/components/pricing/AI_ML'
import BlockchainPricings from '@/src/FE/components/pricing/BlockchainPricings'
import DataAnalysis from '@/src/FE/components/pricing/DataAnalysis'
import Graphics from '@/src/FE/components/pricing/Graphics'
import Header from '@/src/FE/components/pricing/Header'
import Mobile from '@/src/FE/components/pricing/Mobile'
import Web2Pricing from '@/src/FE/components/pricing/Web2Pricing'
import React from 'react'

function page() {
  return (
    <section>
      <Header /> 
        <main>
            <BlockchainPricings />
            <Web2Pricing />
            <AI_ML />
            <DataAnalysis />
            <Mobile />
            <Graphics />

        </main>
    </section>
  )
}

export default page