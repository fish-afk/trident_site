import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Main_Home from './components/Home/Main';
import Account_main from './components/Account/Main';
import Cart_main from './components/Cart/Main';
import Contactus_main from './components/Contactus/Main';
import Products_Main from './components/Products/Main';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import "./css/App.css";
import "./css/Body.css"
import "./css/Main.css"

export default function App() {

  return (
   <React.Fragment>

    <Navbar/>
    <Route exact path="/" component={Main_Home}/>
      <Route exact path="/Products" component={Products_Main}/>
      <Route exact path="/Contactus" component={Contactus_main}/>
      <Route exact path="/MyAccount" component={Account_main}/>
      <Route exact path="/Cart" component={Cart_main}/>
      
    <Footer/>

    </React.Fragment>
  )

  
}
