import React from 'react'
import mobile from '../../../../styles/pricing/mobile/mobile.module.css'
import Link from 'next/link'

function Mobile() {
  return (
    <section className="my-10 sm:my-40">
        <article className={mobile.ArticleContainer_1}>
        <h2 className="text-2xl font-extrabold text-center underline sm:text-3xl">
            Mobile Development</h2>
        <ul>
            <li>
            <h2>Basic</h2>
            <p>
            <sup>$</sup><span className="text-4xl">799.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>Simple App Design (1-4 screens)</li>
                <li>Basic User Interface (UI) and User Experience (UX)</li>
                <li>Core Functionality Implementation</li>
                <li>Development for a Single Platform (iOS or Android)</li>
                <li>Testing and Debugging</li>
                <li>Deployment to App Store or Google Play Store</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

            </li>
            <li>
            <h2>Startup</h2>
            <p>
            <sup>$</sup><span className="text-4xl">1,499.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>All Basic Package Features</li>
                <li>Custom App Design (3-6 screens)</li>
                <li>UI/UX Optimization</li>
                <li>Development for Both iOS and Android</li>
                <li>Integration with Basic APIs</li>
                <li>User Authentication</li>
                <li>Push Notifications</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

            </li>
            <li>
            <h2>Advance</h2>
            <p>
            <sup>$</sup><span className="text-4xl">4,999.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>All Startup Package Features</li>
                <li>Complex App Design (6-10 screens)</li>
                <li>Integration with Third-party APIs</li>
                <li>Offline Functionality</li>
                <li>Performance Optimization</li>
                <li>Advanced Security Features</li>
                <li>In-App Purchases</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

            </li>
            <li>
            <h2>Professional</h2>
            <p>
            <sup>$</sup><span className="text-4xl">9,999.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>All Advanced Package Features</li>
                <li>Custom Backend Development (Server/API)</li>
                <li>User Analytics Integration</li>
                <li>Social Media Integration</li>
                <li>Multi-language Support</li>
                <li>App Store Optimization (ASO)</li>
                <li>Dedicated Project Manager Valid For 1 Month</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

            </li>
            <li>
            <h2>Elite</h2>
            <p>
            <sup>$</sup><span className="text-4xl">20,499.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>All Professional Package Features</li>
                <li>AR/VR Integration</li>
                <li>Complex Database Integration</li>
                <li>Real-time Chat/Video Features</li>
                <li>Continuous Integration/Continuous Deployment (CI/CD) Valid For 1 Month</li>
                <li>Comprehensive Quality Assurance</li>
            </ul>

            <Link href="/contact">Contact Us</Link>

            </li>
            <li>
            <h2>Elite</h2>
            <p>
            <sup>$</sup><span className="text-4xl">59,999.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>Fully Tailored Mobile App Solutions</li>
                <li>Cutting-edge Technologies (Blockchain, AI, IoT)</li>
                <li>Enterprise-level Solutions</li>
                <li>High-Level Security Measures</li>
                <li>Dedicated Development Team</li>
                <li>Remote Consultation and Support</li>
                <li>Priority Maintenance and Updates</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

            </li>
        </ul>
        </article>
    </section>

  )
}

export default Mobile