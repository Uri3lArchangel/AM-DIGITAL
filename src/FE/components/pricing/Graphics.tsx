import React from "react";
import gr from "../../../../styles/pricing/graphics/gr.module.css";
import Link from "next/link";

function Graphics() {
  return (
    <section className="my-10 sm:my-40">
      <article className={gr.ArticleContainer_1}>
        <h2 className="text-2xl font-extrabold text-center underline sm:text-3xl">
        Graphics Design
      </h2>
      <ul>
        <li>
        <h2>Basic</h2>
        <p>
        <sup>$</sup><span className="text-4xl"> 199.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>Logo Design (1 concept)</li>
                <li>Business Card Design </li>
                <li>Basic Social Media Graphics</li>
                <li>2 Revisions</li>
                <li>Delivery in Standard Formats (JPEG, PNG)</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

        </li>
        <li>
        <h2>Startup</h2>
        <p>
        <sup>$</sup><span className="text-4xl">299.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>All Basic Package Features</li>
                <li>Logo Design (2 concepts)</li>
                <li>Brochure or Flyer Design</li>
                <li>1 Simple Short Animation</li>
                <li>3 Revisions</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

        </li>
        <li>
        <h2>Advance</h2>
        <p>
        <sup>$</sup><span className="text-4xl">399.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>All Startup Package Features</li>
                <li>Logo Design (3 concepts)</li>
                <li>Social Media Cover Images</li>
                <li>Poster or Banner Design</li>
                <li>High-Resolution Files Included</li>
                <li>4 Revisions</li>
                <li>Source Files (AI, PSD)</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

        </li>
        <li>
        <h2>Professional</h2>
        <p>
        <sup>$</sup><span className="text-4xl">499.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>All Advanced Package Features</li>
                <li>Logo Design (4 concepts)</li>
                <li>Packaging Design</li>
                <li>Custom Illustrations</li>
                <li>5 Revisions</li>
                <li>Brand Guidelines</li>
</ul>
<Link href="/contact">Contact Us</Link>

        </li>
        <li>
        <h2>Elite</h2>
        <p>
        <sup>$</sup><span className="text-4xl">699.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>All Professional Package Features</li>
                <li>Logo Design (5 concepts)</li>
                <li>Infographics Design</li>
                <li>eBook or Magazine Layout</li>
                <li>Professional Branding</li>
                <li>Priority Support</li>
                <li>Animated Graphics (GIFs)</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

        </li>
        <li>
        <h2>World Class</h2>
        <p>
        <sup>$</sup><span className="text-4xl">1,999.00</span> <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
                <li>Fully Tailored Graphic Design Solutions</li>
                <li>Branding Strategy Consultation Valid For 1 Month</li>
                <li>Video Production and Editing</li>
                <li>24/7 Priority Support Valid For 1 Month</li>
                <li>Dedicated Design Team Valid For 1 Month</li>
                <li>Remote Design Workshops and Training</li>
            </ul>
            <Link href="/contact">Contact Us</Link>

        </li>
      </ul>
      </article>
    </section>
  );
}

export default Graphics;
