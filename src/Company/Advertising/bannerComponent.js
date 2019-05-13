import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class BannerComponent extends Component{
    render(){
        return(
          <div className="container" style={{width:"100%", padding:"1em"}}>
              <ul className="actions">
                <li> <img src={require('../../images/logo.png')} style={{width: 150}} alt="banner"/>  </li>
                <li><Link to="/" className="button">Home</Link></li>
                <li><Link to="/Technology" className="button">Technology</Link></li>
                <li><Link to="/Methodology" className="button">Methodology</Link></li>
                <li><Link to="/Public" className="button">Client Area</Link></li>
              </ul>
          </div>
        );
    }
}