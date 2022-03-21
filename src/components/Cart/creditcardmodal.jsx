import React from 'react'
import { useCart } from 'react-use-cart';
import { useAuth } from "../Account/contexts/AuthContext";
import UserDataService from "../../Http/Userdataservie"
import {useAlert} from "react-alert"

export default function Creditcardmodal() {

  const {currentUser} = useAuth();
  const alert = useAlert();
  const htmlForm = document.getElementById("billing-info")


  function checkFinalAuth(){
    if(currentUser == null || currentUser == undefined || currentUser == ""){
      window.location.href = "/login";
        alert.error("Please sign in or sign up first!");
    }
    return;
  }

  async function place_order(){
    let data = {}
    let order = JSON.parse(localStorage.getItem("react-use-cart"));
    let items = [...order.items];

    let dated_items = [];

    for(let i = 0; i< items.length; i++){
      items[i]["date"] = new Date();
      items[i]["order_status"] = "pending";
      items[i]["delivery_date"] = new Date();

      dated_items.push(items[i]);
    }

    data["orders"] = dated_items;
    data["uid"] = currentUser.uid;
    
    await UserDataService.post_Order(data).then((res) => {
      console.log(res)
      emptyCart()
      alert.show("Order placed successfully!")
    }).catch((error) => {
      console.log(error);
    });

  }

  const btn_logic = () => {
    return( cartTotal <= 0? <h1 className="guide text-success">Nothing to pay for : ) </h1>: <button type="submit" onClick={place_order} style={{width:"20vw", background: "aqua"}}>PAY ${cartTotal}</button>
          );
  }


  const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
  } = useCart();


  return (
      
    <React.Fragment>
        {checkFinalAuth()}
        <form className="container bg-dark mt-5 p-5 creditcard" id="billing-info">
        <center><h1 className="guide">Billing information</h1></center>
          <center>
          <div className="card my-4">
            <label htmlFor="card-number">Card number</label>
            <input required id="nameoncard" type="text" min="20"></input>
            <label htmlFor="nameoncard">Name on Card</label>
            <input required id="ad1"></input>
            <label htmlFor="ad1">Address line 1</label>
            <input required id="ad2"></input>
            <label htmlFor="ad2">Address line 2</label>
            <input required id="city"></input>
            <label htmlFor="city">City</label>
            <input required id="postalcode"></input>
            <label htmlFor="postalcode">Postal code</label>
            <input required id="card-number"></input>
          
          </div>
          </center>
          <center>{btn_logic()}</center>
          <center><h3 className="guide mt-4">ordered items will be delivered to this billing address</h3></center>
        </form>



    </React.Fragment>
  );
}
