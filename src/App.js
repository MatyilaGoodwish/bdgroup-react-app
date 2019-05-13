import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import FooterComponent from './Views/FooterComponent';
import TechnologyComponent from './Company/Technology/TechnologyComponent';
import HeaderComponent from './Views/HeaderComponent';
import Beliefs from './Company/Beliefs/BeliefsComponent'; 
import WelcomeComponent from './Company/Landing/Welcome';
import SupportComponent from './Company/ClientZone/Support'; 
import ContactComponent from './Company/Contact/ContactComponent';
import LoginComponent from './Admin/Login';

import { firebase } from 'firebase/firebase-app'

/*
initializeApp({
    apiKey: "AIzaSyBtmbzlzote3niZyXcx9HYx-GIWdv5zx4k",
    authDomain: "bd-group-3763.firebaseapp.com",
    databaseURL: "https://bd-group-3763.firebaseio.com",
    projectId: "bd-group-3763",
    storageBucket: "bd-group-3763.appspot.com",
    messagingSenderId: "52918020059"
});*/
 
export default class App extends Component{
 
  render(){
    return(
      <div>
        <BrowserRouter>
            <HeaderComponent/>
              <div style={{width:'100%', maxWidth:'100%'}}>
                  <Route path="/" component={WelcomeComponent} />
                  <Route path="/Technology" component={TechnologyComponent} />
                  <Route path="/Methodology" component={Beliefs} />
                  <Route path="/Public" component={SupportComponent}/>
                  <Route path="/Contact" component={ContactComponent}/>
                  <Route path="/Accounts" component={LoginComponent}/>
              </div>
          </BrowserRouter>
      <FooterComponent/>
      </div>
    )
  }
}

