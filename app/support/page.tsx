import React from 'react'
import Header from '@/src/FE/components/support/Header'
import SupportForm from '@/src/FE/components/support/SupportForm'
import Link from 'next/link'
import support from '../../styles/support/form.module.css'
import { IoMailUnreadSharp } from 'react-icons/io5'
import { BsTelephoneFill } from 'react-icons/bs'

const page = () => {
  return (
 <>
 <Header />
 <h2 className='text-xl my-4'>Need Help? Contact us to, make enquires, have an issue with our service or want to know more about us</h2>
 <p className='text-xl my-2'>Response is expected between 1-3 business days</p>
 <SupportForm />

<div className={'w-fit mx-auto text-center p-10 my-4 '+ support.Additional}>
<IoMailUnreadSharp size={35} className=' text-light_blue mx-auto ' />
  <h3 className='text-lg'>You can also mail us directly (recommended)</h3>
  <p>mail@mail</p>
  <Link className='text-lg bg-dark_blue text-white  py-4 px-8 block rounded-xl w-fit mx-auto' href="mailto:mail@mail.com">Send Mail</Link>
</div>
<div className={'w-fit mx-auto text-center p-10 my-4 '+ support.Additional}>
<BsTelephoneFill size={35} className=' text-light_blue mx-auto  lg:mx-0' />  <h3 className='text-lg'>Our Contact Phone number</h3>
  <p>+2222222222222</p>
</div>
 </>
  )
}

export default page