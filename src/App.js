import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
 
import './App.css';

import FooterComponent from './Views/footerComponent';
import TechnologyComponent from './Company/Technology/TechnologyComponent';
import HeaderComponent from './Views/headerComponent';
import Beliefs from './Company/Beliefs/BeliefsComponent';
import ContactComponent from './Company/Contact/ContactComponent';
import WelcomeComponent from './Company/Landing/Welcome';

 
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
            <Route path="/Contact" component={ContactComponent}/>
        </div>
      </BrowserRouter>
      <FooterComponent/>
      </div>
    )
  }
}

