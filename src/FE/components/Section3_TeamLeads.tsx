import React from 'react'
import team from '../../../styles/Home/Team/team.module.css'
import Image from 'next/image'
import ajax from '../../../public/assets/img_220011/ajax.png'
import matt from '../../../public/assets/img_220011/matt.png'
import alex from '../../../public/assets/img_220011/alex.png'
import leroy from '../../../public/assets/img_220011/leroy.png'
import Link from 'next/link'


const Section3_TeamLeads = () => {
  return (
    <section className={team.SectionContainer_0}>
        <article>
        <h3>OUR TEAM LEADS</h3>
        <ul>
            <li>
                <figure>
                <Image src={ajax} alt='ajax' />
                <figcaption>
                    <h4>AJAX</h4>
                    <p>Development Head</p>
                </figcaption>
                </figure>
            </li>
            <li>
                <figure>
                <Image src={matt} alt='matt' />
                <figcaption>
                    <h4>MATT</h4>
                    <p>Business Head</p>
                </figcaption>
                </figure>
            </li>
            <li>
                <figure>
                <Image src={alex} alt='alex' />
                <figcaption>
                    <h4>Alex</h4>
                    <p>Marketing Manager</p>
                </figcaption>
                </figure>
             </li>
            <li>
                <figure>
                 <Image src={leroy} alt='leroy' />
                <figcaption>
                    <h4>Leroy </h4>
                    <p>legal and business council head</p>
                </figcaption>
                </figure>
            </li>
        </ul>
        </article>
    </section>
  )
}

export default Section3_TeamLeads