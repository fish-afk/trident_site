import React from 'react'
import UserDataService from '../../../Http/Userdataservie'

export default function Order(props) {

    const cancel_order = async () => {

    document.getElementById(props.id).innerHTML = `<h1 style="color: #139128;">Loading...</h1>`
    await UserDataService.Cancel_order(props.order._id,props.uid).then((res) => {

    if(res.status == 200){
        document.getElementById(props.id).innerHTML = `<h1 style="color: #baac0d;">Order cancelled</h1>`
    }
    }).catch((err) => {
    document.getElementById(props.id).innerHTML = `<h1 style="color: #ba0d0d;">An error occured</h1>`
    console.log(err);
    })
    }

       
  return (
    <div id={props.id} className="container bg-weird col-4">
        <img width="100%" src={props.order.img_src}></img>
        <p>${props.order.price}</p>
        <p>{props.order.name}</p>
        <p>{props.order.description}</p>
        <p>{props.order.order_status}</p>
        <button className="btn btn-danger" onClick={cancel_order}>Cancel Order</button>
    </div>
  )
}
