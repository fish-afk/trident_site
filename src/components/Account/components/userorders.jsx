import React from 'react'
import Order from './order'
import UserDataservice from '../../../Http/Userdataservie'
import { useAuth } from "../contexts/AuthContext"
import {useState, useEffect} from "react"
import { useAlert } from 'react-alert'
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton';

export default function Userorders() {

  const [orders, setOrders] = useState([])
  const[loading, setLoading] = useState(false);
  const alert = useAlert()
  const {currentUser} = useAuth();

  useEffect(() => {
      get_orders()
  },[])

  const get_orders = async () => {
    setLoading(true)
    await UserDataservice.get_all_users_orders(currentUser.uid).then((response) => {
        console.log(response)
        setOrders(response.data)
        setLoading(false)
    }).catch(error => {
        alert.error("An error occured whilst loading orders")
    })
  }

  if(loading) {
      return(<div><SkeletonTheme animation="wave" baseColor="#f5deb3" highlightColor="#888"><Skeleton amount={1} height="70vh"/>
      <Skeleton /><Skeleton /> <Skeleton />
     </SkeletonTheme></div>);
  }

  const logic = () => {
  if(orders.length < 1){
      return(<div className="bg-dark container text-success mt-5 mb-5 p-5"><br/><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/><h1>You currently have no orders</h1></div>);
  }else{
      return(orders.map((order, key) => 
      <Order key={key} order={order} id={key} uid={currentUser.uid}/>
  ));
  }
}

  
  return (
    <center>
    <div className="container row bg-dark">
        {logic()}
    </div>
    </center>
  )
}
