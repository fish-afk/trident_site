import React from 'react'
import Links from "./Link"
export default function Navbar() {
  return (
    <nav className="nav">
         
        <div className="logo">
          <h1 className="logotext">Trident Jewelers.</h1>
        </div>
      
        <div className="links">
        <Links uri="/" content="Home" />
        <Links uri="/Aboutus" content="About-us"/>
        <Links uri="/Products" content="Products"/>
        <Links uri="/Contactus" content="Contact-us"/>
        <Links uri="/Cart" content="Cart"/>
        </div>
        
    </nav>
  )
}
