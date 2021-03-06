import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Main_Home from './components/Home/Main';
import Account_main from './components/Account/components/App';
import Cart_main from './components/Cart/Main';
import Contactus_main from './components/Contactus/Main';
import Products_Main from './components/Products/Main';
import Signup from "../src/components/Account/components/Signup"
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
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import  privacy  from "./components/Info_text_pages/privacy_policies"
import pricing_patterns from "./components/Info_text_pages/pricing_patterns"
import Locations from "./components/Info_text_pages/Locations";
import Paymentmethods from "./components/Info_text_pages/Paymentmethods";
import Meet_us from "./components/Info_text_pages/Meet_us";
import Customersupport from "./components/Info_text_pages/Customersupport";
import API from "./components/Info_text_pages/API";
import Aboutus from "./components/Info_text_pages/Aboutus";
import Conditions from "./components/Info_text_pages/Conditions";
import Refund_policies from "./components/Info_text_pages/Refund_policies";
import TOS from "./components/Info_text_pages/TOS";
import Creditcardmodal from './components/Cart/creditcardmodal';
import Userorders from "./components/Account/components/userorders"

const queryClient = new QueryClient();
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

        <AuthProvider>
          <Navbar/>
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
            <Route path="/privacy-policies" component={privacy} />
            <Route path="/pricingpatterns" component={pricing_patterns} />
            <Route path="/payment" component={Creditcardmodal} />
            <Route path="/Termsofservice" component={TOS} />
            <Route path="/Refunds" component={Refund_policies} />
            <Route path="/Paymentmethods" component={Paymentmethods} />
            <Route path="/Meetus" component={Meet_us} />
            <Route path="/Locations" component={Locations} />
            <Route path="/support" component={Customersupport} />
            <Route path="/Conditions" component={Conditions} />\
            <Route path="/API" component={API} />
            <Route path="/Aboutus" component={Aboutus} />
            <Route path="/users-orders" component={Userorders} />
            
          <Footer/>
        </AuthProvider>
          
        
        
      </AlertProvider>
    </React.Fragment>
  );
}
