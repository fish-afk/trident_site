import React from 'react'
import "../../css/contactus.css"
import { send } from '@emailjs/browser';
import { useAlert } from 'react-alert';
import {useHistory} from "react-router-dom"

export default function Contactus_main() {

    const alert = useAlert()
    const history = useHistory();
    const send_email = async () => {

        
        let KEYS = {
            
            secret: "secret"
              
        }

        const fromname = document.getElementById("sender-name").value
        const message = document.getElementById("message-text").value
        const useremail = document.getElementById("sender-email").value
        
        let params ={
            from_name :fromname ,
            to_name :" Secretary",
            message : message,
            user_email: useremail,
        }

        if(fromname != null && message.length > 20 && useremail != null) {
         document.getElementById("send-button").outerHTML = `<h2>Loading...</h2>`
        await send(KEYS.service_key, KEYS.template_key, params, KEYS.user_key ).then((response) => { if(response.status == 200){
            alert.success("You message was received on our end\n We usually reply within 1-2 business days");
            history.push("/")
        }})
        .catch((error) => 
        { alert.show(error)})
        }else{
            document.getElementById("sender-name").style.border = "1px solid red";
            document.getElementById("message-text").style.border = "1px solid red";
            document.getElementById("sender-email").style.border = "1px solid red";

            alert.error("Name cannot null, \n Email cannot be null, \n & message cannot be less than 20 characters...")

        }
        
    }

  return (
    <React.Fragment>
       <div className="containerb">
        <h1 className="guide2">Connect With Us</h1>
        <p>
            We would love to hear from you. Feel free to get in touch with us at anytime!
        </p>
        <div className="contact-box">
            <div className="contact-left">
                <h3>Send Your Message :</h3>
                <form>
                    <div className="input-row">
                        <div className="input-group1">
                            <label>Name</label>
                            <input type="text" className="inputs" id="sender-name" placeholder="Your Name"/>
                        </div>
                        <div className="input-group2">
                            <label>Email</label>
                            <input type="text" className="inputs" id="sender-email" placeholder="youremail@example.com"/>
                        </div>
                    </div>
                    
                    <label>Message</label>
                    <textarea rows="5" id="message-text" placeholder="Enter Your Message"></textarea>

                    <button className="send" id="send-button" onClick={send_email} type="button">SEND MESSAGE</button>

                </form>


            </div>
            <div className="contact-right">
                <h3>Reach Us :</h3><br/>

                <table>
                    <tr>
                        <td>Email: ouremail@example.com</td>
                    </tr>
                    <br/>
                    <tr>
                        <td>Phone Number: +260978614774</td>
                    </tr>
                    
                </table>


            </div>
        </div>
    </div>


    </React.Fragment>
  )
}
