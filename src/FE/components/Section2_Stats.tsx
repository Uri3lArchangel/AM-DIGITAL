import React from 'react'
import stats from '../../../styles/Home/Stats/stats.module.css'

const Section2_Stats = () => {
  return (
    <section className={stats.SectionContainer_0}>
      <h2>OUR STATS</h2>
     <ul>
      <li>
        <h3>PROJECTS DONE</h3>
        <p>100+</p>
      </li>
      <li>
        <h3>ACTIVE CLIENTS</h3>
        <p>60+</p>
      </li>
      <li>
        <h3>POSITIVE REVIEWS</h3>
        <p>60+</p>
      </li>
     </ul>
    </section>
  )
}

export default Section2_Stats