import Link from 'next/link'
import React from 'react'
import navdata from '../../../../styles/Home/Header/nav.module.css'

interface Props{
  stateAction:React.Dispatch<React.SetStateAction<boolean>>
}

const NavMenuSideBar = ({stateAction}:Props) => {
const closeDrawer = ()=>{
  stateAction(false)
}
  return (
    <aside className={navdata.asideContainer_0}>
    <ul>
        <li>
          <Link onClick={closeDrawer} href="/">
          Home
          </Link>
          </li>
        <li>
        <Link onClick={closeDrawer} href="/portfolio">
          Portfolio
          </Link>
        </li>
        <li>
        <Link onClick={closeDrawer} href="/pricings">
          pricings
          </Link>
          </li>
        <li>
        <Link onClick={closeDrawer} href="/services">
          Our Services
          </Link>
          </li>
        <li>
        <Link onClick={closeDrawer} href="/about">
          Vault
          </Link>
          </li>
        <li>
            <button>
              <Link onClick={closeDrawer} href="/contact">CONTACT US</Link>
            </button>
        </li>
    </ul>
    </aside>
  )
}

export default NavMenuSideBar