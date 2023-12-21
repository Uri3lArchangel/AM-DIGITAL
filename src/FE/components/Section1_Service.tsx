"use client";
import React, { use, useEffect } from "react";
import service from "../../../styles/Home/Services/service.module.css";
import Link from "next/link";
import { servicescardcalculation } from "../functions/helpers";

function Section1_Service() {
  useEffect(() => {
    const card1 = document.getElementById("div_card_1") as HTMLDivElement;
    const card2 = document.getElementById("div_card_2") as HTMLDivElement;
    const card3 = document.getElementById("div_card_3") as HTMLDivElement;
    const card4 = document.getElementById("div_card_4") as HTMLDivElement;

    card1.addEventListener("mousemove", (e) => {
   const x= Number(Math.abs( e.x - card1.getBoundingClientRect().left).toFixed(0))
    const y= Number(Math.abs(e.y - card1.getBoundingClientRect().top).toFixed(0))
   const height = card1.getBoundingClientRect().height;
   const width = card1.getBoundingClientRect().width;

    const position = servicescardcalculation(x,y,width,height)
// if(position == "tl") {card1.style.transform="rotateY(15deg) rotateX(15deg)"}
// if(position == "tc") {card1.style.transform="rotateX(15deg)"}
// if(position == "tr") {card1.style.transform="rotateY(-15deg) rotateX(15deg)"}
// if(position == "ml") {card1.style.transform="rotateY(15deg)"}
// if(position == "mc") {card1.style.transform="translateZ(-15px)"}
// if(position == "mr") {card1.style.transform="rotateY(-15deg)"}
// if(position == "bl") {card1.style.transform="rotateY(15deg) rotateX(-15deg)"}
// if(position == "bc") {card1.style.transform="rotateX(-15deg)"}
// if(position == "br") {card1.style.transform="rotateY(-15deg) rotateX(-15deg)"}


    

    });
    card2.addEventListener("mousemove", (e) => {
        const x= (Math.abs( e.x - card1.getBoundingClientRect().left).toFixed(0))
        const y= Math.abs(e.y - card1.getBoundingClientRect().top).toFixed(0)
        const height = card2.getBoundingClientRect().height;
        const width = card2.getBoundingClientRect().width;
    });
    card3.addEventListener("mousemove", (e) => {
        const x= (Math.abs( e.x - card1.getBoundingClientRect().left).toFixed(0))
        const y= Math.abs(e.y - card1.getBoundingClientRect().top).toFixed(0)
        const height = card3.getBoundingClientRect().height;
        const width = card3.getBoundingClientRect().width;
    });
    card4.addEventListener("mousemove", (e) => {
        const x= (Math.abs( e.x - card1.getBoundingClientRect().left).toFixed(0))
    const y= Math.abs(e.y - card1.getBoundingClientRect().top).toFixed(0)
    const height = card4.getBoundingClientRect().height;
    const width = card4.getBoundingClientRect().width;
    });
  }, []);


  const resetTransform=(e:React.MouseEvent<HTMLDivElement>)=>{

e.currentTarget.style.transform="none"
  }
  return (
    <section className={"text-center py-20 " + service.SectionContainer_0}>
      <h1 className=" text-center text-black text-[20px] font-extrabold">
        WE OFFER A WIDE RANGE OF SERVICES
      </h1>
      <div className={service.innerDivCardsContainer} id="card_container" onMouseLeave={resetTransform}>
        <article className={service.DivCard_1} id="div_card_1">
          <div className={service.innerBorderLiner}></div>

          <h2>WRITING CUSTOM SMART CONTRACTS</h2>
          <p className="my-4">
            WE PROVIDE CUSTOM SMART CONTRACTS ACCORDING TO YOUR SPECIFICATIONS
            AND NEEDS, WITH LATEST UPDATES, PATCHES AND IMPLEMENTATIONS.
            <br />
            <br />
            <span className="font-bold"># SOLIDITY BASED</span>
          </p>
        </article>
        <article className={service.DivCard_1} id="div_card_2">
          <div className={service.innerBorderLiner}></div>

          <h2>
            BUILDING FULLSTACK WEB3 WEB AND MOBILE APPS FOR THE BLOCKCHAIN
          </h2>
          <p className="my-4">
            WE BUILD HIGH STANDARD FULL STACK WEB AND MOBILE SOLUTIONS FOR THE
            BLOCKCHAIN (WEB3)
            <br />
            <br />
            <span className="font-bold">
              # SOLIDITY BASED <br /> # PYTHON BASED <br /> #JAVASCRIPT /
              TYPESCRIPT BASED <br /> #DART BASED (FLUTTER)
            </span>
          </p>
        </article>
        <article className={service.DivCard_1 + " ai"} id="div_card_3">
          <div className={service.innerBorderLiner}></div>
          <h2>BUILDING A.I AND WEB2 BASED APPS FOR WEB AND MOBILE</h2>
          <p className="my-4">
            WE WILL HELP BUILD STANDARD A.I SOLUTIONS FROM EXISTING MODELS LIKE
            GPT-3 OR HELP YOU BUILD AND TRAIN CUSTOM MODELS, ALONG WITH OTHER
            WEB2 SOLUTIONS <br />
            <br />
            <span className="font-bold">
              # PYTHON BASED <br /> #JAVASCRIPT / TYPESCRIPT BASED <br /> #DART
              BASED (FLUTTER)
            </span>
          </p>
        </article>
        <article className={service.DivCard_1} id="div_card_4">
          <div className={service.innerBorderLiner}></div>

          <h2>GRAPHICS DESIGNING AND STREAMERS GRAPHICS</h2>
          <p className="my-4">
            WE DESIGN LOGOS, FLYERS DESIGNS AND BROCHURE, SOCIAL MEDIA COVER,
            INFOGRAPHICS DESIGN, STREAMERS BANNER INTRO AND OUTRO DESIGNS
            <br />
            <br />
          </p>
        </article>
      </div>
      <button>
        <Link href={"#"}>Our Pricings</Link>
      </button>
    </section>
  );
}

export default Section1_Service;
