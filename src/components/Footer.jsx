import React from 'react';
import {ImInstagram} from "react-icons/im"
import {AiOutlineFacebook} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {Link} from "react-router-dom"
import { useAlert } from 'react-alert';

export default function Footer() {

  const alert = useAlert();
  const submit = async ( e ) => {

    e.preventDefault();

    const useremail = document.getElementById("newsemailer").value;

    let data = {
      email: useremail,
    }
    //sending to server
    if(useremail != null && useremail.length > 5){

      await fetch("https://data.mongodb-api.com/app/trident-jewels-xjpws/endpoint/newsubscriber", {
        
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify(data),

        headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
        
        // Adding headers to the request
    }).then(response => response.json())
 
    // Displaying results to user
    .then(json => {if(json == "email subscriber already exists"){
        alert.error("This email subscriber already exists!");
      }else{
        alert.success("you have successfully subscribed!")
      }})
    .catch((err) => {alert.error(err);})

    }else{
      alert.error("Email cannot be null")
    }

  }
  function myFunction() {
    var x = document.getElementById("smyTopnav");
    if (x.className === "stopnav") {
      x.className += " responsive";
    
    } else {
      x.className = "stopnav";
    }
  }

  
  return (
    <React.Fragment>

        <div className="maindiv">
        <a className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
          <div className="col1 cols">
            <p><Link to=""><a className="footerlinks">- Meet us</a></Link></p>
            <p><Link to=""><a className="footerlinks">- Where we are located</a></Link></p>
            <p><Link to=""><a className="footerlinks">- About us</a></Link></p>
            <p><Link to="/pricingpatterns"><a className="footerlinks">- Our pricing patterns</a></Link></p>
            <p><Link to=""><a className="footerlinks">- Customer support</a></Link></p>


          </div>

          <div className="col2 cols">
         
          <p><Link to="/privacy-policies"><a className="footerlinks">- Privacy & Policies</a></Link></p>
            <p><Link to=""><a className="footerlinks">- Terms of service</a></Link></p>
            <p><Link to=""><a className="footerlinks">- Conditions</a></Link></p>
            <p><Link to=""><a className="footerlinks">- Misc</a></Link></p>
            <p><Link to=""><a className="footerlinks">- Payment methods</a></Link></p>
            <p><Link to=""><a className="footerlinks">- API</a></Link></p>
            <p><Link to=""><a className="footerlinks">- Refund policies</a></Link></p>
            
          </div>

          <form className="newsletter">
            <p className="footerguide"> Subscribe to our weekly newsletter </p>
            <input type="email" id="newsemailer" placeholder="Email"></input>
            <button onClick={submit} type="submit" id="sub">Subscribe</button>
          </form>


          <div className="cols forth">
            
            <a className="socialsmargin"><ImInstagram/></a>
            <a id="fbbb" className="socialsmargin"><AiOutlineFacebook/></a>
            <a className="socialsmargin"><FiTwitter /></a>
          </div>
        </div>
    </React.Fragment>
  )
}



