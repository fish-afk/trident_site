import React from 'react'
import Links from "./Link"
import Icon from "../../Assets/icon.png"
import {GiBigDiamondRing} from 'react-icons/gi';


export default function Navbar() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    
    } else {
      x.className = "topnav";
    }
  }
  return (
    

        <nav className="topnav" id="myTopnav">
          <h1 className="logotext">Trident Jewelers. <GiBigDiamondRing/> </h1>
          <Links uri="/Cart" content="Cart"/>
          <Links uri="/Dashboard" content="Account"/>
          <Links uri="/Contactus" content="Contact_us"/>
          <Links uri="/Products" content="Products"/>
          <Links uri="/" content="Home" />
        
        <a className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
        </nav>
        
   
  )
}
