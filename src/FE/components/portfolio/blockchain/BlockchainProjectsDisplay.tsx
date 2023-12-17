"use client";
import React from "react";
import bc from "../../../../../styles/portfolio/blockchain.module.css";

const BlockchainProjectsDisplay = () => {
  const addButtonClassName = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;

    if (!id) {
      return;
    }
    const div = document.querySelector(`#${id} > div`) as HTMLDivElement;
    div.style.filter = "blur(5px)";
    const button = document.querySelector(
      `#${id}  button`
    ) as HTMLButtonElement;
    button.style.display = "block";
    button.classList.add("active-bc-btn");
  };
  const removeButtonClassName = (e: React.MouseEvent) => {
    const id = e.currentTarget.id;

    if (!id) {
      return;
    }
    const div = document.querySelector(`#${id} > div`) as HTMLDivElement;
    div.style.filter = "blur(0px)";
    const button = document.querySelector(
      `#${id}  button`
    ) as HTMLButtonElement;
    button.style.display = "none";

    button.classList.remove("active-bc-btn");
  };
  return (
    <section className={bc.SectionContainer_0}>
      <div
        className={"relative lg:w-[70%] mx-auto "}
        id="first"
        onMouseEnter={addButtonClassName}
        onMouseLeave={removeButtonClassName}
      >
        <div className={bc.DivCard_2_0}>
          <p className="absolute bottom-20 px-4 text-center text-white text-3xl font-semibold w-full lg:left-[5%] lg:bottom-[50%] lg:w-fit lg:text-4xl">
            {" "}
            ERC20 Security Token <br />{" "}
            <span className="text-xl block lg:text-2xl">
              {" "}
              - arbitrium one Blockchain{" "}
            </span>
          </p>
        </div>
        <button>Read More</button>
      </div>
      <div
        className={"relative lg:w-[70%] mx-auto "}
        id="second"
        onMouseEnter={addButtonClassName}
        onMouseLeave={removeButtonClassName}
      >
        <div className={bc.DivCard_2_1}>
          <p className="absolute bottom-20 px-4 text-center text-cyan-600  text-3xl font-semibold w-full lg:left-[5%] lg:bottom-[50%] lg:w-fit lg:text-4xl lg:text-cyan-600">
            {" "}
            Decentralized Exchange <br />{" "}
            <span className="text-xl block lg:text-2xl lg:text-cyan-600">
              - arbitrium one Blockchain{" "}
            </span>
          </p>
        </div>
        <button>Read More</button>
      </div>
      <div
        className={"relative lg:w-[70%] mx-auto "}
        id="third"
        onMouseEnter={addButtonClassName}
        onMouseLeave={removeButtonClassName}
      >
        <div className={bc.DivCard_2_2}>
          <p className="absolute bottom-20 px-4 text-center text-black  text-3xl font-semibold w-full lg:left-[5%] lg:bottom-[50%] lg:w-fit lg:text-4xl">
            ZK-Snark Powered <br /> Mixer <br />{" "}
            <span className="text-xl block lg:text-2xl lg:text-black">
              - ethereum Blockchain{" "}
            </span>
          </p>
        </div>
        <button>Read More</button>
      </div>
      <div
        className={"relative lg:w-[70%] mx-auto "}
        id="forth"
        onMouseEnter={addButtonClassName}
        onMouseLeave={removeButtonClassName}
      >
        <div className={bc.DivCard_2_3}>
          <p className="absolute bottom-20 px-4 text-center text-white  text-3xl font-semibold w-full lg:left-[5%] lg:bottom-[50%] lg:w-fit lg:text-4xl lg:text-white">
            Decentralised lottery game <br />{" "}
            <span className="text-xl block lg:text-2xl lg:text-white">
              - bsc Blockchain{" "}
            </span>
          </p>
        </div>
        <button>Read More</button>
      </div>
      <div
        className={"relative lg:w-[70%] mx-auto "}
        id="fifth"
        onMouseEnter={addButtonClassName}
        onMouseLeave={removeButtonClassName}
      >
        <div className={bc.DivCard_2_4}>
          <p className="absolute bottom-20 px-4 text-center text-red-600  text-3xl font-semibold w-full lg:left-[5%] lg:bottom-[50%] lg:w-fit lg:text-4xl lg:text-white">
            STO (Primary and Seconday Market) <br />{" "}
            <span className="text-xl block lg:text-2xl lg:text-white">
              - arbitrium one Blockchain{" "}
            </span>
          </p>
        </div>
        <button>Read More</button>
      </div>
      {/* <div className={bc.DivContainer_1_5}>
        <p className='absolute bottom-5 px-4 text-center text-black text-3xl font-semibold w-full'>STO (Primary and Seconday Market) <br /> <span className='text-xl block '> - arbitrium one Blockchain </span></p>
        </div> */}
    </section>
  );
};

export default BlockchainProjectsDisplay;
