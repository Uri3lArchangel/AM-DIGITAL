import React from 'react'
import CarouselApp from '../../antd/Carousel'
import Image from 'next/image'
import g1 from '../../../../../public/assets/img_220011/graphics/g1.jpeg'
import g2 from '../../../../../public/assets/img_220011/graphics/g2.jpeg'
import g3 from '../../../../../public/assets/img_220011/graphics/g3.jpeg'
import g4 from '../../../../../public/assets/img_220011/graphics/g4.jpeg'
import g5 from '../../../../../public/assets/img_220011/graphics/g5.jpeg'
import g6 from '../../../../../public/assets/img_220011/graphics/g6.jpeg'
import g7 from '../../../../../public/assets/img_220011/graphics/g7.jpeg'
import g8 from '../../../../../public/assets/img_220011/graphics/g8.jpeg'
import g9 from '../../../../../public/assets/img_220011/graphics/g9.jpeg'
import g10 from '../../../../../public/assets/img_220011/graphics/g10.jpeg'
import g11 from '../../../../../public/assets/img_220011/graphics/g11.jpeg'
import g12 from '../../../../../public/assets/img_220011/graphics/g12.jpeg'
import g13 from '../../../../../public/assets/img_220011/graphics/g13.jpeg'
import g14 from '../../../../../public/assets/img_220011/graphics/g14.jpeg'

const GraphicsCarousel = () => {
  return (
<CarouselApp play={false} classname='h-[400px] bg-yellow-500'>
   <div className='h-[500px]'>
    <Image src={g1} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g2} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g3} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g4} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g5} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g6} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g7} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g8} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g9} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g10} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g11} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g12} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g13} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>
    <Image src={g14} alt='' className='h-full' />
   </div>
   <div className='h-[500px]'>

    <video  controls className='h-full'>
        <source src='/assets/img_220011/graphics/g15.mp4' />
    </video>
   </div>
   <div className='h-[500px]'>

    <video  className='h-full' controls>
        <source src='/assets/img_220011/graphics/g16.mp4' />
    </video>
   </div>
</CarouselApp>
    )
}

export default GraphicsCarousel