import Header from '@/src/FE/components/Header'
import Section1_Service from '@/src/FE/components/Section1_Service'
import Section2_Stats from '@/src/FE/components/Section2_Stats'
import Section3_TeamLeads from '@/src/FE/components/Section3_TeamLeads'
import CustomersReview from '@/src/FE/components/subcomponents/CustomersReview'
import SlidingDIsplay from '@/src/FE/components/subcomponents/SlidingDIsplay'
import Trusted_Utilities from '@/src/FE/components/subcomponents/Trusted_Utilities'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />      
    <SlidingDIsplay />
    <main>
      <Section1_Service />
      <Section2_Stats />
      <Trusted_Utilities />
      <Section3_TeamLeads />
      <CustomersReview />
    </main>
    </>
  )
}

export default page