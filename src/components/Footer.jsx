import React from 'react';
import {ImInstagram} from "react-icons/im"
import {AiOutlineFacebook} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"

export default function Footer() {
  return (
    <React.Fragment>

        <div className="maindiv">
          <div className="col1 cols">
            <p><a className="footerlinks" href="">- Meet us</a></p>
            <p><a className="footerlinks" href="">- Where we are located</a></p>
            <p><a className="footerlinks" href="">- About us</a></p>
            <p><a className="footerlinks" href="">- Our pricing patterns</a></p>
            <p><a className="footerlinks" href="">- Customer support</a></p>


          </div>

          <div className="col2 cols">
          <p><a className="footerlinks" href="">- Policies</a></p>
            <p><a className="footerlinks" href="">- Terms of service</a></p>
            <p><a className="footerlinks" href="">- Conditions</a></p>
            <p><a className="footerlinks" href="">- Misc</a></p>
            <p><a className="footerlinks" href="">- Payment methods</a></p>
            <p><a className="footerlinks" href="">- API</a></p>
            <p><a className="footerlinks" href="">- Refund policies</a></p>
            <p><a className="footerlinks" href="">- Privacy</a></p>


          </div>

          <form className="newsletter">
            <p className="footerguide"> Subscribe to our weekly newsletter </p>
            <input type="email" className="" placeholder="Email"></input>
            <button type="submit" id="sub">Subscribe</button>
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
