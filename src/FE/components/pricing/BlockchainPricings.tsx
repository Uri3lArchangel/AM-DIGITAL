import React from "react";
import bcp from "../../../../styles/pricing/blockchain/blockchainPricing.module.css";
import Link from "next/link";

const BlockchainPricings = () => {
  return (
    <section className="my-10 sm:my-40">
      <article className={bcp.ArticleContainer_1}>
        <h2 className="text-2xl font-extrabold text-center underline sm:text-3xl">
          Blockchain
        </h2>
        <ul>
          <li>
            <h2>Basic</h2>
            <p>
              <sup>$</sup> <span className="text-4xl">499.00</span><abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>Smart Contract Development (Simple)</li>
              <li>Basic Token Creation</li>
              <li>Wallet Integration</li>
              <li>Deployment On Mainnet (excluding Ethereum) </li>
              <li>Testing and Debugging</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Startup</h2>
            <p>
              <sup>$</sup><span className="text-4xl">1,999.00</span><abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Basic Package Features</li>
              <li>Smart Contract Optimization</li>
              <li>Custom Token Standards</li>
              <li>API Integration</li>
              <li>Deployment On Mainnet (Including Ethereum) </li>
              <li>Basic Security Audit</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Advance</h2>
            <p>
              <sup>$</sup> <span className="text-4xl">4,999.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Startup Package Features</li>
              <li>Cross-Chain Integration</li>
              <li>DeFi (Decentralized Finance) Application Development</li>
              <li>Advanced Security Audit </li>
              <li>Customizable Consensus Mechanisms </li>
          
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Professional</h2>
            <p>
              <sup>$</sup><span className="text-4xl">7,999.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Advanced Package Features</li>
              <li>Private Blockchain Development</li>
              <li>Smart Contract Auditing</li>
              <li>Scalability Solutions</li>
              <li>Dedicated Project Manager</li>
              <li>Comprehensive Security Audit</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Elite</h2>
            <p>
              <sup>$</sup><span className="text-4xl">14,999.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Professional Package Features</li>
              <li>Enterprise Blockchain Solutions</li>
              <li>Cross-Platform Integration</li>
              <li>Complex dApps (Decentralized Applications)</li>
              <li>24/7 Priority Support Valid For 1 Month</li>
              <li>1 Month Monitoring and Updates</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>World Class</h2>
            <p>
              <sup>$</sup><span className="text-4xl">99,999.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>Fully Tailored Blockchain Solutions</li>
              <li>Blockchain Research and Development</li>
              <li>Interoperability Solutions</li>
              <li>High-Level Security Measures</li>
              <li>Dedicated Blockchain Development Team</li>
              <li>On-Site Consultation and Support</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default BlockchainPricings;
