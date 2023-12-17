import React from 'react'
import reviews from '../../../../styles/Home/misc/reviews.module.css' 
import Image from 'next/image'
import profile from '../../../../public/assets/img_220011/profile.png'
import fprofile from '../../../../public/assets/img_220011/fprofile.png'
import Link from 'next/link'
import CarouselApp from '../antd/Carousel'
import jones from '../../../../public/assets/img_220011/reviews/markjones.png'

function CustomersReview() {
  return (
    <section className={reviews.SectionContainer_0}>
              <h4 className='text-xl text-center text-white sm:text-2xl font-bold'>customer&apos;s reviews</h4>

        <CarouselApp play={false}>
            <div>
        <article >
            
            <figure>
                <Image src={jones} alt='customer profile icon' className='' />
                <figcaption className="text-xl font-bold sm:text-2xl">Mark Jones</figcaption>
                <div className='bg-green-600 border border-white px-4 py-2 rounded-lg w-fit'>Crypto Marketer</div>
                <p className=' italic font-semibold'>&quot;Highly professional and diverse skillsets, i anticipate working with your team again&quot;</p>
            </figure>
        </article>
        </div>
        <div>
        <article >
            
            <figure>
                <Image src={profile} alt='customer profile icon' />
                <figcaption className="text-xl font-bold sm:text-2xl">Tyrell Daniels</figcaption>
            <p className='  italic font-semibold'>&quot;By far the best team i have had the work chance to along side  with, my constantly bringing new solutions, keep up the awesome work &quot;</p>

            </figure>
        </article>
        </div>
        <div>
        <article >
            
            <figure>
                <Image src={fprofile} alt='customer profile icon' />
                <figcaption className="text-xl font-bold sm:text-2xl">Rejoice j. smith</figcaption>
                <div className='bg-green-600 border border-white px-4 py-2 rounded-lg w-fit'>Fitness Trainer</div>
                <p className=' italic font-semibold'>&quot;amdigital solutions provide world class standards and security, with high level of diversity&quot;</p>

            </figure>
        </article>
        </div>
        <div>
        <article >
            
            <figure>
                <Image src={profile} alt='customer profile icon' />
                <figcaption className="text-xl font-bold sm:text-2xl">Antonio B. Marcado</figcaption>
                <div className='bg-green-600 border border-white px-4 py-2 rounded-lg w-fit'>Car Dealer</div>
            <p className='  italic font-semibold'>&quot;good service at standard pricing &quot;</p>

            </figure>
        </article>
        </div>
        <div>
        <article >
            
            <figure> 
            <Image src={fprofile} alt='customer profile icon' />
                <figcaption className="text-xl font-bold sm:text-2xl">Parvati Patel</figcaption>
            <p className='  italic font-semibold'>&quot; strong and ethical services have you provided, over the time i have worked with you &quot;</p>

            </figure>
        </article>
        </div>
        </CarouselApp>
        <button className='mx-auto block my-8'>
              <Link   href="/contact">CONTACT US</Link>
            </button>
            
    </section>
  )
}

export default CustomersReview