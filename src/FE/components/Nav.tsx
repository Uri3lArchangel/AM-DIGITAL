"use client";
import Image from "next/image";
import React, { Component, useEffect, useState } from "react";
import logo from "../../../public/assets/img_220011/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import DrawerApp from "./antd/Drawer";
import NavMenuSideBar from "./subcomponents/NavMenuSideBar";
import Link from "next/link";
import nav from "../../../styles/nav.module.css";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdMiscellaneousServices, MdOutlineSupportAgent } from "react-icons/md";
import { FaVault } from "react-icons/fa6";


const Nav = () => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleMenu = () => {
    if (drawerState) {
      setDrawerState(false);
      return;
    }
    setDrawerState(true);
  };

  return (
    <> 
      <nav  id="nav_bar_main" className="fixed pr-2 md:pr-0 h-fit w-full md:w-[20%] md:block md:h-full top-0 z-20 pl-2 text-white bg-black">
        <ul
          className={
            " flex md:flex-col justify-between items-center md:items-start  "
          }
        >
          <li className="w-12 md:w-16 my-4 border-2 border-white rounded-full">
            <Link href="/">
              <Image
                src={logo}
                alt="am digital solutions logo"
                className="bg-black rounded-full "
              />
            </Link>
          </li>
          <ul id="navLinksUl"
            className={
              "hidden md:flex md:flex-col text-[13px] w-full my-8 " +
              nav.innerUl
            }
          >
            <li id="firstNavLink" >
              <Link href="/">
              <FaHome className="mx-2" size={20}/>
                <span>HOME</span>
              </Link>
            </li>
            <li id="secondNavLink" >
              <Link href="/portfolio">
              <FaBriefcase className="mx-2" size={20} />
                <span>PORTFOLIO</span>
              </Link>
            </li>
            <li id="thirdNavLink" >
              <Link href="/pricings">
              <RiMoneyDollarCircleFill className="mx-2" size={20} />
              <span>PRICINGS</span>
                
              </Link>
            </li>
            <li id="forthNavLink" >
              <Link href="/services" >
              <MdMiscellaneousServices className="mx-2" size={20} />
                <span>SERVICES</span>
              </Link>
            </li>
            <li id="fifthNavLink" >
              <Link href="/support">
   <MdOutlineSupportAgent className="mx-2" size={20} />
 <span>SUPPORT</span>
 </Link></li>
        <li id="sixthNavLink" >
          <Link href="/vault">
          <FaVault className="mx-2" size={20} />
          <span>VAULT</span>
        </Link>
        </li>
          </ul>
          <li className="md:hidden">
            <AiOutlineMenu
              size={30}
              onClick={toggleMenu}
              className=" cursor-pointer"
            />
          </li>
          <Link className={"hidden md:block text-black mt-12 "+nav.ContactLink} href="/contact">
            CONTACT US
          </Link>
        </ul>
      </nav>
      <DrawerApp
        drawerState={drawerState}
        drawerStateAct={setDrawerState}
        DrawerData={<NavMenuSideBar stateAction={setDrawerState} />}
      />
    </>
  );
};

export default Nav;
