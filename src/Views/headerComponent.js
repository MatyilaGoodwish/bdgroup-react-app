import React , {Component} from "react";
import { Link } from "react-router-dom";
import BannerComponent from "./bannerComponent";

export default class HeaderComponent extends Component{
    render(){
        return(
            <div id="header-wrapper">
            <div id="header" className="container">
              <div id="logo">
                <h1><Link to="/">BDSoft.</Link></h1>
              </div>
              <div id="menu">
                <ul>
                  <li><Link to="/"  >Home</Link></li>
                  <li><Link to="/Technology"  >Services</Link></li>
                  <li><Link to="/Beliefs"  >Our Beliefs</Link></li>
                  <li><Link to="/Contact"  >Contact Us</Link></li>
                </ul>
              </div>
            </div>
             
             <BannerComponent/>
      </div>
        )
    }
}