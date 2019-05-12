import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
 
import './App.css';
import FooterComponent from './Views/footerComponent';
import CtaComponent from './Views/ctaComponent';
import SilosComponent from './Views/silosComponent';
import HeaderComponent from './Views/headerComponent';
import Beliefs from './Company/Beliefs/BeliefsComponent';

 
export default class App extends Component{
  render(){
    return(
      <div>
      <BrowserRouter>
      <HeaderComponent/>
        <div style={{width:'100%', maxWidth:'100%'}}>
            <Route path="/Technology" component={SilosComponent} />
            <Route path="/Contact" component={CtaComponent} />
            <Route path="/Beliefs" component={Beliefs} />
        </div>
      </BrowserRouter>
      <FooterComponent/>
      </div>
    )
  }
}

