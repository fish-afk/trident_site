import React from 'react';

export default function Footer() {
  return (
    <React.Fragment>

        <div className="maindiv">
          <div className="col1 cols">
            <p><a className="footerlinks" href="">- Meet us</a></p>
            <p><a className="footerlinks" href="">- Where we are located</a></p>
            <p><a className="footerlinks" href="">- About us</a></p>
            <p><a className="footerlinks" href="">- Our pricing patters</a></p>
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
            <button type="submit">Subscribe</button>
          </form>



        </div>
    </React.Fragment>
  )
}
