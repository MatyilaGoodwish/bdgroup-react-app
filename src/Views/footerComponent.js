import React,{Component} from "react";

export default class FooterComponent extends Component{
    render(){
        return (
            <div id="copyright" className="container" >
                <center>
                    <img src={require('../images/logo.png')} alt="copyright" />
                </center>
                <p>{new Date().getFullYear() } &copy; BDSoft. All rights reserved. Reg: 2016/135921/07 | 5 Sturdee Avenue, Suit 301, Rosebank | info@bdsoft.co.za</p>
            </div>
        )
    }
}