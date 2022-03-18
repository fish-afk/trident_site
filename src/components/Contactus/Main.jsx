import React from 'react'
import "../../css/contactus.css"

export default function Contactus_main() {
  return (
    <React.Fragment>
       <div class="container">
        <h1>Connect With Us</h1>
        <p>
            We would love to hear from you. Feel free to get in touch with us at anytime!
        </p>
        <div class="contact-box">
            <div class="contact-left">
                <h3>Send Your Message</h3>
                <form>
                    <div class="input-row">
                        <div class="input-group1">
                            <label>Name</label>
                            <input type="text" className="inputs" placeholder="Your Name"/>
                        </div>
                        <div class="input-group2">
                            <label>Email</label>
                            <input type="text" className="inputs" placeholder="youremail@example.com"/>
                        </div>
                    </div>
                    
                    <label>Message</label>
                    <textarea rows="5" placeholder="Enter Your Message"></textarea>

                    <button className="send" type="submit">SEND MESSAGE</button>

                </form>


            </div>
            <div class="contact-right">
                <h3>Reach Us</h3>

                <table>
                    <tr>
                        <td>Email</td>
                        <td>ouremail@example.com</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>+260978614774</td>
                    </tr>
                    
                </table>


            </div>
        </div>
    </div>


    </React.Fragment>
  )
}
