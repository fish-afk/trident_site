import React from 'react';
import { useCart } from 'react-use-cart';
import { useAlert } from 'react-alert';
import { useAuth } from "../Account/contexts/AuthContext"
import {useHistory , Link} from "react-router-dom"

export default function Item(props) {
  const {
    totalUniqueItems,
    addItem,
    removeItem,
    totalItems,
    cartTotal
  } = useCart();

  const history = useHistory();
  const {currentUser} = useAuth();

  const alert = useAlert();

  function checkauth(){
    if(currentUser == null || currentUser == undefined || currentUser == ""){
      return false;
    }

    return true;

  }
  function Addtocart(){
    const getauth = checkauth();

      if(getauth == true){
        try{
        
        let sanitem= Object.assign({}, props.item)
        sanitem["price"] = props.price;

        addItem(sanitem);
        alert.show("Added to cart " + props.name)
        }catch(err){
        alert.show(err)
        }
    }else{
      alert.show("Its better if you log in or create an account right now")
      history.push("login");
    }
  }

  return (

    <React.Fragment>
      
      <div className="cardprod card col-4 mt-4">
        <span><img src={props.img_src} width="50%"className="prods mt-4" style={{border: "1px solid aqua"}}/>
        <p className="mt-3 text-success">{props.name}</p><p className="text-success">${props.price}</p></span>
        
        <p>{props.description}</p>
        <center><button onClick={Addtocart} className="mb-3 addtocartbtn">Add to cart</button></center>

      </div>
      
        
    </React.Fragment>

  )
}
