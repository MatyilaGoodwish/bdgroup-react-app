import React , {Component} from "react";
import { Link } from "react-router-dom";
import BannerComponent from "../Company/Advertising/bannerComponent";

export default class HeaderComponent extends Component{
    render(){
        return(
           <div>
            <BannerComponent/>
          </div>
        )
    }
}