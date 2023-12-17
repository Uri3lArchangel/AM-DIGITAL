'use client'
import React, { CSSProperties } from 'react'
import sd from '../../../../styles/Home/misc/slidingdisplay.module.css'
import Image from 'next/image'
import node from '../../../../public/assets/img_220011/slider/node.png'
import next from '../../../../public/assets/img_220011/slider/next.png'
import react from '../../../../public/assets/img_220011/slider/react.png'
import rn from '../../../../public/assets/img_220011/slider/rn.png'
import mysql from '../../../../public/assets/img_220011/slider/mysql.png'
import mongo from '../../../../public/assets/img_220011/slider/mongo.png'
import redis from '../../../../public/assets/img_220011/slider/redis.png'
import sol from '../../../../public/assets/img_220011/slider/sol.png'
import tf from '../../../../public/assets/img_220011/slider/tf.png'
import flask from '../../../../public/assets/img_220011/slider/flask.png'
import django from '../../../../public/assets/img_220011/slider/django.png'
import flutter from '../../../../public/assets/img_220011/slider/flutter.png'
import gql from '../../../../public/assets/img_220011/slider/gql.png'
import docker from '../../../../public/assets/img_220011/slider/docker.png'
import kuber from '../../../../public/assets/img_220011/slider/kuber.png'
import fastapi from '../../../../public/assets/img_220011/slider/fastapi.png'




const SlidingDIsplay = () => {
    function slide(){
        
    }
  
  return (
    <aside className={sd.asideContainer_0}>
      <section>
        <div > 
        <Image src={node} alt='node js logo'/>
        </div>
        <div>
        <Image  src={next} alt='next js logo'/>
        </div>
        <div>
        <Image src={react} alt='react js logo'/>
        </div>
        <div>
        <Image layout='intrinsic' src={rn} alt='react native logo'/>
        </div>
        <div>
        <Image  src={mysql} alt='mysql logo'/>
        </div>
        <div>
        <Image  src={mongo} alt='mongodb logo'/>
        </div>
        <div>
        <Image  src={redis} alt='redis logo'/>
        </div>
         <div>
        <Image  src={tf} alt='tensorflow logo'/>
        </div>
        <div>
        <Image  src={django} alt='django logo'/>
        </div>
        <div>
        <Image  src={flask} alt='flask logo'/>
        </div>
        <div>
        <Image  src={sol} alt='solidity logo'/>
        </div>
        <div>
        <Image  src={docker} alt='docker logo'/>
        </div>
        <div>
        <Image  src={kuber} alt='kubernetes logo'/>
        </div>
        <div>
        <Image  src={fastapi} alt='fastapi logo'/>
        </div>
        <div>
        <Image  src={gql} alt='graphql logo'/>
        </div>
        <div>
        <Image  src={flutter} alt='flutter logo'/>
        </div>
        </section>
        <section>
        <div>
        <Image  src={node} alt='node js logo'/>

        </div>
        <div>
        <Image  src={next} alt='next js logo'/>

        </div>
        <div>
        <Image  src={react} alt='react js logo'/>
        </div>
        <div>
        <Image  src={rn} alt='react native logo'/>
        </div>
        <div>
        <Image  src={mysql} alt='mysql logo'/>
        </div>
        <div>
        <Image  src={mongo} alt='mongodb logo'/>
        </div>
        <div>
        <Image  src={redis} alt='redis logo'/>
        </div>
        <div>
        <Image  src={tf} alt='tensorflow logo'/>
        </div>
        <div>
        <Image  src={django} alt='django logo'/>
        </div>
        <div>
        <Image  src={flask} alt='flask logo'/>
        </div>
        <div>
        <Image  src={sol} alt='solidity logo'/>
        </div>
        <div>
        <Image  src={docker} alt='docker logo'/>
        </div>
        <div>
        <Image  src={kuber} alt='kubernetes logo'/>
        </div>
        <div>
        <Image  src={fastapi} alt='fastapi logo'/>
        </div>
        <div>
        <Image  src={gql} alt='graphql logo'/>
        </div>
        <div>
        <Image  src={flutter} alt='flutter logo'/>
        </div>
        </section>
    </aside>
  )
}

export default SlidingDIsplay