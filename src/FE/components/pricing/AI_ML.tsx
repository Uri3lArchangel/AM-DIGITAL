import React from "react";
import ml from "../../../../styles/pricing/ML_AI/ml_ai.module.css";
import Link from "next/link";

function AI_ML() {
  return (
    <section className="my-10 sm:my-40">
      <article className={ml.ArticleContainer_1}>
        <h2 className="text-2xl font-extrabold text-center underline sm:text-3xl">
            AI/ML</h2>
        <ul>
          <li>
            <h2>Basic</h2>
            <p>
              <sup>$</sup> <span className="text-4xl"> 999.00</span>
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>Data Collection and Preprocessing</li>
              <li>Simple Machine Learning Model</li>
              <li>Basic Data Visualization</li>
              <li>Model Training and Testing</li>
              <li>Deployment on a Small Scale</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Startup</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">3,999.00</span>{" "}
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Basic Package Features</li>
              <li>Custom Machine Learning Algorithms</li>
              <li>Advanced Data Visualization</li>
              <li>Model Optimization</li>
              <li>Deployment on a Medium Scale</li>
              <li>Documentation</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Advanced</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">6,999.00</span>
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Startup Package Features</li>
              <li>Deep Learning Models</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Advanced Model Optimization</li>
              <li>Deployment on a Large Scale</li>
              <li>1 Month Performance Monitoring</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Professional</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">14,999.00</span>
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Advanced Package Features</li>
              <li>Custom AI Solutions</li>
              <li>Big Data Integration</li>
              <li>Automated Machine Learning (AutoML)</li>
              <li>Dedicated Project Manager</li>
              <li>Comprehensive Model Testing</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>Elite</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">12,550.00</span>
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>All Professional Package Features</li>
              <li>Reinforcement Learning</li>
              <li>Computer Vision</li>
              <li>Chatbot Development</li>
              <li>24/7 Priority Support Valid For 1 Month</li>
              <li>Continuous Model Improvement Valid For 1 Month</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <h2>World Class</h2>
            <p>
              <sup>$</sup>
              <span className="text-4xl">29,999.00</span>{" "}
              <abbr title="United States Dollars">USD</abbr>
            </p>
            <ul>
              <li>Fully Tailored AI and ML Solutions</li>
              <li>AI Strategy Consulting</li>
              <li>AI Integration with IoT and Edge Devices</li>
              <li>Advanced NLP Models</li>
              <li>Dedicated AI Research Team Valid For 2 Month</li>
              <li>Remote Consultation and Support Valid For 2 Month</li>
            </ul>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default AI_ML;
