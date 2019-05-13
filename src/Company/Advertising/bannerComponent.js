import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class BannerComponent extends Component{
    render(){
        return(
            <div class="container" style={{width:"100%", padding:"1em"}}>
             
              <ul class="actions">
                <li> <img src={require('../../images/logo.png')} style={{width: 150}}/>  </li>
                <li><Link to="/" class="button">Home</Link></li>
                <li><Link to="/Technology" class="button">Our Technology</Link></li>
                <li><Link to="/Methodology" class="button">Our Methodology</Link></li>
                <li><Link to="/Contact" class="button">Contact Us</Link></li>
              </ul>
            </div>
        )
    }
}