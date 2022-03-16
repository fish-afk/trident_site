import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Main_Home from './components/Home/Main';
import Account_main from './components/Account/components/App';
import Cart_main from './components/Cart/Main';
import Contactus_main from './components/Contactus/Main';
import Products_Main from './components/Products/Main';
import Signup from "../src/components/Account/components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../src/components/Account/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "../src/components/Account/components/Dashboard"
import Login from "../src/components/Account/components/Login"
import PrivateRoute from "../src/components/Account/components/PrivateRoute"
import ForgotPassword from "../src/components/Account/components/ForgotPassword"
import UpdateProfile from "../src/components/Account/components/UpdateProfile"
import Footer from './components/Footer';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import "./css/App.css";
import "./css/Body.css"
import "./css/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

  return (
   <React.Fragment>
    <AlertProvider template={AlertTemplate} {...options}>
    <Navbar/>
    <AuthProvider>
      <Route exact path="/" component={Main_Home}/>
      <Route exact path="/Products" component={Products_Main}/>
      <Route exact path="/Contactus" component={Contactus_main}/>
      <Route exact path="/MyAccount" component={Account_main}/>
      <Route exact path="/Cart" component={Cart_main}/>
      <PrivateRoute exact path="/Dashboard" component={Dashboard} />
      <PrivateRoute path="/update-profile" component={UpdateProfile} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </AuthProvider>
      
    <Footer/>
    </AlertProvider>

    </React.Fragment>
  )

  
}
