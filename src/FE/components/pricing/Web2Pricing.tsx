import React from "react";
import w2 from "../../../../styles/pricing/web2/web2.module.css";
import Link from "next/link";

const Web2Pricing = () => {
  return (
    <section className="my-10 sm:my-40">
      <article className={w2.ArticleContainer_1}>
        <h2 className="text-2xl font-extrabold text-center underline sm:text-3xl">
          Web2</h2>
        <ul>
          <li>
            <h2>Basic</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">399.00</span>{" "}
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>Static Website Development (4-10 pages)</li>
              <li>Basic Contact Form</li>
              <li>Max 3 Stock Images</li>
              <li>Content Management System (CMS)</li>
              <li>Basic SEO Optimization</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Startup</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">699.00</span>{" "}
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Basic Package Features</li>
              <li>Dynamic Content Integration</li>
              <li>Responsive Design</li>
              <li>User Registration and Login</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Advance</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">1,990.00</span>
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Startup Package Features</li>
              <li>Social Media Integration</li>
              <li>Google Analytics Setup</li>
              <li>E-commerce Integration (Limited Products)</li>
              <li>Blog/News Section</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Professional</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">4,999.00</span>{" "}
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Advanced Package Features</li>
              <li>Full E-commerce Integration (Unlimited Products)</li>
              <li>Enhanced SEO and Performance Optimization</li>
              <li>Advanced Forms and Surveys</li>
              <li>Membership and Subscription Systems</li>
              <li>Custom Database Integration</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Elite</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">7,999.00</span>{" "}
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Professional Package Features</li>
              <li>Advanced Analytics and Reporting</li>
              <li>Custom Web Application Development</li>
              <li>API Integrations</li>
              <li>User Experience (UX) Design Consultation</li>
              <li>Advanced Security Measures</li>
              <li>Comprehensive Testing</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>World Class</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">9,999.00</span>
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>Fully Tailored Web 2.0 Solutions</li>
              <li>Progressive Web App (PWA) Development</li>
              <li>Complex System Integration</li>
              <li>High-Level Security and Compliance</li>
              <li>Dedicated Development Team</li>
              <li>High Quality UX</li>
              <li>Ongoing Maintenance and Support Valid For 1 Month</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Web2Pricing;
