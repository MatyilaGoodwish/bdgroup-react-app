import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class BannerComponent extends Component{
    render(){
        return(
            
            <div id="banner" class="container">
              <div class="title">
                <h2>BDSoft develops PWA A-class iOS, Android mobile apps using React Native.</h2>
                <span class="byline">Save your time and up to 30% off investments for cross-platform mobile application development</span>
              </div>
              <ul class="actions">
                <li><Link to="/Contact" class="button">Get Intouch</Link></li>
              </ul>
            </div>
     
        )
    }
}