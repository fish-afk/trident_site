import React from 'react';
import { useCart } from 'react-use-cart';
import {BsTrash, BsCashCoin} from "react-icons/bs"
import {Link} from "react-router-dom"
import { useAuth } from "../Account/contexts/AuthContext";
import {useAlert} from "react-alert"

export default function Cart() {
  const {currentUser} = useAuth();
  const alert = useAlert();
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

    function checkFinalAuth(){
      if(currentUser == null || currentUser == undefined || currentUser == ""){
        return false;
      }
  
      return true;
  
    }

    const response = () => {
      let authie = checkFinalAuth();

      if(authie == false){
        
        window.location.href = "/login"
        alert.error("Please sign in or sign up first!")
        
      }
      
    }

    if((isEmpty)) 
    {return(<center><h1 className="m-5">Your cart is empty</h1>
    <img className="container" alt="cart-image" src="https://store.printville.net/content/images/empty-cart.png" style={{width:"25rem"}}>
      </img></center>)}
    
    return (
    <React.Fragment>
   <section className="py-4 container">
            <div className="row justify-content-center mt-5">
            <div className="col-12">
                
                <table className="table table-responsive table-dark text-white fw-bold fs-3">
                    <tbody>
                    <tr>
                        <td>Unique items: {totalUniqueItems}</td>
                        <td className="ps-5">Total items: {totalItems} totalprice: K{cartTotal}</td>
                    </tr>
                    </tbody>
                </table>
                
                
                <table className="table table-dark table-responsive-sm table-striped table-hover m-0">
                    <thead  className="fw-bold text-warning"><tr><td>Item</td><td>Desc.</td><td>Price</td><td>Qty</td><td>Color</td><td>Options</td></tr></thead>
                    <tbody>
                    {items.map((item, index)=>{
                        let price = parseInt(item.price);
                        return(
                        <tr key={index}>
                            <td>
                                <img className="img_styles" alt="item_image" width="100%" src={item.img_src}></img>
                            </td>
                            <td>
                                
                                {`${item.description}`}
                            </td>
                            <td className="text-success">
                                ${price}
                            </td>
                            <td className="text-succcess fw-bold">
                                {item.quantity}
                            </td>
                            <td className="text-succcess fw-bold">
                                {String(item.color).toLocaleUpperCase()}
                            </td>
                            <td>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-warning ms-2 fw-bold">+</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-warning ms-2 fw-bold">-</button>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger ms-2">Remove</button>
                            </td>

                        </tr>)
                    })}
                    <tr>

                    </tr>
                    </tbody>
                </table>
                <center className="mt-3">
                <button onClick={emptyCart} className="btn btn-danger fw-bold ms-5">Empty the Cart <BsTrash/></button>
                <button onClick={response} className="btn btn-success mx-4 text-dark"><Link style={{textDecoration: "none", color: "black"}} to="/payment">
                  Purchase Items <BsCashCoin/></Link></button>
                </center>
            </div>
            </div>
            
    </section>
    <div className="container fill-in"></div>
    </React.Fragment>

    )



}