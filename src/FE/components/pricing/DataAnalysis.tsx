import React from 'react'
import da from '../../../../styles/pricing/dataA/da.module.css'
import Link from 'next/link'

const DataAnalysis = () => {
  return (
    <section className="my-10 sm:my-40">
    <article className={da.ArticleContainer_1}>
        <h2 className="text-2xl font-extrabold text-center underline sm:text-3xl">
          Data Analysis
        </h2>
        <ul>
          <li>
          <h2>Basic</h2>
            <p>
              <sup>$</sup> <span className="text-4xl">499.00</span><abbr title="United States Dollars">USD</abbr>            </p>

              <ul>
                <li>Data Import and Cleaning</li>
                <li>Basic Data Visualization</li>
                <li>Descriptive Statistics</li>
                <li>Final Data Report</li>
              </ul>
              <Link href="/contact">Contact Us</Link>

          </li>
          <li>
          <h2>Startup</h2>
            <p>
              <sup>$</sup> <span className="text-4xl">999.00</span><abbr title="United States Dollars">USD</abbr>            </p>

              <ul>
                <li>All Basic Package Features</li>
                <li>Exploratory Data Analysis (EDA)</li>
                <li>Custom Data Visualization</li>
                <li>Detailed Data Report</li>
                <li>Email Support</li>
              </ul>
              <Link href="/contact">Contact Us</Link>

          </li>
          <li>
          <h2>Advance</h2>
            <p>
              <sup>$</sup> <span className="text-4xl">1,999.00</span><abbr title="United States Dollars">USD</abbr>            </p>

              <ul>
                <li>All Startup Package Features</li>
                <li>Hypothesis Testing</li>
                <li>Regression Analysis</li>
                <li>Priority Email Support</li>
                <li>Quarterly Data Workshops/Webinars</li>
              </ul>
              <Link href="/contact">Contact Us</Link>

          </li>
          <li>
          <h2>Professional</h2>
            <p>
              <sup>$</sup> <span className="text-4xl">4,999.00</span><abbr title="United States Dollars">USD</abbr>            </p>

              <ul>
                <li>All Advanced Package Features</li>
                <li>Predictive Modeling</li>
                <li>Time Series Analysis</li>
                <li>Data Storytelling</li>
                <li>Dedicated Account Manager</li>
                <li>Monthly Performance Review Meetings</li>
              </ul>
              <Link href="/contact">Contact Us</Link>

          </li>
          <li>
          <h2>Elite</h2>
            <p>
              <sup>$</sup> <span className="text-4xl">9,999.00</span><abbr title="United States Dollars">USD</abbr></p>
              <ul>
                <li>All Professional Package Features</li>
                <li>Machine Learning Implementation</li>
                <li>Big Data Analysis</li>
                <li>Advanced Data Visualization</li>
                <li>24/7 Priority Support</li>
                <li>Customized Data Training Workshops</li>
              </ul>
              <Link href="/contact">Contact Us</Link>

          </li>
          <li>
          <h2>World Class</h2>
            <p>
              <sup>$</sup> <span className="text-4xl">17,999.00</span><abbr title="United States Dollars">USD</abbr></p>
              <ul>
                <li>Fully Tailored Data Analysis Solutions</li>
                <li>AI and Deep Learning Integration</li>
                <li>Real-time Analytics</li>
                <li>High-Level Security Measures</li>
                <li>Dedicated Data Science Team</li>
                <li>On-Site Consultation and Support</li>
              </ul>
              <Link href="/contact">Contact Us</Link>

          </li>
        </ul>
    </article>
    </section>
  )
}

export default DataAnalysis