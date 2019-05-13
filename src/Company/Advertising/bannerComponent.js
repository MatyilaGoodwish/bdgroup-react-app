import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class BannerComponent extends Component{
    render(){
        return(
            <div class="container" style={{width:"100%", padding:"1em"}}>
              <div class="title">
                <h2>BDSoft. Highly Scalable <br/> JavaScript Development.</h2>
                <span>Save your time and up to 30% off investments for cross-platform mobile application development</span>
              </div>
              <ul class="actions">
                <li><Link to="/" class="button">Home</Link></li>
                <li><Link to="/Technology" class="button">Our Technology</Link></li>
                <li><Link to="/Methodology" class="button">Our Methodology</Link></li>
                <li><Link to="/Contact" class="button">Contact Us</Link></li>
              </ul>
            </div>
     
        )
    }
}