import React from 'react'
import Links from "./Link"
import Icon from "../../Assets/icon.png"
import {GiBigDiamondRing} from 'react-icons/gi';

export default function Navbar() {
  return (
    <nav className="nav">
         
        <div className="logo">
          <h1 className="logotext">Trident Jewelers. <GiBigDiamondRing/> </h1>
        </div>
      
        <div className="links">
        <Links uri="/" content="Home" />
        <Links uri="/Products" content="Products"/>
        <Links uri="/Contactus" content="Contact_us"/>
        <Links uri="/MyAccount" content="Account"/>
        <Links uri="/Cart" content="Cart"/>
        </div>
        
    </nav>
  )
}
