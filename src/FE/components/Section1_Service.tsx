"use client";
import React, { use, useEffect } from "react";
import service from "../../../styles/Home/Services/service.module.css";
import Link from "next/link";
import { servicescardcalculation } from "../functions/helpers";

function Section1_Service() {
 return(
  <section className="bg-black text-white py-12">
    <h1 className="text-2xl font-extrabold text-center">What are our standards</h1>
    <div className={service.innerDiv}>
      <div className={service.topContainer}>
        <div className={service.leftImage} id="shield"></div>
        <div className={service.rightContent}>
          <h2 className=" font-extrabold text-2xl mb-2">Security</h2>
          <p>We perform intense security test on the service we provide to ensure top security</p>
        </div>
      </div>
      <div className={service.bottomContainer}>
       <div className={service.leftContent}>
      <h2 className=" font-extrabold text-2xl mb-2">SEO Optimization</h2>
      <p>Ensuring your website / webapp is properly crawled by search engines by using semantic tags and solid metadata</p>
      </div>
      <div className={service.rightImage} id="seo"></div>
   
      </div>
      <div className={service.topContainer}>
        <div className={service.leftImage} id="testing"></div>
        <div className={service.rightContent}>
          <h2 className=" font-extrabold text-2xl mb-2">FULL CODE TESTING</h2>
          <p>we test thoroughly to ensure the code works the way it should</p>
        </div>
      </div>
      <div className={service.bottomContainer}>
       <div className={service.leftContent}>
      <h2 className=" font-extrabold text-2xl mb-2">EXPERT ADVICE</h2>
      <p>The customer is always right may not be the case 100% of the time, we are here to review your choices and provide advice where needed</p>
      </div>
      <div className={service.rightImage} id="advice"></div>
   
      </div>
    </div>
  </section>
 )
}

export default Section1_Service;
