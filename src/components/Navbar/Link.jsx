import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {AiOutlineShoppingCart } from 'react-icons/ai';
import {RiAccountCircleFill} from "react-icons/ri";
import {useCart} from "react-use-cart"

export default function Links(props) {

  const {totalUniqueItems} = useCart();
  if(props.content == "Cart"){
    return(
      <Link to={props.uri} id="cartlogo" className="link hover flexer"><span ><h5> <AiOutlineShoppingCart/>{totalUniqueItems
      }</h5></span>
    <div className="spaceplease">|</div>
    </Link>
    );
  }

  if(props.content == "Account"){
    return(
      <Link to={props.uri} className="link hover flexer">{props.content} <span> <RiAccountCircleFill/></span>
    <div className="spaceplease">|</div>
    </Link>

    );
  }
  return (
    <Link to={props.uri} className="link hover flexer">{props.content}
    <div className="spaceplease">|</div>
    </Link>
  )
}
