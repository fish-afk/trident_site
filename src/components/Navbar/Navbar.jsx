import React from 'react'
import Links from "./Link"
export default function Navbar() {
  return (
    <nav className="nav">
         
         <div className="logo">
           <h1 className="logotext">Trident Jewelers.</h1>
         </div>
        
        <div className="links">
        <Links content="Home"/>
        <Links content="About-us"/>
        <Links content="Products"/>
        <Links content="Contact-us"/>
        <Links content="Cart"/>
        </div>
        
    </nav>
  )
}
